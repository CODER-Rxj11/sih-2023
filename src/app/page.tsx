"use client"

import Navbar from "../../components/Navbar"
import Slide from "../../components/Slide"
import Welcome from "../../components/Welcome"
import Auth from "../../components/Auth"
import Footer from "../../components/Footer"

export default function Home() {
  return <>
    <Navbar />
    <Slide />
    <Welcome />
    <Auth />
    <Footer />
  </>
}
