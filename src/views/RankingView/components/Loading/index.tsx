"use client"

import React from "react"

export const Loading = React.memo(function Loading() {
  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-2 rounded-lg bg-gray-800 px-4 py-2 text-gray-200 shadow-lg">
      <svg className="size-5 animate-spin text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>ローディング...</span>
    </div>
  )
})
