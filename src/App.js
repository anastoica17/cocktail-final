import './stylesheets/App.css';
import MainMenu from "./components/MainMenu";
import SearchComponent from "./components/SearchComponent";
import {useState} from "react";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("");

    const selectCocktailCategory = (selectedItem) => {
        setSelectedCategory(selectedItem);
    }

    return (
        <>
            <header className="App-header">
                <div>Cocktails</div>
            </header>
            <nav>
                <MainMenu selectedCocktail={selectCocktailCategory}/>
            </nav>
            <main>
                <div id="searchComponent" className="searchComponent">
                    <SearchComponent selectedCocktail={selectedCategory}/>
                </div>
            </main>
        </>
    );
}

export default App;
