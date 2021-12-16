import { useEffect } from 'react'

const useScrollFromTop = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
}

export default useScrollFromTop
