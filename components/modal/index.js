import Button from "components/button"
import styles from "./Modal.module.css"

export default function Modal({ children, title, active, toggleModal }) {
  return (
    <div className={[`${styles.container} ${active && styles.active}`]}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <h2>{title || "Modal"}</h2>
          <Button variant="icon" onClick={toggleModal}>
            X
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
