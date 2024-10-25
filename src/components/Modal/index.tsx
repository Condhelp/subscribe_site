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

type TModals = "submitStatus" | "terms"

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
      default:
        break
    }

    return el
  }

  return <Dialog open={visible}>{renderModalContent({ onClose })}</Dialog>
}

export default Modal
