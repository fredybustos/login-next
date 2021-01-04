import { useState } from "react"

import styles from "../signup/Signup.module.css"

import Button from "components/button"
import { signinWithEmail } from "firebase/client"

export default function SigninWithEmail() {
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const handleSignin = (event) => {
    event.preventDefault()
    setLoading(true)
    signinWithEmail({ ...values }).then(() => setLoading(false))
  }

  const handleChangeValue = (event) => {
    const { name, value } = event.currentTarget
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <form className={styles.form} onSubmit={handleSignin}>
      <div className={styles.inputs}>
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
          onChange={handleChangeValue}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
          onChange={handleChangeValue}
        />
      </div>
      <div className={styles.buttons}>
        <Button
          width="30%"
          variant="primary"
          loadingColor="#fff"
          type="submit"
          loading={loading}
          disabled={loading}
        >
          Save
        </Button>
      </div>
    </form>
  )
}
