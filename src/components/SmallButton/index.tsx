

import React from "react"

type Props = {
  variant?: "black" | "blue"
  text: string,
  handleClick: () => void,
}

export const SmallButton = React.memo<Props>(function SmallButton({
  text,
  variant,
  handleClick,
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
    <div onClick={handleClick}>
      <div className={color + ' inline-block rounded-md px-4 py-2 text-white transition duration-300 focus:outline-none focus:ring focus:ring-gray-300'}>
        {text}
      </div>
    </div>
  )
})
