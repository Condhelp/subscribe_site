import { TInvitation } from "../utils/@types/invitation"
import { TSubscription } from "../utils/@types/subscription"

export type TApi = {
  code: {
    addCode: (p: TParams["addCode"]) => TResponse["code"]["addCode"]
    getCode: (p: TParams["getCode"]) => TResponse["code"]["getCode"]
    useCode: (p: TParams["useCode"]) => TResponse["code"]["useCode"]
  }
  subscription: {
    checkEmail: (
      p: TParams["checkEmail"]
    ) => TResponse["subscription"]["checkEmail"]
    subscribe: (
      p: TParams["subscribe"]
    ) => TResponse["subscription"]["subscribe"]
  }
  email: {
    sendEmail: (p: TParams["sendEmail"]) => TResponse["email"]["sendEmail"]
  }
  event: {
    getInfo: (p: TParams["getEventInfo"]) => TResponse["event"]["getInfo"]
  }
}

/*
 * Params
 */

type TParams = {
  // code
  getCode: { code: string }
  addCode: { code: string }
  useCode: { code: string }

  // Subscription
  checkEmail: { email: string }
  subscribe: {
    name: string
    cpf: string
    birthdate: string
    email: string
    phone: string
    condominium: string
    code: string
    robot: boolean
  }

  // Email
  sendEmail: {
    date: string
    local: string
    localLink: string
    code: string
    inscriptionDate: string
    subscriberName: string
    subscriberEmail: string
  }

  // Event
  getEventInfo: {}
}

/*
 * Response
 */

type TDefaultRes<T> = { ok: false; error: string } | { ok: true; data: T }

type TResponse = {
  code: {
    addCode: Promise<TDefaultRes<TInvitation>>
    useCode: Promise<TDefaultRes<TInvitation>>
    getCode: Promise<TDefaultRes<Partial<TInvitation>>>
  }
  subscription: {
    checkEmail: Promise<TDefaultRes<{ used: boolean }>>
    subscribe: Promise<TDefaultRes<TSubscription>>
  }
  email: {
    sendEmail: Promise<TDefaultRes<{ sended: boolean }>>
  }
  event: {
    getInfo: Promise<
      TDefaultRes<{
        date: string
        local: string
        localLink: string
      }>
    >
  }
}
