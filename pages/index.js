import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { basic_props } from "./data/fundamental";

export default function Home() {
    const props_new = basic_props.English

    return (
        <div className="text-white">
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "91vh" }}>
                <div style={{ borderColor: "white", borderLeft: "2", borderLeftWidth: "5px", marginLeft: "95px", marginBottom: "40px" }}>
                    <h1 className="text-white lg:text-7xl font-extrabold ml-6 pb-6 animate-pulse sm:text-4xl">{props_new.home_go}</h1>
                    <h2 className="text-white/40 text-1xl ml-6">{props_new.about_page}</h2>
                </div>
                <div style={{ marginLeft: "120px" }}>
                    <Link href="/categories/projects/IndexProjects">
                        <motion.button whileTap={{ scale: 0.9 }} className='btn-styled'>Projects</motion.button>
                    </Link>
                    <Link href={`/categories/contact/Contact/`}>
                        <motion.button whileTap={{ scale: 0.9 }} className='btn-styled ml-6'>Contact Me</motion.button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
