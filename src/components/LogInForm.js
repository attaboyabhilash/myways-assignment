import React, { useState } from "react"
import { MdClose } from "react-icons/md"
import { Link } from "react-router-dom"

function LogInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    console.log({
      email: email,
      password: password,
    })

    setEmail("")
    setPassword("")
  }
  return (
    <>
      <Link to="/">
        <div className="shadow"></div>
      </Link>
      <div className="login-form">
        <div className="heading">
          <h2>LogIn</h2>
          <Link to="/">
            <MdClose />
          </Link>
        </div>
        <div className="form-div">
          <h4>Student</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              required
            />
            <p className="forgot">Forgot Password?</p>
            <input type="submit" value="LogIn" />
            <p className="new-to-myways">
              New To MyWays? <Link to="/signup">SignUp Here</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default LogInForm
