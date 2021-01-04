import "../styles/globals.css"
import app from "styles/App.module.css"

function MyApp({ Component, pageProps }) {
  return (
    <div className={app.layout}>
      <Component {...pageProps} />
      <footer className={app.footer}>
        <p>
          Make with love by
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/bustosfredy"
          >
            Fredy Bustos
          </a>
        </p>
      </footer>
    </div>
  )
}

export default MyApp
