import Head from "next/head"

import Login from "./login"
import styles from "../styles/App.module.css"

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  )
}
