import { useEffect } from "react"

type Params = {
  onUpdate: () => void,
  waitTime: any
}

export const useInterval = ({ onUpdate, waitTime}: Params) => {
  useEffect(() => {
    const timerId = setInterval(() => onUpdate(), waitTime)
    return () => clearInterval(timerId)
  }, [])
}
