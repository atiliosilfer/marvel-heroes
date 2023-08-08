import { Routes, Route, useNavigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Perfil } from './pages/Perfil'
import { DefaultLayout } from './layouts/DefaultLayout'
import cookie from 'react-cookies'
import * as jose from 'jose'
import { useEffect } from 'react'

export function Router() {
  const token = cookie.load('token')
  const navigate = useNavigate()

  useEffect(() => {
    if (token === undefined) {
      return navigate('/')
    }

    jose
      .jwtVerify(token, new TextEncoder().encode('secret_mock'))
      .catch(() => navigate('/'))
  }, [navigate, token])

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/perfil/:id" element={<Perfil />} />
      </Route>
    </Routes>
  )
}
