"use client"

import React from "react"
import Notification from './components/Notification'

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
