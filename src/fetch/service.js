import axios from 'axios'

export const httpCall2 = async (url, header, method = 'POST', body) => {
  if (!url) {
    throw Error('Please pass the valid url')
  }
  console.log(url)
  console.log(header)
  console.log(method)
  console.log(body)
  const data = await axios.post(url, body, {
    headers: header
  })
  return { data: data.data }
}