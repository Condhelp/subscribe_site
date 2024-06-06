export const formatDate = (value: string) => {
  // Remove todos os caracteres não numéricos
  value = value.replace(/\D/g, "")

  // Verifica o comprimento do value
  if (value.length > 8) {
    value = value.slice(0, 8)
  }

  // Formata a data no formato dd/mm/yyyy
  let formattedValue = ""
  for (let i = 0; i < value.length; i++) {
    if (i === 2 || i === 4) {
      formattedValue += "/"
    }
    formattedValue += value[i]
  }

  // Atualiza o valor do campo de entrada
  return formattedValue
}

// Função para validar a data
export const checkDate = (value: string) => {
  let ok = true

  let slices = value.split("/")
  let day = parseInt(slices[0], 10)
  let month = parseInt(slices[1], 10)
  let year = parseInt(slices[2], 10)

  // Verifica se o ano é bissexto
  let bissexto = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)

  // Define os limites de dias de cada mês
  let limitesDias = [
    31,
    bissexto ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ]

  // Verifica se o mês e o dia são válidos
  if (month < 1 || month > 12 || day < 1 || day > limitesDias[month - 1]) {
    ok = false
  }

  return ok
}
