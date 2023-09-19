"use client"

import Navbar from "../../components/Navbar"
import Slide from "../../components/Slide"
import Welcome from "../../components/Welcome"
import Footer from "../../components/Footer";
import MapComponent from "../../components/MapComponent";
import CarouselComponent from "../../components/CarouselComponent";
import Auth from "../../components/Auth"

export default function Home() {
  return <div className="flex flex-col overflow-x-hidden">
    <Navbar />
    <Slide />
    <Welcome />
    <CarouselComponent />
    <MapComponent />
    <Auth />
    <Footer />
  </div>
}
