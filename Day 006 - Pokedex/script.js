const pokeContainer = document.getElementById("pokeContainer")
const maxPokemon = 80
const colors = {
    normal: "#F5F5F5",
    fighting: "#E6E0D4",
    flying: "#F5F5F5",
    bug: "#F8D5A3",
    fairy: "#FCEAFF",
    fire: "#FDCDCD",
    water: "#c0eafd",
    ground: "#665c53",
    grass: "#81fc89",
    poison: "#8eca9b",
    electric: "#e9d882",
    psychic: "#EAEDA1"
}
let mainTypes = Object.keys(colors)

const getPokemon = async id => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
    let res = await fetch(url)
    let pokemon = await res.json()
    createCard(pokemon)
}

function createCard(pokemon) {
    let bgColor
    let pokeNum

    mainTypes.map(type => {
        if(type === pokemon.types[0].type.name) {
            bgColor = colors[`${type}`]
        }
    })

    if(pokemon.id < 10) {
        pokeNum = `00${pokemon.id}`
    } else if(pokemon.id < 100) {
        pokeNum = `0${pokemon.id}`
    } else {
        pokeNum = pokemon.id
    }


    // console.log(pokemon.types[0].type.name === "normal" && !pokemon.types.length !== 1 ? pokemon.types[0].type.name : pokemon.types[1].type.name)

    let newCard = `
        <div class="pokemon" style="background-color: ${bgColor};">
            <div class="pokeImg"><img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}"/></div>
            <div class="info">
                <span class="number">#${pokeNum}</span>
                <h3 class="name">${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
                <small class="type">Type: ${pokemon.types[0].type.name}</small>
            </div>
        </div>
    `

    pokeContainer.innerHTML += newCard
}

async function fetchPokemon() {
    let pokeCount = parseInt(Math.random() * (maxPokemon - 20) + 20)
    for(let i=1; i<=pokeCount; i++) {
        await getPokemon(i)
    }
}

fetchPokemon()
