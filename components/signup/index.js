import { useState } from "react"

import styles from "./Signup.module.css"

import Button from "components/button"
import { signupWithEmail } from "firebase/client"

export default function SignupWithEmail() {
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
  })

  const handleSignup = (event) => {
    event.preventDefault()
    setLoading(true)
    signupWithEmail({ ...values }).then(() => setLoading(false))
  }

  const handleChangeValue = (event) => {
    const { name, value } = event.currentTarget
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <form className={styles.form} onSubmit={handleSignup}>
      <div className={styles.inputs}>
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className={styles.input}
          onChange={handleChangeValue}
        />
        <input
          required
          type="text"
          name="lastName"
          id="lastName"
          placeholder="last name"
          className={styles.input}
          onChange={handleChangeValue}
        />
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={styles.input}
          onChange={handleChangeValue}
        />
        <input
          required
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={styles.input}
          onChange={handleChangeValue}
        />
      </div>
      <div className={styles.buttons}>
        <Button
          loading={loading}
          disabled={loading}
          loadingColor="#fff"
          variant="primary"
          type="submit"
        >
          Save
        </Button>
      </div>
    </form>
  )
}
