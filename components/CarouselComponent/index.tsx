"use client"
import { Center, Square, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import Slide from "../Slide";
import Image from "next/image";


export default function CarouselComponent() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:"linear"
  };

  return (
    <>
      <div className="py-10">
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>
            <Center w={300} h={300} bg={"blue.100"}>
              <h1 className="text-2xl">Doda</h1>
            </Center>
          </div>
          <div>
            <Center w={300} h={300} bg={"blue.200"}>
              <h1 className="text-2xl">Pulwama</h1>
            </Center>
          </div>
          <div>
            <Center w={300} h={300} bg={"blue.300"}>
              <h1 className="text-2xl">Khatua</h1>
            </Center>
          </div>
          <div>
            <Center w={300} h={300} bg={"blue.400"}>
              <h1 className="text-2xl">Jammu</h1>
            </Center>
          </div>
          <div>
            <Center w={300} h={300} bg={"blue.500"}>
              <h1 className="text-2xl">Poonch</h1>
            </Center>
          </div>
          <div>
            <Center w={300} h={300} bg={"blue.400"} >
              <h1 className="text-2xl">Gulmargh</h1>
            </Center>
          </div>
        </Slider>
      </div>
    </>
  );
}
