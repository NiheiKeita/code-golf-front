
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

    <div className={`whitespace-break-spaces rounded-lg bg-gray-600 p-4 shadow-md ${className}`}>
      <h2 className="mb-2 whitespace-break-spaces text-xl font-semibold text-white">{title}</h2>
      <div className="text-white">{children}</div>
    </div>
    // <div className={'rounded-lg bg-gray-100 p-4 shadow text-gray-700 ' + className}>
    //   <div className="mb-2 whitespace-break-spaces text-2xl font-bold">{title}</div>
    //   <div className="whitespace-break-spaces text-gray-700">{children}</div>
    // </div>
  )
})
