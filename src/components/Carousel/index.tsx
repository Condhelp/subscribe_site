// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

// Import Swiper styles
import "swiper/css"

import * as S from "./styled"
import { Icons } from "../../assets/icons/icons"

// Slides images
import slide1 from "../../assets/images/broker.png"
import slide2 from "../../assets/images/easy.png"
import general from "../../assets/images/city.jpg"

const Carousel = () => {
  const handleManager = () => {
    const el = document.getElementById("managerRef")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  const handleProvider = () => {
    const el = document.getElementById("providerRef")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  const handleGeneral = () => {
    const el = document.getElementById("generalRef")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <S.Area>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <S.SlideArea>
            <S.SlidePlace>
              <img src={slide1} alt="" />
            </S.SlidePlace>
            <S.SlideContent>
              <S.SlideFor>Síndicos</S.SlideFor>
              <S.SlideMessage>
                Solicite orçamentos de forma <strong>rápida</strong> para seus{" "}
                <strong>condomínios</strong>
              </S.SlideMessage>
              <S.SlideAction onClick={handleManager}>
                {"Saiba mais -->"}
              </S.SlideAction>
            </S.SlideContent>
          </S.SlideArea>
        </SwiperSlide>
        <SwiperSlide>
          <S.SlideArea>
            <S.SlideContent>
              <S.SlideFor>Prestadores</S.SlideFor>
              <S.SlideMessage>
                Aumente seus <strong>leads</strong> com a nossa{" "}
                <strong>solução!</strong>
              </S.SlideMessage>
              <S.SlideAction onClick={handleProvider}>
                {"Saiba mais -->"}
              </S.SlideAction>
            </S.SlideContent>
            <S.SlidePlace>
              <img src={slide2} alt="" />
            </S.SlidePlace>
          </S.SlideArea>
        </SwiperSlide>
        <SwiperSlide>
          <S.SlideArea>
            <img src={general} alt="" />

            <S.SlideContent>
              <Icons.LogoFull width="100%" height={"30%"} />

              <S.SlideMessage>Não é MAIS do MESMO.</S.SlideMessage>
              <S.SlideAction onClick={handleGeneral}>
                {"Saiba mais -->"}
              </S.SlideAction>
            </S.SlideContent>
          </S.SlideArea>
        </SwiperSlide>
      </Swiper>
    </S.Area>
  )
}

export default Carousel
