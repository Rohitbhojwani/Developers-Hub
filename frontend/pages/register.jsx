import React from 'react'
import Layout from '../components/layout/Layout'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

export default function Index() {
  return (
    <Layout title='Register'>
        <Register />
    </Layout>
  )
}
