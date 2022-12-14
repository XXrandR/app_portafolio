import Header from "./categories/Header";
import Footer from "./categories/Footer";

//<div className={`bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1610366398516-46da9dec5931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=963&q=80')]`}>
function App({children}) {
    return (
        <div className="bg-gradient-to-r from-black via-sky-900 to-red-500">
        <Header />
        {children}
        <Footer />
        </div>
    );
}

export default App;
