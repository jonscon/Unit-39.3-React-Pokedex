import './Pokecard.css';

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

function Pokecard({ id, name, type, exp }) {
    let imgSrc = `${POKE_API}${id}.png`

    return (
        <div className="Pokecard">
            <p className="Pokecard-name">{ name }</p>
            <img className="Pokecard-img" src={ imgSrc } />
            <p className="Pokecard-type">Type: { type }</p>
            <p className="Pokecard-exp">EXP: { exp }</p>
        </div>
    );
}

export default Pokecard;