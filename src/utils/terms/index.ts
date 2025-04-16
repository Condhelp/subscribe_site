import managerTerms from "./manager"
import privacyTerms from "./privacy"
import cookiesTerms from "./cookies"

export type TContent =
  | {
      type: "title" | "text" | "documentTitle"
      content: string
    }
  | {
      type: "divider"
    }
  | {
      type: "table"
      content: {
        columns: string[]
        items: string[][]
      }
    }

export const terms: { [key: string]: TContent[] } = {
  manager: managerTerms,
  privacy: privacyTerms,
  cookies: cookiesTerms,
}
