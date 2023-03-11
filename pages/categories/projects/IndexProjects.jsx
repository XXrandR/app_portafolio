import React from 'react';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import mapvice from "../../static/map.png";
import ai_approaching from "../../static/ai_approaching.jpg";
import { basic_props } from "../../data/fundamental";
import Link from 'next/link';

export default function IndexProjects() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplaySpeed: 5000,
        autoplay: false,
        speed: 2000,
        pauseOnHover: false
    };
    return (
        <Slider {...settings} style={{ minHeight: "91vh" }}>

            <div className='h-screen justify-center'>
                <div className="relative flex justify-center h-full">
                    <div className="pr-64 flex self-center">
                        <div>
                            <Image src={mapvice} className="rounded-full drop-shadow-2xl" height={"400px"} />
                        </div>
                    </div>
                    <div className="absolute h-full flex flex-row">
                        <div className="w-9/12 h-full">
                        </div>
                        <div className="flex flex-col w-full bg-black/80 text-black pl-20 pr-20 h-full items-center justify-center">
                            <h1 className="font-sans text-5xl text-white font-bold">Vehicle Routing Problem(MapVice)</h1>
                            <h3 className="pt-8 text-white font">{basic_props.Spanish.vrp}</h3>
                            <Link href="/categories/projects/MapVice">
                                <motion.button whileTap={{ scale: 0.9 }} className='btn-styled mt-8'>Ver Solucion</motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-screen justify-center'>
                <div className="relative flex justify-center h-full">
                    <div className="pr-64 flex self-center">
                        <div>
                            <Image src={ai_approaching} className="rounded-full drop-shadow-2xl" width={"400px"} height={"400px"} />
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 h-full flex flex-row items-center justify-center">
                        <div className="w-9/12 h-full">
                        </div>
                        <div className="flex flex-col w-full bg-black/80 text-black pl-20 pr-20 h-full items-center justify-center">
                            <h1 className="font-sans text-5xl text-white font-bold">Code Sugestion(Nemesis)</h1>
                            <h3 className="pt-4 text-white font">{basic_props.Spanish.vrp}</h3>
                            <Link href="/categories/projects/MapVice">
                                <motion.button whileTap={{ scale: 0.9 }} className='btn-styled mt-4'>Ver Solucion</motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </Slider>
    );
}
