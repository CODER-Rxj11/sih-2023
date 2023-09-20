"use client"

import Navbar from "../../components/Navbar"
import Slide from "../../components/Slide"
import Welcome from "../../components/Welcome"
import Footer from "../../components/Footer";
import MapComponent from "../../components/MapComponent";
import CarouselComponent from "../../components/CarouselComponent";
import Auth from "../../components/Auth"

export default function Home() {
    return <div style={{overflowX:"hidden"}} className="flex flex-col">
    <Navbar />
    <Slide />
    <Welcome />
    <CarouselComponent />
    <MapComponent />
    <Auth />
    <Footer />
  </div>
}
