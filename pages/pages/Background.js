import Image from "next/image"
import im from "./../static/abstract.jpg"

export default function Background(){
    return(
        <div>
        <Image src={im} layout="fill" objectFit="cover" alt="Abstract background"/>
        </div>
    );
}
