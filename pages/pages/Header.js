import Image from "next/image";
import logo from "./../static/eagle.png";
import { LogoGitlab,LogoGoogle, LogoGithub, LogoLinkedin } from "react-ionicons";
import Link from "next/link";

function Header() {
    return (
        <div>
            <div className="flex flex-row" style={{ height: "60px", marginTop: "0px" }}>

                {/*Part of the logo maybe.*/}
                <div className="basis-2/4">
                    <Image src={logo} width="120px" height="60px" alt="the logo." style={{filter: "brightness(400%)"}} />
                </div>

                {/* Part of the options */}
                <div className="basis-3/4" style={{alignSelf: "center", marginLeft: "80px", paddingTop:"5px"}}>
                    <Link href="/">
                        <button className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300" href='/Home'>HOME</button>
                    </Link>
                    <Link href="/pages/projects/IndexProjects">
                        <button className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300" href="#">PROJECTS</button>
                    </Link>
                    <Link href="/pages/blog/IndexBlog">
                        <button className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300" href="#">BLOG</button>
                    </Link>
                    <Link href="/pages/contact/Contact">
                        <button className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300" href="#">CONTACT</button>
                    </Link>
                </div>

                {/*Part of social media maybe.*/}
                <div className="basis-1/4 flex m-3 mb-2">
                    <button className="bg-black/40 rounded-lg hover:bg-black/80 mr-6 p-1.5 pt-2 focus:outline-none focus:ring focus:ring-300" href="#">
                        <LogoGoogle color={"#fff"} width="28px"/>
                    </button>
                    <button className="bg-black/40 rounded-lg hover:bg-black/80 mr-6 p-1.5 pt-2 focus:outline-none focus:ring focus:ring-300" href="#">
                        <LogoGitlab color={"#fff"} width="28px"/>
                    </button>
                    <button className="bg-black/40 rounded-lg hover:bg-black/80 mr-6 p-1.5 pt-2 focus:outline-none focus:ring focus:ring-300" href="#">
                        <LogoGithub color={"#fff"} width="28px"/>
                    </button>
                    <button className="bg-black/40 rounded-lg hover:bg-black/80 p-1.5 pt-2 focus:outline-none focus:ring focus:ring-300" href="#">
                        <LogoLinkedin color={"#fff"} width="28px"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
