// gsap-provider.tsx
import React, { createContext, useContext, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const GSAPContext = createContext<gsap.Context | null>(null)

export const GSAPProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scope = useRef(null)

  // create a gsap context (safe animations with automatic cleanup)
  const context = useGSAP(() => {
    // you can put global animations here if needed
  }, { scope })

  return (
    <GSAPContext.Provider value={context.context}>
      <div ref={scope}>{children}</div>
    </GSAPContext.Provider>
  )
}

// custom hook to access gsap context
export const useGSAPContext = () => {
  const ctx = useContext(GSAPContext)
  if (!ctx) throw new Error("useGSAPContext must be used within GSAPProvider")
  return ctx
}
