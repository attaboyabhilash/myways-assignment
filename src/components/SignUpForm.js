import React, { useState } from "react"
import { MdClose, MdArrowBack } from "react-icons/md"
import { FaCheckCircle } from "react-icons/fa"
import { Link, useHistory } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

function SignUpForm() {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [page, setPage] = useState("signup")

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Minimum 3 character required")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Minimum 3 character required")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Minimum 6 character required")
      .required("Required"),
  })

  const signupform = () => {
    return (
      <>
        <div className="signup-heading">
          <Link to="/myways-assignment">
            <MdClose />
          </Link>
        </div>
        <div className="signup-form-div">
          <h2>SignUp</h2>
          <p>It's quick and easy</p>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setPage("otp")
                setSubmitting(false)
                setEmail(values.email)
                console.log(values)
              }, 500)
            }}
          >
            {({ errors, isSubmitting }) => (
              <Form>
                <div className="formik-flex">
                  <div className="flex-first">
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="small"
                      style={{ color: "#FF0000" }}
                    />
                  </div>
                  <div className="flex-last">
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="small"
                      style={{ color: "#FF0000" }}
                    />
                  </div>
                </div>
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage
                  name="email"
                  component="small"
                  style={{ color: "#FF0000" }}
                />
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage
                  name="password"
                  component="small"
                  style={{ color: "#FF0000" }}
                />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </>
    )
  }

  const otpSchema = Yup.object().shape({
    otpValue: Yup.string()
      .min(6, "Minimum 6 character required")
      .max(6, "Maximum 6 characters only")
      .required("Required"),
  })

  const otpform = () => {
    return (
      <>
        <div onClick={() => setPage("signup")}>
          <MdArrowBack className="arrow-back" />
        </div>
        <div className="otp-sent">
          <h2>OTP sent!</h2>
          <Formik
            initialValues={{ otpValue: "" }}
            validationSchema={otpSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setPage("successful")
                setSubmitting(false)
                console.log(values)
              }, 500)
            }}
          >
            {({ errors, isSubmitting }) => (
              <Form>
                <Field
                  type="number"
                  name="otpValue"
                  placeholder="Enter Your OTP"
                />
                <ErrorMessage
                  name="otpValue"
                  component="small"
                  style={{ color: "#FF0000" }}
                />
                <p>
                  One time Passcode sent to your Email ID - <b>{email}</b>
                </p>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
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
        <div className="signup-heading">
          <Link to="/myways-assignment">
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
      <Link to="/myways-assignment">
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
