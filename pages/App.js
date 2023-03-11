import Header from "./categories/Header";
import Footer from "./categories/Footer";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function App({ children }) {
    let [checkLocalState, setCheckLocalState] = useState(null);

    useEffect(() => {
        setCheckLocalState(!!window ? window.localStorage.getItem("language") : "");
    }, []);

    const [language, setLanguage] = useState(checkLocalState ? checkLocalState : "Spanish");

    return (
        <div className="bg-gradient-to-r from-black via-sky-900 to-red-800 h-full">
            <AnimatePresence>
                <Header language={language} />
                {children}
                <Footer
                    language={language}
                    handleSetLanguage={language => {
                        setLanguage(language);
                        storeLanguageInLocalStorage(language);
                    }}
                />
            </AnimatePresence>
        </div>
    );
}

function storeLanguageInLocalStorage(language) {
    window.localStorage.setItem("language", language);
    console.log(language + "It's saved");
}

export default App;
