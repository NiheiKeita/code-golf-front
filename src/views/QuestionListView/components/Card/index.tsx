
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
      <div className="mt-5 w-full rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 ">
        <Link
          href={link}
        >
          {body}
        </Link>
      </div>
    </>
  )
})
