import { basic_props } from "../../data/fundamental";

export default function Contact(props) {

    return (
        <div>
            <div class="grid text-center grid-cols-2 gap-4 place-items-center py-40 h-screen">
                <div className="p-20">
                    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-600 to-red-600">
                        {basic_props.English.frace}
                    </h1>
                </div>
                <div className="text-white bg-black shadow-lg shadow-black rounded-xl px-24 py-16 mx-16 text-center">
                    <ul>
                        <li>Jhosua Daga</li>
                        <li>jhosuacontjhosua@gmail.com</li>
                        <li>(+51) 918035608</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}
