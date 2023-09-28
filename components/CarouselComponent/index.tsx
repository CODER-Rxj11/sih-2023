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
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/jammu-district-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/anantnag-district-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/samba-district-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/pulwama-district-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/udhampur-distric-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/reasi-distric-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/rajouri-district-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/punch-district-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/ramban-district-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/kishtwar-district-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/kulgam-district-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/tehsil/shupian-tehsil-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/budgam-city-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/srinagar-district-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/ganderbal-district-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/bandipore-district-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/tehsil/baramula-tehsil-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
          <div>
            <Center
              w={300}
              h={300}
              bgImage="https://www.mapsofindia.com/maps/jammuandkashmir/districts/kupwara-district-map.jpg"
              bgPosition={"center"}
              bgSize={"cover"}
            ></Center>
          </div>
        </Slider>
      </div>
    </>
  );
}
