import Image from "next/image";
import logo from "./../static/eagle.png";
import { LogoApple, LogoGithub, LogoLinkedin } from "react-ionicons";

function Header() {
    return (
        <div>
            <div className="flex flex-row" style={{ height: "60px", marginTop: "0px" }}>

                {/*Part of the logo maybe.*/}
                <div className="basis-2/4" style={{}}>
                    <Image src={logo} width="110px" height="60px" alt="the logo." style={{filter: "brightness(200%)"}} />
                </div>

                {/* Part of the options */}
                <div className="basis-3/4" style={{alignSelf: "center", marginLeft: "80px", paddingTop:"5px"}}>
                    <button className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300" href='#'>HOME</button>
                    <button className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300" href="#">PROJECTS</button>
                    <button className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300" href="#">BLOG</button>
                    <button className="text-white px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300" href="#">CONTACT</button>
                </div>

                {/*Part of social media maybe.*/}
                <div className="basis-1/4 flex m-3 mb-2">
                    <div className="bg-blue-500/20 rounded-lg hover:bg-transparent ml-12 mr-6 p-1.5 pt-3">
                        <LogoApple color={"#fff"} width="28px"/>
                    </div>
                    <div className="bg-blue-500/20 rounded-lg hover:bg-transparent mr-6 p-1.5 pt-3">
                        <LogoGithub color={"#fff"} width="28px"/>
                    </div>
                    <div className="bg-blue-500/20 rounded-lg hover:bg-transparent p-1.5 pt-3">
                        <LogoLinkedin color={"#fff"} width="28px"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;
