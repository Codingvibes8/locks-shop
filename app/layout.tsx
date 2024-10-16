import type { Metadata } from 'next'
import './globals.css'


import { cn } from '@/lib/utils'
import { Poppins as FontSans } from 'next/font/google'
import React from 'react'

import  {APP_DESCRIPTION, APP_NAME} from '@/lib/constants'

const fontSans = FontSans({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-sans',
  })

export const metadata: Metadata = {
  title: `${APP_NAME} - ${APP_DESCRIPTION}`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
       <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
       {children}
         
      </body>
    </html>
  )
}