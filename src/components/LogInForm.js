import React, { useState } from "react"
import { MdClose } from "react-icons/md"
import { FaCheckCircle } from "react-icons/fa"
import { Link, useHistory } from "react-router-dom"

function LogInForm() {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [page, setPage] = useState("login")

  const handleSubmit = e => {
    e.preventDefault()

    console.log({
      email: email,
      password: password,
    })

    setEmail("")
    setPassword("")
    setPage("successful")
  }

  const loginform = () => {
    return (
      <>
        <Link to="/myways-assignment">
          <div className="shadow"></div>
        </Link>
        <div className="login-form">
          <div className="heading">
            <h2>LogIn</h2>
            <Link to="/myways-assignment">
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
                New To MyWays?{" "}
                <Link to="/myways-assignment/signup">SignUp Here</Link>
              </p>
            </form>
          </div>
        </div>
      </>
    )
  }

  const successful = () => {
    setTimeout(() => {
      history.push("/myways-assignment")
    }, 1000)
    return (
      <>
        <div className="shadow"></div>
        <div className="signup-form">
          <div className="signup-heading">
            <Link to="/myways-assignment">
              <MdClose />
            </Link>
          </div>
          <div className="success-message">
            <FaCheckCircle className="check-circle" />
            <h2>Thanks. Successful!</h2>
          </div>
        </div>
      </>
    )
  }

  return <>{page === "login" ? loginform() : successful()}</>
}

export default LogInForm
