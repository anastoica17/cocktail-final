import {Component, createRef} from "react";
import Cocktail from "./Cocktail";

class SearchCocktail extends Component {
    constructor(props) {
        super(props);
        this.state = {drinkList: []};
        this.handleChange = this.handleChange.bind(this);
        this.searchInput = createRef();
    }

    async handleChange(e) {
        e.preventDefault();
        const inputValue = document.getElementById('searchInput').value;
        let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inputValue;
        if (this.props.selectedCategory.length > 1) {
            url += "&c=" + this.props.selectedCategory;
        }
        /*  axios({
              url: url,
              method: "get",
              withCredentials: false,
              headers: {"Content-Type": "application/json"}
          })
              .then(res => {
                  const drinks = res.data;
                  console.log(drinks.drinks);
                  this.setState({drinkList: drinks.drinks});
              })

         */
        let request = new XMLHttpRequest();
        let self = this;

        request.open("GET", url)

        request.addEventListener('load', function (event) {
            let response = JSON.parse(request.response);
            console.log("searchList");
            console.log(response.drinks);
            self.setState({drinkList: response.drinks});
        })
        request.send();
    }

    /* const data = await fetch(url, {
          mode: 'cors',
          method: "GET",
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          }
      }).then(data => {
          console.log("searchCocktail_after");
          console.log(this.props);
          console.log(data.drinks);
          console.log("aaaa");
          this.setState({drinkList: data.drinks});
      });*/

    render() {
        return <>
            <section>
                <div className="ButtonInput">
                    <input id="searchInput" type="text"
                           ref={this.searchInput}
                           id="searchInput"
                           placeholder="Search here"
                           className="SearchBox"
                    />
                    <button onClick={this.handleChange}/>
                </div>
            </section>
            <Cocktail list={this.state.drinkList}/>
        </>
    }
}

export default SearchCocktail;