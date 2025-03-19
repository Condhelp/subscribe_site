import { TSelectOption } from "../../components/Select"

const citiesList: { id: string; name: string }[] = [
  { id: "id1", name: "Florianópolis" },
  { id: "id2", name: "Palhoça" },
  { id: "id3", name: "São José" },
  { id: "id4", name: "Biguaçu" },
  { id: "id5", name: "Tijucas" },
]

export const citiesOptions: TSelectOption[] = citiesList.map((c) => ({
  key: c.id,
  value: c.name,
}))
