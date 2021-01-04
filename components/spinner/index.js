import styles from "./Spinner.module.css"

export default function Spinner({ style }) {
  return <div className={styles.spinner} style={style}></div>
}
