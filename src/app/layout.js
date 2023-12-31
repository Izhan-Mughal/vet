'use client'
import {
  Inter
} from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.css'
// import bootstrap from 'bootstrap'

import './globals.css'
import './admin.css'
import Script from 'next/script'
const inter = Inter({
  subsets: ['latin']
})


export default function RootLayout({
  children
}) {

  return ( <
    html lang = "en" >
    <
    body className = {
      inter.className
    } > {
      children
    } < /body>   <
    Script src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"

    strategy = "lazyOnload" / >
    <
    /
    html >

  )
}