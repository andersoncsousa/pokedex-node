const readline = require('readline-sync')
const axios = require('axios')

async function start(){
    const pokemon = searchPokemon()
    const api = await returnJSON(pokemon)
    const type = api.data.types[0].type.name
    const weight = api.data.weight
    const height = api.data.height
    const hp = api.data.stats[5].base_stat
    const attack = api.data.stats[4].base_stat
    const defense = api.data.stats[3].base_stat
    const speed = api.data.stats[0].base_stat
    const attackSpecial = api.data.stats[2].base_stat
    const defenseSpecial = api.data.stats[1].base_stat
    const ability_1 = api.data.abilities[0].ability.name
    const ability_2 = api.data.abilities[1].ability.name

    console.log(`
        Pokemon: ${pokemon}
        Tipo: ${type}
        Peso: ${weight}
        Altura: ${height}
        HP: ${hp}
        Ataque: ${attack}
        Defesa: ${defense}
        Velocidade: ${speed}
        Ataque Especial: ${attackSpecial}
        Defesa Especial: ${defenseSpecial}
        habilidade 1: ${ability_1}
        habilidade 2: ${ability_2}
        `)
}

async function returnJSON(pokemon){
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    return response
}
                
function searchPokemon(){
    return readline.question('Digite o nome de um pokemon: ')
}

start()