import '../stylesheets/MainMenu.css';

const cocktailTypes = ['Alcoholic', 'Non Alcoholic',
    'Ordinary Drink', 'Cocktail glass',
    'Champagne flute'];

function MainMenu(props) {

    const handleClick = (event) => {
        event.preventDefault();
        const category = event.target.getAttribute('href');
        props.selectedCocktail(category);
    }

    return (
        <>
            <ul className="CocktailListNav">
                {cocktailTypes.map(item =>
                    <li key={item} onClick={handleClick}><a href={item}>{item}</a></li>
                )}
            </ul>
        </>
    );
}

export default MainMenu;