import { useEffect } from "react"
import Icon from "@mdi/react"

import styles from "./Button.module.css"
import Spinner from "components/spinner"

const buttons = {
  github: styles.github,
  email: styles.email,
  google: styles.google,
  facebook: styles.facebook,
  twitter: styles.twitter,
  primary: styles.primary,
  cancel: styles.cancel,
  text: styles.text,
  icon: styles.btn_icon,
}

export default function Button({
  children,
  onClick,
  variant,
  style,
  icon,
  iconColor,
  width,
  bgcolor,
  mtop,
  mright,
  mbottom,
  mleft,
  disabled,
  loading,
  loadingColor,
}) {
  const customProperties = { width, bgcolor, mtop, mright, mbottom, mleft }
  const hasProperties = validateProperties(customProperties)

  useEffect(() => {
    const sheets = document.styleSheets[0]
    sheets.insertRule(
      `button.${hasProperties && buttons[variant]} {
        width: ${width}; 
        background: ${bgcolor};
        margin-top: ${mtop};
        margin-right: ${mright};
        margin-bottom: ${mbottom};
        margin-left: ${mleft};
      }`,
      0
    )
  }, [])

  return (
    <button
      disabled={disabled}
      style={style}
      onClick={onClick}
      className={`${styles.button} ${buttons[variant]}`}
    >
      {icon && (
        <Icon path={icon} title="icon" size={1} color={iconColor || "white"} />
      )}
      {loading ? (
        <Spinner style={{ borderLeftColor: loadingColor }} />
      ) : (
        children
      )}
    </button>
  )
}

export const validateProperties = (obj) =>
  Object.values(obj).some((value) => value)
