
import Link from "next/link";
import React from "react"

type Props = {
  variant?: "black" | "blue"
  text: string,
  href: string,
}

export const SmallButton = React.memo<Props>(function SmallButton({
  text,
  href,
  variant
}) {
  const color = (() => {
    switch (variant) {
      case 'black':
        return 'bg-gray-800 hover:bg-gray-600';
      case 'blue':
        return 'bg-blue-600 hover:bg-blue-500';
      default:
        return 'bg-gray-800 hover:bg-gray-600';
    }
  })()

  return (
    <Link href={href}>
      <div className={color + ' inline-block rounded-md px-4 py-2 text-white transition duration-300 focus:outline-none focus:ring focus:ring-gray-300'}>
        {text}
      </div>
    </Link>
  )
})
