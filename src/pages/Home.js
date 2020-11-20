import React from "react"
import { useSelector } from "react-redux"
import Header from "../components/Header"
import { selectTheme } from "../features/theme/themeSlice"

function Home() {
  const theme = useSelector(selectTheme)

  return (
    <div>
      <Header />
    </div>
  )
}

export default Home
