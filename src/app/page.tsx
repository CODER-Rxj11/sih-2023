"use client"

import Timebar from "../../components/Timebar"
import Navbar from "../../components/Navbar"
import Slide from "../../components/Slide"
import Welcome from "../../components/Welcome"
import Footer from "../../components/Footer";
import MapComponent from "../../components/MapComponent";
import CarouselComponent from "../../components/CarouselComponent";
import Auth from "../../components/Auth"

export default function Home() {
  return <div className="flex flex-col w-100 overflow-x-hidden" >
    <Timebar />
    <Navbar />
    <Slide />
    <Welcome />
    <CarouselComponent />
    <MapComponent />
    <Auth />
    <Footer />
  </div>
}
