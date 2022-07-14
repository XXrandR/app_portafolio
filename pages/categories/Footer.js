import Language from "./language/Language";

export default function Footer() {
    return (
        <div className="flex place-content-between">
            <div className="py-4 text-white/70 text-left px-8">© All the rights reserved.</div>
            <div className="py-4 text-white/70 text-right px-8">Jhosua Daga</div>
            <div className="py-4 text-white/70 text-right px-8">
                <Language />
            </div>
        </div>
    );
}
