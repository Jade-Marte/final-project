import React, { useContext, createContext, useState, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'

const auth = {
  isAuthenticated: false,
  user: {},
  async signin(username, password) {
    console.log(process.env)
    return fetch(`${process.env.REACT_APP_NODE_URL}/login`, {
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
  async register({
    first_name,
    last_name,
    username,
    password,
    password_confirmation,
  }) {
    console.log(
      first_name,
      last_name,
      username,
      password,
      password_confirmation
    )
    return fetch(`${process.env.REACT_APP_NODE_URL}/register`, {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        password,
        password_confirmation,
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
  async getProfile() {
    return fetch(process.env.REACT_APP_NODE_URL + '/profile', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        return res.json()
      })
      .then((body) => {
        console.log('body user', body)
        if (body.user) {
          auth.user = body.user
          auth.isAuthenticated = true
        }
        return body.user
      })
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

  const signout = () => {
    return auth.signout().then(() => {
      setUser(null)
    })
  }

  const register = (data) => {
    return auth.register(data).then(([res, body]) => {
      setUser(body.user)
      return [res, body]
    })
  }

  const getProfile = () => {
    return auth.getProfile().then((profile) => {
      if (profile) {
        setUser(profile)
      }
    })
  }

  useEffect(() => {
    auth.getProfile().then((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(false)
      }
    })

    return () => {}
  }, [])

  return {
    user,
    signin,
    signout,
    getProfile,
    register,
    isAuthenticated: auth.isAuthenticated,
  }
}

export function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth()

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
