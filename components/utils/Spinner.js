import React from 'react'

export default function Spinner({ size = "sm" }) {

  if (size == "md") {
    return (
      <div className={`cursor-default h-[25px] w-[25px] rounded-full border-[2px] border-t-[green] border-r-[rgba(255,255,255,.6)] border-b-[rgba(255,255,255,.6)] border-l-[rgba(255,255,255,.6)] animate-spin`}></div>
    )
  }
  else if (size == "lg") {
    return (
      <div className={`cursor-default h-[30px] w-[30px] rounded-full border-[2px] border-t-[green] border-r-[rgba(255,255,255,.6)] border-b-[rgba(255,255,255,.6)] border-l-[rgba(255,255,255,.6)] animate-spin`}></div>
    )
  }
  else if (size == "xlg") {
    return (
      <div className={`cursor-default h-[40px] w-[40px] rounded-full border-[2px] border-t-[green] border-r-[rgba(255,255,255,.6)] border-b-[rgba(255,255,255,.6)] border-l-[rgba(255,255,255,.6)] animate-spin`}></div>
    )
  }
  else {
    return (
      <div className={`cursor-default h-[20px] w-[20px] rounded-full border-[2px] border-t-[green] border-r-[rgba(255,255,255,.6)] border-b-[rgba(255,255,255,.6)] border-l-[rgba(255,255,255,.6)] animate-spin`}></div>
    )
  }
}