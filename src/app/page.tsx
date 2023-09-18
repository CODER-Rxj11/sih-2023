"use client"

import Navbar from "../../components/Navbar"
import Slide from "../../components/Slide"
import Welcome from "../../components/Welcome"
import Footer from "../../components/Footer";
import MapComponent from "../../components/MapComponent";
import CarouselComponent from "../../components/CarouselComponent";

export default function Home() {
  return <>
    <Navbar />
    <Slide />
    <Welcome />
    <CarouselComponent />
    <MapComponent />
    <Footer />
  </>
}
