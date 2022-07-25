import Language from "./language/Language";

export default function Footer() {
    return (
        <div className="flex place-content-between">
            <div className="py-4 text-white/70 text-left px-4 pl-8">© All the rights reserved.</div>
            <div className="py-4 text-white/70 text-right px-4 pr-20">Jhosua Daga</div>
            <div className="py-4 text-white/70 text-right px-4 pr-8">
                <Language />
            </div>
        </div>
    );
}
