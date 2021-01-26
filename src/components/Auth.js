import React, { useContext, createContext, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'

const auth = {
  isAuthenticated: false,
  user: {},
  async signin(username, password) {
    return fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => Promise.all([Promise.resolve(res), res.json()]))
      .then(([res, body]) => {
        if (res.ok) {
          auth.isAuthenticated = true
          auth.user = body.user
        }
        return [res, body]
      })
  },
  async signout() {
    // TODO: send logout request
    auth.isAuthenticated = false
    auth.user = null
  },
}

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
export const authContext = createContext()

export function ProvideAuth({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export function useAuth() {
  return useContext(authContext)
}

export function useProvideAuth() {
  const [user, setUser] = useState(null)

  const signin = (username, password) => {
    return auth.signin(username, password).then(([res, body]) => {
      setUser(body.user)
      return [res, body]
    })
  }

  const signout = (cb) => {
    return auth.signout().then(() => {
      setUser(null)
    })
  }

  return {
    user,
    signin,
    signout,
  }
}

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}
