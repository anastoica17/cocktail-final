import './stylesheets/App.css';
import {Component} from "react";
import MainMenu from "./components/MainMenu";
import SearchComponent from "./components/SearchComponent";

class App extends Component {
    constructor(props) {
        super(props);
        this.selectCocktailCategory = this.selectCocktailCategory.bind(this);
        this.state = ({selectedCategory: ""});
    }

    selectCocktailCategory(selectedItem) {
        this.setState({selectedCategory: selectedItem});
    }

    render() {
        return (
            <>
                <header className="App-header">
                    <div>Cocktails</div>
                </header>
                <nav>
                    <MainMenu selectedCocktail={this.selectCocktailCategory}/>
                </nav>
                <main>
                    <div id="searchComponent" className="searchComponent">
                        <SearchComponent selectedCocktail={this.state.selectedCategory}/>
                    </div>
                </main>
            </>
        );
    }
}

export default App;
