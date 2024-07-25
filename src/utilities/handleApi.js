import axios from 'axios'
import { localStorages } from './localStorages'

export const getApi = async (URL) => {
  const url = await axios
    .get(URL)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      return e.response
    })
  return url
}

export const postApi = async (URL, params) => {
  const url = await axios
    .post(URL, params)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      return e.response
    })
  return url
}

export const apiValidation = (result) => {
  if (result.status >= 400) {
    return result.data.message
  } else {
    localStorages(result.token)
  }
}
