import "./styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      green: {
        dark: string
        medium: string
        light: string
      }
      yellow: {
        medium: string
        light: string
      }
      white: {
        main: string
      }
    }
    bp: {
      large: number
      medium: number
      small: number
      xsmall: number
    }
  }
}
