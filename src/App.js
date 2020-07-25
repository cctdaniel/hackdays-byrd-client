import { Auth } from "aws-amplify"
import React, { useEffect, useState } from "react"
import "./App.css"
import { AppContext } from "./libs/contextLib"
import { onError } from "./libs/errorLib"
import Routes from "./Routes"

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const [isAuthenticated, userHasAuthenticated] = useState(false)

  useEffect(() => {
    onLoad()
  }, [])

  async function onLoad() {
    try {
      await Auth.currentSession()
      userHasAuthenticated(true)
    } catch (e) {
      if (e !== "No current user") {
        onError(e)
      }
    }

    setIsAuthenticating(false)
  }

  return (
    !isAuthenticating && (
      <div className="App container">
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </div>
    )
  )
}

export default App
