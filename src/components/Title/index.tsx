"use client"

import React from "react"

type Props = {
  children: React.ReactNode,
}

export const Title = React.memo<Props>(function Title({
  children,
}) {
  return (
    <p className="my-10 text-5xl font-bold text-black">
      {children}
    </p>
  )
})
