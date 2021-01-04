import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import {
  mdiGithub,
  mdiEmail,
  mdiGoogle,
  mdiFacebook,
  mdiTwitter,
} from "@mdi/js"

import styles from "./Login.module.css"

import Avatar from "components/avatar"
import Button from "components/button"
import Spinner from "components/spinner"
import Modal from "components/modal"
import Signup from "components/signup"
import Signin from "components/signin"

import {
  loginWithGithub,
  onAuthStateChange,
  signinWithGoogle,
  signinWithFacebook,
  signinWithTwitter,
} from "../../firebase/client"

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

export default function Login() {
  const router = useRouter()
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
  const [openModal, setOpenModal] = useState({
    signin: false,
    signup: false,
  })

  useEffect(() => {
    onAuthStateChange(setUser)
  }, [])

  useEffect(() => {
    user && router.replace("/home")
    setOpenModal({ signin: false, signup: false })
  }, [user])

  const handleLoginWithGithub = () => {
    loginWithGithub().catch((error) => console.error(error))
  }

  const handleToggle = (modal) => {
    setOpenModal({ [modal]: !openModal[modal] })
  }

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        {user === USER_STATES.NOT_LOGGED && (
          <div className={styles.buttons}>
            <Avatar center size="100px" />
            <h2>Login with differents services</h2>
            <Button
              variant="github"
              mbottom="20px"
              mtop="40px"
              width="100%"
              icon={mdiGithub}
              onClick={handleLoginWithGithub}
            >
              Login with GitHub
            </Button>
            <Button
              variant="google"
              mbottom="20px"
              width="100%"
              icon={mdiGoogle}
              onClick={signinWithGoogle}
            >
              Login with Google
            </Button>
            <Button
              variant="twitter"
              mbottom="20px"
              width="100%"
              icon={mdiTwitter}
              onClick={signinWithTwitter}
            >
              Login with Twitter
            </Button>
            <Button
              variant="facebook"
              mbottom="20px"
              width="100%"
              icon={mdiFacebook}
              onClick={signinWithFacebook}
            >
              Login with Facebook
            </Button>
            <Button
              variant="email"
              mbottom="20px"
              width="100%"
              icon={mdiEmail}
              onClick={() => handleToggle("signin")}
            >
              Login with Email
            </Button>
            <Button
              icon={mdiEmail}
              iconColor="#000"
              onClick={() => handleToggle("signup")}
              variant="text"
            >
              Signup with Email
            </Button>
          </div>
        )}
        {user === USER_STATES.NOT_KNOWN && <Spinner />}
      </div>
      <Modal
        title="Signin with email"
        active={openModal.signin}
        toggleModal={() => handleToggle("signin")}
      >
        <Signin />
      </Modal>
      <Modal
        title="Signup with email"
        active={openModal.signup}
        toggleModal={() => handleToggle("signup")}
      >
        <Signup />
      </Modal>
    </div>
  )
}
