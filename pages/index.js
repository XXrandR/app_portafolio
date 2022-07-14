export default function Home(){
    return(
        <div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "91vh"}}>
            <div style={{borderColor: "white", borderLeft: "2", borderLeftWidth: "5px", marginLeft: "95px", marginBottom: "40px"}}>
            <h1 className="text-white lg:text-7xl font-extrabold ml-6 pb-6 animate-pulse sm:text-4xl">Jhosua Daga</h1>
            <h2 className="text-white/40 text-1xl ml-6">Hi, I'm Jhosua a multidiciplinary programmer.</h2>
            </div>
        <div style={{marginLeft: "120px"}}>
            <button className='btn-styled'>Projects</button>
            <button className='btn-styled ml-6'>Contact Me</button>
        </div>
        </div>
        </div>
    );
}
