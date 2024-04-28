"use client"

import dynamic from "next/dynamic"
import React from "react"
const Notification = dynamic(() => import( './components/Notification'))

export const RankingView = React.memo(function RankingView() {
  return (
    <>
      <div>
        <div>
          <p className="text-black">
            らんきんぐ画面
          </p>
        </div>
        <Notification />
      </div>
    </>
  )
})
