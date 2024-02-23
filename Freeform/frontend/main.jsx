import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { Principal } from "@dfinity/principal"

const CURRENT_USER_ID = Principal.fromText("2vxsx-fae")
export default CURRENT_USER_ID

const init = async () => {
  const container = document.getElementById("root")
  const root = ReactDOM.createRoot(container)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

init()
