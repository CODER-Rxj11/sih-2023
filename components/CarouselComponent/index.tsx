"use client"
import { Center, Square, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import Slide from "../Slide";
import Image from "next/image";


export default function CarouselComponent() {

  const settings = {
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
      <div style={{ marginTop: "5em" }}>
        <Center
          style={{ marginBottom: "1em" }}
          as="h1"
          color={"blue.200"}
          fontSize={"5xl"}
        >
          Districts
        </Center>
        <Slider {...settings}>
          <div className="p-1 bg-black-400">
            <Center
              w={300}
              h={300}
              bgImage="https://districts.ecourts.gov.in/sites/default/files/Map2.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div className="p-1 bg-black-400">
            <Center
              w={300}
              h={300}
              bgImage="https://im.hunt.in/cg/jk/Kathua/City-Guide/about-1.png"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div className="p-1 bg-black-400">
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/samba-district-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
        </Slider>
      </div>
    </>
  );
}
