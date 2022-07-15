export default function Contact() {
    const style = { height: "600px", }
    const marg = { marginBottom: "200px", }
    const textarea = { height: "150px", }
    return (
        <div>
            <div className="flex justify-center text-white pt-64" style={style}>
                <div>
                    <h1 className="text-4xl text-justify font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-red-600 w-96">
                        "Everyone should know how to program a computer, because it teaches you how to think"
                    </h1>
                </div>
                <div className="bg-black/80 text-base font-bold rounded-md p-10 ml-28" style={marg}>About Me:
                    <ul className="list-disc font-normal">
                        <li className="text-white/80 pt-3">Telephone: (+51) 918035608</li>
                        <li className="text-white/80 py-1">Email: jhosuacontjhosua@gmail.com</li>
                        <li className="text-white/80">Location: Jesus Maria ,Lima-Peru</li>
                    </ul>
                </div>
            </div>
            <form id="message" action="/categories/contact/Contact">
            <div className="flex justify-center text-white h-80">
                <div>
                    <textarea className="resize rounded-md bg-black/70 p-2 focus:caret-indigo-500 text-inherit text-slate-500 h-72" styles={textarea} placeholder="Send me some message..."></textarea>
                </div>
                <div>
                    <input className="disabled:opacity-75 bg-black/70 focus:text-inherit rounded p-2 m-4" type="input" placeholder="Name"></input>
                    <br />
                    <input className="disabled:opacity-75 bg-black/70 focus:text-inherit rounded p-2 m-4" type="input" placeholder="Email"></input>
                    <br />
                    <input type="submit" value="Message" className="rounded-md btn-styled m-4" />
                </div>
            </div>
            </form>
        </div>
    );
}
