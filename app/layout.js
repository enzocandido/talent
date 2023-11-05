import './reset.css'
import './globals.scss'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TALENT</title>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}