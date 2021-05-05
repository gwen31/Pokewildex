export default function PokemonCompared({ pokemon, setPokemonSearched }) {
  const {
    sprites, types, stats, species,
  } = pokemon;
  return (
    <div>
      <div>
        <input
          placeholder="search a fOOkin pokemon, mate !"
          onChange={(e) => setPokemonSearched(e.target.value)}
        />
        {species && <p>{species.name}</p>}
        {sprites && <img src={sprites.front_default} alt={species.name} />}
        {types && (
          <ul>
            {types.map((e) => (
              <li>{e.type.name}</li>
            ))}
          </ul>
        )}
        {stats && (
          <ul>
            {stats.map((e) => (
              <>
                <li>
                  <p>
                    {e.stat.name} : {e.base_stat}
                  </p>
                </li>
              </>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
