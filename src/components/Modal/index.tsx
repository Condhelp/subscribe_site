import Popup from "./variations/Popup"
import SubmitStatus from "./variations/SubmitStatus"
import SubscribeStatus from "./variations/SubscribeStatus"
import TermsModal from "./variations/Terms"

import { Dialog } from "@mui/material"
import TermsPrivacy from "./variations/TermsPrivacy"
import TermsCookies from "./variations/TermsCookies"
import AcceptCookies from "./variations/AcceptCookies"

type Props = {
  visible: boolean
  onClose: () => void
  onSubmit?: () => void
  children?: JSX.Element | JSX.Element[]
  role: TModals
  data?: any
}

type TModals =
  | "cookiesAcception"
  | "submitStatus"
  | "subscribeStatus"
  | "terms"
  | "popup"
  | "privacy"
  | "cookies"

const Modal = (props: Props) => {
  const { visible, onClose, onSubmit } = props

  const renderModalContent = ({ onClose }: any) => {
    let el: any = null

    switch (props.role) {
      case "cookiesAcception":
        el = <AcceptCookies data={props.data} onClose={onClose} />
        break
      case "submitStatus":
        el = <SubmitStatus data={props.data} onClose={onClose} />
        break
      case "subscribeStatus":
        el = <SubscribeStatus onClose={onClose} />
        break
      case "terms":
        el = <TermsModal onSubmit={onSubmit} onClose={onClose} />
        break
      case "privacy":
        el = <TermsPrivacy onSubmit={onSubmit} onClose={onClose} />
        break
      case "cookies":
        el = <TermsCookies onSubmit={onSubmit} onClose={onClose} />
        break
      case "popup":
        el = <Popup img={props.data.img} onClose={onClose} />
        break
      default:
        break
    }

    return el
  }

  return (
    <Dialog
      open={visible}
      sx={
        props.role === "popup"
          ? {
              "& .MuiPaper-root": {
                boxShadow: "none",
                backgroundColor: "transparent",
                padding: "10px 30px",
                overflow: "visible",
              },
            }
          : undefined
      }
    >
      {renderModalContent({ onClose })}
    </Dialog>
  )
}

export default Modal
