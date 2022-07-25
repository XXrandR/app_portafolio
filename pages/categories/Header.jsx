import Image from "next/image";
import { motion } from "framer-motion";
import logo from "./../static/eagle.png";
import { LogoGitlab, LogoTwitter, LogoGithub, LogoLinkedin } from "react-ionicons";
import Link from "next/link";

function Header() {
    return (
        <div>
            <div className="flex flex-row border-b border-gray-400" style={{ height: "60px", marginTop: "0px" }}>

                {/*Part of the logo maybe.*/}
                <div className="basis-2/4">
                    <Image src={logo} width="120px" height="60px" alt="the logo." style={{ filter: "brightness(500%)" }} />
                </div>

                {/* Part of the options */}
                <div className="basis-3/4" style={{ alignSelf: "center", marginLeft: "80px" }}>
                    <Link href="/">
                        <motion.button whileTap={{scale: 0.8}} className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300">HOME</motion.button>
                    </Link>
                    <Link href="/categories/projects/IndexProjects">
                        <motion.button whileTap={{scale: 0.8}} className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300">PROJECTS</motion.button>
                    </Link>
                    <Link href="/categories/blog/IndexBlog">
                        <motion.button whileTap={{scale: 0.8}} className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300">BLOG</motion.button>
                    </Link>
                    <Link href="/categories/contact/Contact">
                        <motion.button whileTap={{scale: 0.8}} className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300">CONTACT</motion.button>
                    </Link>
                </div>

                {/*Part of social media maybe.*/}
                <div className="basis-1/4 flex m-3">
                    <motion.button whileTap={{scale: 0.8}} className="bg-black/40 rounded-lg hover:bg-black/80 mr-6 p-1.5 pt-2 focus:outline-none focus:ring focus:ring-300">
                        <a target="_blank" rel="noopener" href="https://gitlab.com/jhosuacontjhosua"><LogoGitlab color={"#fff"} width="28px" /></a>
                    </motion.button>
                    <motion.button whileTap={{scale: 0.8}} className="bg-black/40 rounded-lg hover:bg-black/80 mr-6 p-1.5 pt-2 focus:outline-none focus:ring focus:ring-300" >
                        <a target="_blank" rel="noopener" href="https://github.com/XXrandR/"><LogoGithub color={"#fff"} width="28px" /></a>
                    </motion.button>
                    <motion.button whileTap={{scale: 0.8}} className="bg-black/40 rounded-lg hover:bg-black/80 mr-6 p-1.5 pt-2 focus:outline-none focus:ring focus:ring-300">
                        <a target="_blank" rel="noopener" href="https://twitter.com/dvjhosua"><LogoTwitter color={"#fff"} width="28px" /></a>
                    </motion.button>
                    <motion.button whileTap={{scale: 0.8}} className="bg-black/40 rounded-lg hover:bg-black/80 p-1.5 pt-2 focus:outline-none focus:ring focus:ring-300">
                        <a href="#"><LogoLinkedin color={"#fff"} width="28px" /></a>
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default Header;
