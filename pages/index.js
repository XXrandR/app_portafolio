import {motion} from "framer-motion";
import Link from "next/link";

export default function Home(){
    return(
        <div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "91vh"}}>
            <div style={{borderColor: "white", borderLeft: "2", borderLeftWidth: "5px", marginLeft: "95px", marginBottom: "40px"}}>
            <h1 className="text-white lg:text-7xl font-extrabold ml-6 pb-6 animate-pulse sm:text-4xl">Jhosua Daga</h1>
            <h2 className="text-white/40 text-1xl ml-6">Hi, I'm Jhosua a multidiciplinary programmer.</h2>
            </div>
        <div style={{marginLeft: "120px"}}>
            <Link href="/categories/projects/IndexProjects">
            <motion.button whileTap={{ scale: 0.9 }} className='btn-styled'>Projects</motion.button>
            </Link>
            <Link href="/categories/contact/Contact">
            <motion.button whileTap={{scale: 0.9}} className='btn-styled ml-6'>Contact Me</motion.button>
            </Link>
        </div>
        </div>
        </div>
    );
}
