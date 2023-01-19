import { motion } from "framer-motion";
import logo from "./../static/eagle.png";
import { LogoGitlab, LogoTwitter, LogoGithub, LogoLinkedin } from "react-ionicons";
import Link from "next/link";
import { basic_props } from "../data/fundamental";

function Header(props) {

    let props_new = null;
    if(props.language === "English"){
        props_new = basic_props.English
    }else if(props.language === "Spanish"){
        props_new = basic_props.Spanish
    }else if(props.language == "French"){
        props_new = basic_props.French
    }

    return (
        <div>
            <div className="flex flex-row border-b border-gray-400" style={{ height: "60px", marginTop: "0px" }}>

                {/*Part of the logo maybe.*/}
                <div className="basis-2/4 pl-8 pt-2.5 font-serif">
                    <h1 className="text-2xl font-bold text-blue-50">JD</h1>
                </div>

                {/* Part of the options */}
                <div className="basis-3/4" style={{ alignSelf: "center", marginLeft: "80px" }}>
                    <Link href="/">
                        <motion.button whileTap={{ scale: 0.8 }} className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300">{props_new.home}</motion.button>
                    </Link>
                    <Link href="/categories/projects/IndexProjects">
                        <motion.button whileTap={{ scale: 0.8 }} className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300">{props_new.blog}</motion.button>
                    </Link>
                    <Link href="/categories/blog/IndexBlog">
                        <motion.button whileTap={{ scale: 0.8 }} className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300">{props_new.contact}</motion.button>
                    </Link>
                    <Link href="/categories/contact/Contact">
                        <motion.button whileTap={{ scale: 0.8 }} className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300">{props_new.projects}</motion.button>
                    </Link>
                </div>

                {/*Part of social media maybe.*/}
                <div className="basis-1/4 flex m-3">
                    <motion.button whileTap={{ scale: 0.8 }} className="bg-black/40 rounded-lg hover:bg-black/80 mr-6 p-2 pt-1.5 focus:outline-none focus:ring focus:ring-300">
                        <a target="_blank" rel="noopener" href="https://gitlab.com/jhosuacontjhosua"><LogoGitlab color={"#fff"} /></a>
                    </motion.button>
                    <motion.button whileTap={{ scale: 0.8 }} className="bg-black/40 rounded-lg hover:bg-black/80 mr-6 p-2 pt-1.5 focus:outline-none focus:ring focus:ring-300" >
                        <a target="_blank" rel="noopener" href="https://github.com/XXrandR/"><LogoGithub color={"#fff"} /></a>
                    </motion.button>
                    <motion.button whileTap={{ scale: 0.8 }} className="bg-black/40 rounded-lg hover:bg-black/80 mr-6 p-2 pt-1.5 focus:outline-none focus:ring focus:ring-300">
                        <a target="_blank" rel="noopener" href="https://twitter.com/dvjhosua"><LogoTwitter color={"#fff"} /></a>
                    </motion.button>
                    <motion.button whileTap={{ scale: 0.8 }} className="bg-black/40 rounded-lg hover:bg-black/80 p-2 pt-1.5 focus:outline-none focus:ring focus:ring-300">
                        <a href="#"><LogoLinkedin color={"#fff"} /></a>
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default Header;
