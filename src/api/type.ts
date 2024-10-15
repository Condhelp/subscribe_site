import { TInvitation } from "../utils/@types/invitation"

export type TApi = {
  addCode: (p: TParams["addCode"]) => TResponse["addCode"]
  getCode: (p: TParams["getCode"]) => TResponse["getCode"]
  useCode: (p: TParams["useCode"]) => TResponse["useCode"]
}

/*
 * Params
 */

type TParams = {
  getCode: { code: string }
  addCode: { code: string }
  useCode: { code: string }
}

/*
 * Response
 */

type TDefaultRes<T> = { ok: false; error: string } | { ok: true; data: T }

type TResponse = {
  addCode: Promise<TDefaultRes<TInvitation>>
  useCode: Promise<TDefaultRes<TInvitation>>
  getCode: Promise<TDefaultRes<Partial<TInvitation>>>
}
