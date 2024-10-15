import { app } from "../services/firebase"
import { TApi } from "./type"
import {
  addDoc,
  collection,
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
}

const addCode: TApi["addCode"] = async ({ code }) => {
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

const getCode: TApi["getCode"] = async ({ code }) => {
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

const useCode: TApi["useCode"] = async ({ code }) => {
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

export const Api = {
  addCode,
  getCode,
  useCode,
}
