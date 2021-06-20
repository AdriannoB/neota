import { countryOptions, periodOptions, typeOptions } from './select-options'

export const getSelectedPeriod = (selectedPeriod: any) => {
  const periodSelect = periodOptions.filter(
    (item) => item.value === selectedPeriod
  )

  return periodSelect
}

export const getSelectedType = (selectedType: any) => {
  const typeSelected = typeOptions.filter((item) => item.value === selectedType)

  return typeSelected
}

export const getSelectedCountry = (selectedCountry: any) => {
  const countrySelected = countryOptions.filter(
    (item) => item.value === selectedCountry
  )

  return countrySelected
}
