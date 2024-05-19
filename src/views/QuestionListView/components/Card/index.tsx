
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
    <Link href={link}>
      <div className="rounded-lg bg-gray-100 bg-opacity-20 p-4 shadow-md transition duration-300 hover:scale-105">
        <p className="block text-white">{body}</p>
      </div>
    </Link>
  )
})
