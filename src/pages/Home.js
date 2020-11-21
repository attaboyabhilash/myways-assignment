import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"

function Home() {
  document.title = "MyWays | Home"
  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}

export default Home
