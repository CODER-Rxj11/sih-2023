"use client"

import Navbar from "../../components/Navbar"
import Slide from "../../components/Slide"
import Welcome from "../../components/Welcome"
<<<<<<< HEAD
import Footer from "../../components/Footer";
import MapComponent from "../../components/MapComponent";
import CarouselComponent from "../../components/CarouselComponent";
=======
import Auth from "../../components/Auth"
import Footer from "../../components/Footer"
>>>>>>> bb05925dac71911c522dccdd45999f3d02a2029e

export default function Home() {
  return <>
    <Navbar />
    <Slide />
    <Welcome />
<<<<<<< HEAD
    <CarouselComponent />
    <MapComponent />
=======
    <Auth />
>>>>>>> bb05925dac71911c522dccdd45999f3d02a2029e
    <Footer />
  </>
}
