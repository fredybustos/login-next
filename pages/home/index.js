import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import styles from "./Home.module.css"
import { USER_STATES } from "../login"

import Avatar from "components/avatar"
import Button from "components/button"
import Spinner from "components/spinner"

import { logoutUser, onAuthStateChange } from "firebase/client"

export default function Home() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChange(setUser)
  }, [])

  const handleLogout = () => {
    logoutUser().then(() => {
      router.replace("/")
    })
  }

  return (
    <div className={styles.container}>
      {user !== USER_STATES.NOT_KNOWN && user !== USER_STATES.NOT_LOGGED ? (
        <>
          <div className={styles.signup}>
            <Button variant="text" onClick={handleLogout}>
              Signup
            </Button>
            <Avatar src={user && user.avatar ? user.avatar : ""} />
          </div>
          <div className={styles.home}>
            <h1>Home</h1>
            <h2>This page is just testing login with different services</h2>
            <p>Thanks for you visit :) </p>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  )
}
