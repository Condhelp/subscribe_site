import axios, { AxiosError, AxiosResponse } from "axios"
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
  waitingLine: "waitingLine",
  eventInfo: "eventInfo",
}

const mailUrl = process.env.REACT_APP_BACK_URL + "/api/sendemail"
const baseUrl = process.env.REACT_APP_API_BASE_URL ?? "https://api.condhelp.com"

const subscribersLimit = 138

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
        terms: form.terms,
      }

      const subscribers = await getDocs(
        collection(db, collsNames.subscriptions)
      )

      if (subscribers.size === subscribersLimit) {
        const newSubscription = await addDoc(
          collection(db, collsNames.waitingLine),
          obj
        )

        resolve({
          ok: true,
          data: { ...obj, id: newSubscription.id, waitingLine: true },
        })
      } else {
        const newSubscription = await addDoc(
          collection(db, collsNames.subscriptions),
          obj
        )

        resolve({
          ok: true,
          data: { ...obj, id: newSubscription.id },
        })
      }
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

/*
 *  --------------------
 *  Manager sign up
 *  --------------------
 */

const managerSignUp: TApi["manager"]["signUp"] = async (data) => {
  return new Promise(async (resolve) => {
    await axios
      .post(`${baseUrl}/public/manager/register`, data)
      .then((req) => {
        if (req.status === 200) {
          resolve({ ok: true, data: null as any })
        } else {
          let errorMessage = ""

          if (req.data.error && typeof req.data.error === "string") {
            errorMessage = req.data.error
          } else {
            errorMessage =
              "Não foi possível realizar o cadastro no momento. Tente novamente mais tarde."
          }

          resolve({ ok: false, error: errorMessage })
        }
      })
      .catch((res: AxiosError) => {
        let errorMessage = ""

        if (res.response) {
          if (
            (res.response as AxiosResponse).data.error &&
            typeof (res.response as AxiosResponse).data.error === "string"
          ) {
            errorMessage = (res.response as AxiosResponse).data.error
          } else {
            errorMessage =
              "Não foi possível realizar o cadastro no momento. Tente novamente mais tarde."
          }
        } else {
          errorMessage =
            "Não foi possível realizar o cadastro no momento. Tente novamente mais tarde."
        }

        resolve({ ok: false, error: errorMessage })
      })
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
  manager: {
    signUp: managerSignUp,
  },
}
