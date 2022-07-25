import Form from './Form';

export default function Contact() {

    // Created for the style
    const style = { height: "600px", }
    const marg = { marginBottom: "200px", }

    return (
        <div>
            <div className="flex justify-center text-white pt-64" style={style}>
                <div>
                    <h1 className="text-4xl text-justify font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-red-600 w-96">
                        "Everyone should know how to program a computer, because it teaches you how to think"
                    </h1>
                </div>
                <div className="bg-black/80 text-base font-bold rounded-md p-12 pb-40 pb-1 ml-32" style={marg}>About Me:
                    <ul className="list-disc font-normal">
                        <li className="text-white/80 pt-3">Telephone: (+51) 918035608</li>
                        <li className="text-white/80 py-1">Email: jhosuacontjhosua@gmail.com</li>
                        <li className="text-white/80">Location: Jesus Maria ,Lima-Peru</li>
                    </ul>
                </div>
            </div>
            <div>
            <Form />
            </div>
        </div>
    );
}
