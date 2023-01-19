export default function Language(props) {
    return (
        <div>
            <select
                className="text-black px-4 m-1 bg-transparent-500/10 rounded-full p-1 hover:bg-gray-50 hover:text-black focus:outline-none focus:ring focus:ring-300"
                value={props.language}
                onChange={e => props.handleSetLanguage(e.target.value)}
        >
                <option value="English" style={{backgroundColor: "#ffffff"}} >English</option>
                <option value="Spanish" style={{backgroundColor: "#ffffff"}} >Spanish</option>
                <option value="French" style={{backgroundColor: "#ffffff"}} >French</option>
            </select>
        </div>
    );
}
