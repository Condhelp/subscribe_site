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
}
