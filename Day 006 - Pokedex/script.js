const pokeContainer = document.getElementById("pokeContainer") // Pega o elemento HTML a ser usado para mostrar os cards dos pokemon.
const maxPokemon = 150 // O número máximo de pokemon a ser mostrado.
const colors = { // Cores dos tipos de pokemon.
    normal: "#F5F5F5",
    fighting: "#E6E0D4",
    flying: "#F5F5F5",
    bug: "#F8D5A3",
    fairy: "#FCEAFF",
    fire: "#FDCDCD",
    water: "#c0eafd",
    ground: "#F4E7DA",
    rock: "#665c53",
    grass: "#81fc89",
    poison: "#8eca9b",
    electric: "#e9d882",
    psychic: "#EAEDA1"
}
let mainTypes = Object.keys(colors) // Pega cada chave da constante "colors" e cria um array que as armazena.

const getPokemon = async id => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}` // Guarda o url com dados do pokemon passado.
    let res = await fetch(url) // Faz a resolução da promise.
    let pokemon = await res.json() // Transforma os dados da promise para o formato JSON.
    createCard(pokemon) // Envia os dados do pokemon para a função de criação do card.
}

function createCard(pokemon) {
    let bgColor // Guarda uma cor dependendo do tipo do pokemon.
    let pokeNum // Guarda o id do pokemon.

    mainTypes.map(type => {
        if(type === pokemon.types[0].type.name) { // Se o tipo dos pokemon armazenado anteriormente no array for igual ao tipo do pokemon atual...
            bgColor = colors[`${type}`] // ...a cor do card vai ser a cor correspondente na constante de acordo com o tipo do pokemon.
        }
    })

    if(pokemon.id < 10) { // Se o id do pokemon for menor que 10...
        pokeNum = `00${pokemon.id}` // ...põe dois zeros antes do id.
    } else if(pokemon.id < 100) { // Se o id do pokemon for menor que 100...
        pokeNum = `0${pokemon.id}` // ...põe um zero antes do id.
    } else { // Senão...
        pokeNum = pokemon.id // ...deixa somente o id do pokemon.
    }

    let numType = 0 // Variável para armazenar qual tipo vai ser mostrado.

    for(slot in pokemon.types) // Verifica cada tipo do pokemon a ser mostrado.
    {
        if(pokemon.types[slot].type.name === "normal" && pokemon.types.length === 2) // Se o primeiro tipo for normal e o tamanho do array de tipos for igual a 2...
        {
            numType = Number(slot+1) // ...o tipo do pokemon vai ser o segundo item do array.
        }
    }

    let newCard = `
        <div class="pokemon" style="background-color: ${bgColor};">
            <div class="pokeImg"><img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}"/></div>
            <div class="info">
                <span class="number">#${pokeNum}</span>
                <h3 class="name">${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
                <small class="type">Type: ${pokemon.types[numType].type.name}</small>
            </div>
        </div>
    `

    pokeContainer.innerHTML += newCard
}

async function fetchPokemon()
{
    let pokeCount = parseInt(Math.random() * (maxPokemon - 20) + 20) // Aleatoriza a quantidade de pokemon a ser mostrado.

    for(let i=1; i<=pokeCount; i++) // Passa por cada número gerado na aleatorização e envia ele como id dos pokemon para a função abaixo.

    {
        await getPokemon(i)
    }
}

fetchPokemon()
