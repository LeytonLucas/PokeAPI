console.log("vinculado");

function API(){
    fetch("https://pokeapi.co/api/v2/pokemon/").then(res=>res.json()).then(res2=>{
        let pokemones = res2.results
        console.log(pokemones);
    });
}

API();
