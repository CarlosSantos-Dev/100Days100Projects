const pokeContainer = document.getElementById("pokeContainer")
const maxPokemon = 150
const colors = {
    normal: "#F5F5F5",
    fighting: "#E6E0D4",
    flying: "#F5F5F5",
    bug: "#FCEEDA",
    fairy: "#FCEAFF",
    fire: "#FDDFDF",
    water: "#DEF3FD",
    ground: "#F4E7DA",
    grass: "#DEFDE0",
    poison: "#C8DFCD",
    eletric: "#FCF7DE",
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
    console.log(pokemon)

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

    let newCard = `
        <div class="pokemon" style="background-color: ${bgColor};">
            <div class="pokeImg"><img src="${pokemon.sprites.other["official-artwork"].front_default}" width="115px" height="115px"/></div>
            <div class="info">
                <span class="number">#${pokeNum}</span>
            </div>
        <div/>
    `

    pokeContainer.innerHTML += newCard
}



getPokemon(5)
getPokemon(86)
getPokemon(102)
