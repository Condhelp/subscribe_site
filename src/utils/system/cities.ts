import { TSelectOption } from "../../components/Select"

const citiesList: { id: string; name: string }[] = [
  { id: "Florianópolis", name: "Florianópolis" },
  { id: "Palhoça", name: "Palhoça" },
  { id: "São José", name: "São José" },
  { id: "Santo Amaro", name: "Santo Amaro" },
  { id: "Biguaçu", name: "Biguaçu" },
  { id: "Antonio Carlos", name: "Antonio Carlos" },
  { id: "otherCity", name: "Outra" },
]

export const citiesOptions: TSelectOption[] = citiesList.map((c) => ({
  key: c.id,
  value: c.name,
}))
