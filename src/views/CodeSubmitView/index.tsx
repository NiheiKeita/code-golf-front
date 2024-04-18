import React from "react"

type Props = {
  id: string,
}

export const CodeSubmitView = React.memo<Props>(function CodeSubmitView({
  id,
},) {
  return (
    <div className="w-fit rounded bg-red-500 px-4 py-2 text-white hover:bg-red-300">
      View {id}
    </div>
  )
})
