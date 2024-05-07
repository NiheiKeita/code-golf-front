
import Link from "next/link"
import React from "react"

type Props = {
  link: string,
  body: string,
}
export const Card = React.memo<Props>(function Card({
  link, body
}) {
  return (
    <>
      <Link
        href={link}
      >
        <div className="mt-5 w-full rounded-lg border bg-gray-200 p-6 text-gray-700 transition duration-300 hover:bg-gray-100">
          {body}
        </div>
      </Link>
    </>
  )
})
