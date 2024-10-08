'use client'
import { SessionProvider } from 'next-auth/react'
function provider({children,session}) {
  return (
    <SessionProvider session={session}>
      {children}
      </SessionProvider>
  )
}

export default provider
