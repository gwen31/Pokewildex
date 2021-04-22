import LoadingElement from './LoadingElement';
import './PokedexDetails.css';
import PokemonFetchApi from './PokemonFetchApi';

function PokedexDetails({ pokemonId }) {
  const pokemonInfos = PokemonFetchApi(pokemonId);
  const {
    id, name, sprites, types, abilities,
  } = pokemonInfos;
  return (
    <>
      <div className="pokedex-card">
        <div className="pokedex-card-additional">
          <div className="more-infos">
            {sprites ? (
              <img
                className="pokedex-card-image"
                src={sprites.front_default}
                alt={name}
              />

            ) : (
              <LoadingElement />
            )}
            <div className="pokedex-card-description pokedex-card-right">
              <p className="name">{name}</p>
              <p className="pokedex-card-description">Id : {id}</p>
              {types ? (
                <ul className="pokedex-card-description">
                  type:
                  {types.map((e) => (
                    <li>{e.type.name}</li>
                  ))}
                </ul>
              ) : (
                <LoadingElement />
              )}
              {abilities ? (
                <ul className="pokedex-card-description">
                  Abilities :
                  {abilities.map((e) => (
                    <li>{e.ability.name}</li>
                  ))}
                </ul>
              ) : (
                <LoadingElement />
              )}

            </div>
          </div>
        </div>
        <div className="pokedex-card-center name">
          <h2 className="pokemon-police">{name}</h2>
        </div>
      </div>
    </>
  );
}

export default PokedexDetails;
