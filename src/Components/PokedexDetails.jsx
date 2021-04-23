import LoadingElement from './LoadingElement';
import LoadingScreen from './LoadingScreen';
import './PokedexDetails.css';
import PokemonFetchApi from './PokemonFetchApi';

function PokedexDetails({ pokemonId }) {
  const pokemonInfos = PokemonFetchApi(pokemonId);
  const {
    id, sprites, types, abilities, species,
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
                alt={id}
              />
            ) : (
              <LoadingElement />
            )}
            <div className="pokedex-card-description pokedex-card-right">
              <section className="responsive-description">
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
              </section>
            </div>
          </div>
        </div>
        <div className="pokedex-card-center name">
          {species ? (
            <h2 className="pokemon-police">{species.name}</h2>
          ) : (
            <LoadingScreen />
          )}
        </div>
      </div>
    </>
  );
}

export default PokedexDetails;
