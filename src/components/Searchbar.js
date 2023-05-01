import React, {useState, useContext} from "react";
import FavoriteContext, { FavoriteProvider } from "../contexts/favoritesContext";

const Searchbar = (props) => {
    const { favoritePokemons } = useContext(FavoriteContext);
    const [search, setSearch] = useState("dito")
    const {onSearch} = props
    const {onFavoritesProvider} = 0
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }
    const onButtonClickHandlerFavorites = () => {
        onFavoritesProvider()
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler} >Buscar</button>
            </div> 
            <div className="favorites-btn">
                <button onClick={onButtonClickHandlerFavorites} >❤️ {favoritePokemons.length}</button>
            </div>
        </div>
    )
}

export default Searchbar;