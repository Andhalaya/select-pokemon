/*obtener nombre, altura, tipo, imagen y peso*/
document.getElementById('get-pokemon').addEventListener('click', getPokemonInfo);
const infoContainer = document.getElementById('pokemon-info')

function getPokemonInfo(){
    const selectPokemon = document.getElementById('pokemon-select').value;
    console.log(selectPokemon)
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectPokemon}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        showPokemonInfo(data);
        })
    .catch(error => {
        console.error('Error al cargar los datos del Pokemon', error);
    });
}

function showPokemonInfo(pokemon) {

    infoContainer.innerHTML = '';
    
    let container = `
    <div class='pokemon-card'>
        <img src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png'/>
        <div class='pokemon-info'>
        <h2>${pokemon.name.toUpperCase()} </h2>
        <p><span>Type:</span> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
        <p><span>Weight:</span> ${pokemon.weight}</p>
        <p><span>Height:</span> ${pokemon.height}</p>
        </div>
    </div>`

infoContainer.innerHTML = container;

}


