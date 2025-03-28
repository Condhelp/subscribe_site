import * as S from "./styled"

type Props = {
  data: {
    message: string
    visible: boolean
    state: "success" | "alert" | "error"
  }
}

const Feedback = ({ data }: Props) => {
  return (
    <S.Box
      $color={
        data.state === "success"
          ? "green"
          : data.state === "alert"
          ? "orange"
          : "red"
      }
      $visible={data.visible}
    >
      <span>{data.message}</span>
    </S.Box>
  )
}

export default Feedback
