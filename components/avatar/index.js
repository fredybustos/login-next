import styles from "./Avatar.module.css"

export default function Avatar({ src, text, size, center }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.avatar}
        src={src || "/avatar.png"}
        alt={`Avatar-${text}`}
        style={{ width: size, height: size, margin: center && "0 auto" }}
      />
      {text && <strong>{text}</strong>}
    </div>
  )
}
