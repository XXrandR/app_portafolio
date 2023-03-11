import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { basic_props } from "./data/fundamental";

import Canvas from './utils/Canvas'
import { Gradient } from './utils/lib/Gradient'

export default function Home() {
    const props_new = basic_props.Spanish

    return (
        <div className="text-white">
            <div className="flex flex-row">

                <div className="flex flex-col justify-center min-h-screen">
                    <div style={{ borderColor: "white", borderLeft: "2", borderLeftWidth: "5px", marginLeft: "95px", marginBottom: "40px" }}>
                        <h1 className="text-white lg:text-7xl font-extrabold ml-6 pb-2 animate-pulse sm:text-4xl">{props_new.home_go}</h1>
                        <h2 className="text-white/40 text-1xl ml-6">{props_new.about_page}</h2>
                    </div>
                    <div style={{ marginLeft: "120px" }} >
                        <Link href="/categories/projects/IndexProjects">
                            <motion.button whileTap={{ scale: 0.9 }} className='btn-styled'>Projectos</motion.button>
                        </Link>
                        <Link href={`/categories/contact/Contact/`}>
                            <motion.button whileTap={{ scale: 0.9 }} className='btn-styled ml-6'>Contactos</motion.button>
                        </Link>
                    </div>
                </div>

                <div className="h-5/5 w-7/12">
                    <Canvas />
                </div>
            </div>
        </div>
    );
}
