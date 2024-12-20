import Popup from "./variations/Popup"
import SubmitStatus from "./variations/SubmitStatus"
import TermsModal from "./variations/Terms"

import { Dialog } from "@mui/material"

type Props = {
  visible: boolean
  onClose: () => void
  children?: JSX.Element | JSX.Element[]
  role: TModals
  data?: any
}

type TModals = "submitStatus" | "terms" | "popup"

const Modal = (props: Props) => {
  const { visible, onClose } = props

  const renderModalContent = ({ onClose }: any) => {
    let el: any = null

    switch (props.role) {
      case "submitStatus":
        el = <SubmitStatus data={props.data} onClose={onClose} />
        break
      case "terms":
        el = <TermsModal onClose={onClose} />
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
