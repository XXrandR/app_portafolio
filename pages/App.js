import Home from "./pages/Home";
import Header from "./pages/Header";
import Background from "./pages/Background";
import Image from "next/image";
import imgg from "./static/abstract.jpg";

function App() {
    return (
        <div>
            <Image 
        src={imgg} 
        alt="Picture of background"
        layout="fill"
        objectFit='cover'
        objectPosition='center'
        />
            <Header />
            <Home />
        </div>
    );
}

export default App;
