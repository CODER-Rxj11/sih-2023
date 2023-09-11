"use client"
import {ChakraProvider} from '@chakra-ui/react'
import './globals.css'
export const metadata = {
  title: 'ODOP : J&K',
  description: 'ODOP : J&K',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <ChakraProvider>
            {children}
          </ChakraProvider>
      </body>
    </html>
  )
}
