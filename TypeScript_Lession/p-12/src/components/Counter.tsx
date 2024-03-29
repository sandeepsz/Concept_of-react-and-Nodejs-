import { ReactNode } from "react"

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>,
  children : ReactNode
}

export const Counter = ({setCount, children}: CounterProps) => {
  return (
    <>
        <h1>{children}</h1>
        <button onClick={()=> setCount(inc => inc + 1)}>+</button>
        <button onClick={()=> setCount(inc => inc - 1)}>-</button>
    </>
  )
}
