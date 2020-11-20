import React, { useState } from "react"
import { MdClose, MdArrowBack } from "react-icons/md"
import { FaCheckCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

function SignUpForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [otpNumber, setOTPNumber] = useState(null)
  const [page, setPage] = useState("signup")

  const handleSubmit = e => {
    e.preventDefault()

    console.log({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    })

    setPage("otp")
  }

  const handleOTPEnter = () => {
    if (otpNumber !== null) {
      setPage("successful")
    }
  }

  const signupform = () => {
    return (
      <>
        <div className="signup-heading">
          <Link to="/">
            <MdClose />
          </Link>
        </div>
        <div className="signup-form-div">
          <h2>SignUp</h2>
          <p>It's quick and easy</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={e => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={e => setLastName(e.target.value)}
              required
              className="text-last"
            />
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
            <input type="submit" value="SignUp" />
          </form>
        </div>
      </>
    )
  }

  const otpform = () => {
    return (
      <>
        <div onClick={() => setPage("signup")}>
          <MdArrowBack className="arrow-back" />
        </div>
        <div className="otp-sent">
          <h2>OTP sent!</h2>
          <input
            type="number"
            value={otpNumber}
            placeholder="Enter your OTP"
            onChange={e => setOTPNumber(e.target.value)}
            required
          />
          <p>
            One time Passcode sent to your Email ID - <b>{email}</b>
          </p>
          <button onClick={handleOTPEnter}>Enter</button>
        </div>
      </>
    )
  }

  const successful = () => {
    return (
      <>
        <div className="signup-heading">
          <Link to="/">
            <MdClose />
          </Link>
        </div>
        <div className="success-message">
          <FaCheckCircle className="check-circle" />
          <h2>Thanks. Successful!</h2>
        </div>
      </>
    )
  }

  return (
    <>
      <Link to="/">
        <div className="shadow"></div>
      </Link>
      <div className="signup-form">
        {page === "signup"
          ? signupform()
          : page === "otp"
          ? otpform()
          : successful()}
      </div>
    </>
  )
}

export default SignUpForm
