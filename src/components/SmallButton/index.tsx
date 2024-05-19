

import React from "react"
import { LoadingIcon } from "../LoadingIcon"

type Props = {
  variant?: "black" | "blue"
  text: string,
  handleClick: () => void,
  disable?: boolean,
}

export const SmallButton = React.memo<Props>(function SmallButton({
  text,
  variant,
  handleClick,
  disable = false,
}) {
  const color = (() => {
    switch (variant) {
      case 'black':
        return 'bg-gray-800 hover:bg-gray-600 disabled:bg-gray-500';
      case 'blue':
        return 'bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300';
      default:
        return 'bg-gray-800 hover:bg-gray-600 disabled:bg-gray-600';
    }
  })()
  return (
    <div className="flex items-center">
      <button
        disabled={disable}
        onClick={handleClick}
        className={`${color} inline-block rounded-lg px-8 py-2 font-semibold text-white shadow-md transition duration-300 hover:scale-105`}
      >
        {text}
      </button>
      {disable && (
        <div className="ml-2 flex items-center justify-center">
          <LoadingIcon variant={variant} />
        </div>
      )}
    </div>
    // <div className="flex">
    //   <button disabled={disable} onClick={handleClick} className={color + ' cursor-pointer inline-block rounded-md px-4 py-2 text-white transition duration-300 focus:outline-none focus:ring focus:ring-gray-300'}>
    //     {text}
    //   </button>
    //   {disable && (<div className="ml-2 flex items-center justify-center"><LoadingIcon variant={variant} /></div>)}
    // </div>
  )
})
