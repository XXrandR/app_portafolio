import { basic_props } from "../data/fundamental";
import Language from "./language/Language";

export default function Footer(props) {

    let props_new = null;
    if (props.language === "English") {
        props_new = basic_props.English
    } else if (props.language === "Spanish") {
        props_new = basic_props.Spanish
    } else if (props.language === "French") {
        props_new = basic_props.French
    }

    return (
        <div className="bg-transparent flex bottom-0 place-content-between w-screen px-5 pt-1">
            <div className="text-white/70">{props_new.rights}</div>
            <div className="text-white/70 pt-1 pr-28">{props_new.name}</div>
            <div className="text-white/70">
                <Language language={props.language}
                    handleSetLanguage={language => {
                        props.handleSetLanguage(language)
                    }} />
            </div>
        </div>
    );
}
