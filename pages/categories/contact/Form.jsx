import { motion } from 'framer-motion';
export default function Form(){
    const animation = {
        scale:0.9
    }
    return(
        <div>
            <form id="message" action="/categories/contact/Contact">
            <div className="flex justify-center text-white h-80">
                <div>
                    <motion.textarea whileTap={animation} className="resize rounded-md bg-black/70 p-2 focus:caret-indigo-500 text-inherit text-slate-500 h-72" placeholder="Send me some message..."></motion.textarea>
                </div>
                <div>
                    <motion.input whileTap={animation} className="disabled:opacity-75 bg-black/70 focus:text-inherit rounded p-2 m-4" type="input" placeholder="Name"></motion.input>
                    <br />
                    <motion.input whileTap={animation} className="disabled:opacity-75 bg-black/70 focus:text-inherit rounded p-2 m-4" type="input" placeholder="Email"></motion.input>
                    <br />
                    <motion.input whileTap={animation} type="submit" value="Message" className="rounded-md btn-styled m-4" />
                </div>
            </div>
            </form>
        </div>
    );
}
