let listPokemones;

function API(){
    fetch("https://pokeapi.co/api/v2/pokemon/").then(res=>res.json()).then(res2=>{
        let pokemones = res2.results
        pintar(pokemones);
    });
}

function pintar(pokemones){
    listPokemones = pokemones;
    let index = 1;
    pokemones.forEach(pokemon => {      
        //document.getElementById("PokeContenedor").appendChild(new Option(pokemon.name, "value"));        
        $("#PokeContenedor").append(new Option(pokemon.name, index));
        index ++;
    });    
}

API();

$("#PokeContenedor").on("change", function(){
    let indexPokemon = parseInt($("#PokeContenedor").val());
    let link = `https://pokeapi.co/api/v2/pokemon/${indexPokemon}/`;

    fetch(link).then(res=>res.json()).then(respuesta=>{
        let type = "";
        respuesta.types.forEach(tipo => type += tipo.type.name + " ")
        pokemon = {
            nombre: respuesta.name,
            imagen: respuesta.sprites.other.dream_world.front_default,
            peso: respuesta.weight,
            experiencia: respuesta.base_experience,
            tipo: type
        }

        $(".card-body strong").eq(0).text(pokemon.nombre);
        $(".card-body strong").eq(3).text(pokemon.tipo);
        $(".card-body strong").eq(2).text(pokemon.peso);
        $(".card-body strong").eq(1).text(pokemon.experiencia);
        $("img.display-size").attr("src", pokemon.imagen)
    });
})