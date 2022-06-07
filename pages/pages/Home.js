export default function Home(){
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: "75px", minHeight: "91vh"}}>
            <div style={{borderColor: "white", borderLeft: "2", borderLeftWidth: "5px", marginLeft: "95px", marginBottom: "40px"}}>
            <h1 className="text-white text-7xl font-extrabold ml-6 mb-6">Jhosua Daga</h1>
            <h2 className="text-white/40 text-1xl ml-6">Hi, I'm Jhosua a multidiciplinary programmer.</h2>
            </div>
        <div style={{marginLeft: "120px"}}>
            <button className='text-white px-8 bg-transparent-500/10 border rounded-full p-2 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300'>Projects</button>
            <button className='text-white px-8 bg-transparent-500/10 border rounded-full p-2 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300 ml-6'>Contact Me</button>
        </div>
        </div>
    );
}