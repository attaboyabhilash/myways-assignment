import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import LogInForm from "../components/LogInForm"

function LogIn() {
  document.title = "MyWays | LogIn"
  return (
    <div>
      <Header />
      <Hero />
      <LogInForm />
    </div>
  )
}

export default LogIn
