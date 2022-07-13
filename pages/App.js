import Home from "./pages/Home";
import Header from "./pages/Header";
import image from "./../pages/static/architecture.jpg";

function App() {
    return (
        <div className={`bg-[url('./../pages/static/abstract.jpg')]`}>
            <Header />
            <Home />
        </div>
    );
}

export default App;
