import React, { useState } from "react"
import { MdClose } from "react-icons/md"
import { FaCheckCircle } from "react-icons/fa"
import { Link, useHistory } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

function LogInForm() {
  const history = useHistory()
  const [page, setPage] = useState("login")

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Minimum 6 character required")
      .required("Required"),
  })

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
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={SignupSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setPage("Success")
                  setSubmitting(false)
                  console.log(values)
                }, 500)
              }}
            >
              {({ errors, isSubmitting }) => (
                <Form>
                  <Field type="email" name="email" placeholder="Email" />
                  <ErrorMessage
                    name="email"
                    component="small"
                    style={{ color: "#FF0000" }}
                  />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="small"
                    style={{ color: "#FF0000" }}
                  />
                  <p className="forgot">Forgot Password?</p>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                  <p className="new-to-myways">
                    New To MyWays?{" "}
                    <Link to="/myways-assignment/signup">SignUp Here</Link>
                  </p>
                </Form>
              )}
            </Formik>
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
