import './stylesheets/App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import Drinks from "./components/Drinks";
import DrinkDetail from "./pages/DrinkDetail";
import SearchComponent from "./components/SearchComponent";

const drinksCategory = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    children: [
        {path: "/", element: <Home/>},
        {
            path: "/drinks",
            element: <Drinks/>,
        },
        {
            path: "/drinks/:drinksId",
            element: <DrinkDetail/>
        }
    ]
}]);

function App() {
    return (
        <>
            <header className="App-header">
                <div>Cocktails</div>
            </header>
            <nav>
                <RouterProvider router={drinksCategory}/>
            </nav>
            <main>
                <div id="searchComponent" className="searchComponent">
                    <SearchComponent/>
                </div>
            </main>
        </>
    );
}

export default App;
