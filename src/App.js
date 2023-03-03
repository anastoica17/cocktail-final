import './stylesheets/App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import DrinkDetail from "./pages/DrinkDetail";
import SearchComponent from "./components/SearchComponent";
import ErrorPage from "./pages/ErrorPage";
import axios from "axios";

const drinksCategory = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
        {path: "/", element: <Home/>},

        {
            path: "/drinks/:drinkId",
            element: <DrinkDetail/>,
            loader: async (req) => {
                let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + req.params.drinkId;
                const resp = await axios.get(url, {
                        withCredentials: false,
                        headers: {"Content-Type": "application/json"}
                    }
                );
                const data = await resp.data;
                return data.drinks;
            }
        }
    ]
}]);

function App() {
    return (
        <>
            <header className="App-header">
                <div className="App-title">Cocktails</div>
            </header>
            <nav>
                <RouterProvider router={drinksCategory}/>
            </nav>

            <main className="App-main">
                <div id="searchComponent" className="searchComponent">
                    <SearchComponent/>
                </div>
            </main>
        </>
    );
}

export default App;
