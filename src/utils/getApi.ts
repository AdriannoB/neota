import axios from 'axios'

type DataCode = 'mavg' | 'annualavg'

type DataType = string

interface ApiProps {
  code: DataCode
  type: DataType
  start: number
  end: number
  country: string
}

const apiUrl = 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/'

export const getApi = async ({ code, type, start, end, country }: ApiProps) => {
  return await axios
    .get(apiUrl + code + '/' + type + '/' + start + '/' + end + '/' + country)
    .then((response: any) => {
      return response
    })
    .catch((error: any) => {
      return error
    })
}
