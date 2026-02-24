import Popup from "./variations/Popup"
import SubmitStatus from "./variations/SubmitStatus"
import SubscribeStatus from "./variations/SubscribeStatus"
import TermsModal from "./variations/Terms"

import { Dialog } from "@mui/material"
import TermsPrivacy from "./variations/TermsPrivacy"
import TermsCookies from "./variations/TermsCookies"
import AcceptCookies from "./variations/AcceptCookies"
import Maintence from "./variations/Maintence"

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
  | "maintence"

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
      case "maintence":
        el = <Maintence />
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
          : props.role === "cookiesAcception"
          ? {
              "&": {
                bottom: 0,
                top: "100%",
                transform: "translateY(-100%)",
                height: "fit-content",
                padding: 0,
                maxWidth: "100%",
              },
              "& .MuiPaper-root": {
                width: "100%",
                margin: 0,
                borderRadius: 0,
                maxWidth: "unset",
              },
            }
          : {
            "&": {
              backdropFilter: "blur(8px)",
            }
          }
      }
    >
      {renderModalContent({ onClose })}
    </Dialog>
  )
}

export default Modal
