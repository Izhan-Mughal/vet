'use client'
import { Header } from './Components/layout/Header'
import Footer from './Components/layout/Footer'
import HomePage from './home/home'

export default function Home() {
  return (
    <>
      <Header />
        <HomePage />
      <Footer />
    </>
  )
}
