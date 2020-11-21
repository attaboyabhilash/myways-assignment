import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import SignUpForm from "../components/SignUpForm"

function SignUp() {
  document.title = "MyWays | SignUp"
  return (
    <div>
      <Header />
      <Hero />
      <SignUpForm />
    </div>
  )
}

export default SignUp
