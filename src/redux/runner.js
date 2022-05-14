import { useDispatch } from "react-redux"
import { notSSR } from "@/utils"

const Runner = ({ children }) => {
  const dispatch = useDispatch()

  if (notSSR) {
    setInterval(() => {
      dispatch({ type: "settings/FETCH_NETWORK_STATE" })
    }, 60 * 1000)

    // setInterval(() => {
    //   dispatch({ type: "settings/FETCH_PRICES" })
    //   dispatch({ type: "settings/FETCH_POOLS" })
    // }, 300 * 1000)
  }

  return children
}

export default Runner
