
import React from "react"

type Props = {
  className?: string,
  title: string,
  children: React.ReactNode,
}

export const SectionFrame = React.memo<Props>(function SectionFrame({
  className,
  title,
  children,
}) {
  return (

    <div className={'rounded-lg bg-gray-50 p-4 shadow-md ' + className}>
      <p className="mb-2 whitespace-break-spaces text-2xl font-bold">{title}</p>
      <p className="whitespace-break-spaces text-gray-700">{children}</p>
    </div>
  )
})
