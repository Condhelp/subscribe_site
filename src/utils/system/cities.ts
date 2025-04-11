import { TSelectOption } from "../../components/Select"

const citiesList: { id: string; name: string }[] = [
  { id: "Florianópolis", name: "Florianópolis" },
  { id: "Palhoça", name: "Palhoça" },
  { id: "São José", name: "São José" },
  { id: "Tijucas", name: "Tijucas" },
  { id: "otherCity", name: "Outra cidade" },
]

export const citiesOptions: TSelectOption[] = citiesList.map((c) => ({
  key: c.id,
  value: c.name,
}))
