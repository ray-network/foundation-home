import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
})

export async function fetchRawUrl(url) {
  return apiClient.get(url)
}

export async function getPrices() {
  return apiClient.get("/simple/price?ids=bitcoin,cardano&vs_currencies=USD")
}
