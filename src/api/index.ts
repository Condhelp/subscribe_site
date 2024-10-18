import axios from "axios"
import { app } from "../services/firebase"
import { TApi } from "./type"
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore"

const db = getFirestore(app)

const collsNames = {
  invitations: "invitations",
  subscriptions: "subscriptions",
  eventInfo: "eventInfo",
}

const mailUrl = process.env.REACT_APP_BACK_URL + "/api/sendemail"

const addCode: TApi["code"]["addCode"] = async ({ code }) => {
  return new Promise(async (resolve) => {
    try {
      const q = query(
        collection(db, collsNames.invitations),
        where("code", "==", code)
      )

      const querySnap = await getDocs(q)

      if (querySnap.docs.length > 0) {
        const docSnap = querySnap.docs[0]

        if (docSnap.exists()) {
          throw new Error("Este convite já está cadastrado")
        }
      } else {
        await addDoc(collection(db, collsNames.invitations), {
          code,
          used: false,
        })
      }
    } catch (error) {
      resolve({ ok: false, error: (error as any).message })
    }
  })
}

const getCode: TApi["code"]["getCode"] = async ({ code }) => {
  return new Promise(async (resolve) => {
    try {
      const q = query(
        collection(db, collsNames.invitations),
        where("code", "==", code)
      )

      const querySnap = await getDocs(q)

      if (querySnap.docs.length > 0) {
        const docSnap = querySnap.docs[0]
        resolve({
          ok: true,
          data: {
            used: docSnap.data().used,
          },
        })
      } else {
        throw new Error("Este código é inválido")
      }
    } catch (error) {
      resolve({ ok: false, error: (error as any).message })
    }
  })
}

const useCode: TApi["code"]["useCode"] = async ({ code }) => {
  return new Promise(async (resolve) => {
    try {
      const q = query(
        collection(db, collsNames.invitations),
        where("code", "==", code)
      )

      const querySnap = await getDocs(q)

      const docRef = querySnap.docs[0].ref
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          used: true,
        })

        resolve({
          ok: true,
          data: {
            ...(docSnap.data() as any),
            used: true,
          },
        })
      } else {
        throw new Error("Este código é inválido")
      }
    } catch (error) {
      resolve({ ok: false, error: (error as any).message })
    }
  })
}

/*
 *  --------------------
 *  Subscription
 *  --------------------
 */

const checkEmail: TApi["subscription"]["checkEmail"] = async ({ email }) => {
  return new Promise(async (resolve) => {
    try {
      const q = query(
        collection(db, collsNames.subscriptions),
        where("email", "==", email)
      )

      const querySnap = await getDocs(q)

      const qt = querySnap.docs.length

      if (qt === 0) {
        resolve({
          ok: true,
          data: {
            used: false,
          },
        })
      } else {
        throw new Error("Esse email já foi cadastrado")
      }
    } catch (error) {
      resolve({ ok: false, error: (error as any).message })
    }
  })
}

const subscribe: TApi["subscription"]["subscribe"] = async (form) => {
  return new Promise(async (resolve) => {
    try {
      const obj = {
        name: form.name,
        cpf: form.cpf,
        birthdate: form.birthdate,
        email: form.email,
        phone: form.phone,
        condominium: form.condominium,
        code: form.code,
      }

      const newSubscription = await addDoc(
        collection(db, collsNames.subscriptions),
        obj
      )

      resolve({
        ok: true,
        data: { ...obj, id: newSubscription.id },
      })
    } catch (error) {
      resolve({
        ok: false,
        error: (error as any).message,
      })
    }
  })
}

/*
 *  --------------------
 *  Email
 *  --------------------
 */

const sendEmail: TApi["email"]["sendEmail"] = async (data) => {
  return new Promise(async (resolve) => {
    try {
      const req = await axios.post(mailUrl, data)

      if (req.data && req.data.sended === true) {
        resolve({ ok: true, data: { sended: true } })
      } else {
        if (req.status === 400) {
          resolve({ ok: false, error: req.data.message })
        } else {
          throw new Error(
            "Houve um erro ao enviar seu email, mas sua inscrição está garantida. Entre em contato para mais informações"
          )
        }
      }
    } catch (error) {
      resolve({ ok: false, error: (error as any).message })
    }
  })
}

/*
 *  --------------------
 *  Event
 *  --------------------
 */

const getEventInfo: TApi["event"]["getInfo"] = async (data) => {
  return new Promise(async (resolve) => {
    try {
      const docSnap = await getDoc(doc(db, collsNames.eventInfo, "current"))

      if (docSnap.exists()) {
        const eventData = docSnap.data()

        resolve({ ok: true, data: eventData as any })
      } else {
        throw new Error(
          "Esse evento não está disponível no momento. Tente novamente mais tarde"
        )
      }
    } catch (error) {
      resolve({ ok: false, error: (error as any).message })
    }
  })
}

export const Api: TApi = {
  code: {
    addCode,
    getCode,
    useCode,
  },
  subscription: {
    checkEmail,
    subscribe,
  },
  email: {
    sendEmail,
  },
  event: {
    getInfo: getEventInfo,
  },
}
