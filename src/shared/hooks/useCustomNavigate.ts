import { useNavigate } from "react-router-dom"

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const to = (path: string) => {
    return navigate(path)
  }

  const back = () => {
    return navigate(-1)
  }

  const replace = (path: string) => {
    return navigate(path, { replace: true })
  }

  return { to, back, replace }
}