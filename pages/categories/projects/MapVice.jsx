import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import mapvice from "../../static/map.png";
import { basic_props } from "../../data/fundamental";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";

export default function MapVice() {

    const date = new Date(2019, 12, 30, 10, 15, 10);

    useEffect(() => {
        date.setDate(2019, 12, 30, 10, 15, 10);
    },[]);

    return (
        <div className="h-full w-full text-white text-center">
            <h1 className="text-4xl font-bold text-white">MapVice</h1>
            <h5>Updated: {date.toString} </h5>
        </div>
    );
}

