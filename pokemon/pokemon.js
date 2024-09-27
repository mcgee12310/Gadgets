// fetch = Function used for making HTTP requests to fetch resources. 
// (JSON style data, images, files)
// Simplifies asynchronous data fetching in JavaScript 
// and used for interacting with APIs to retrieve and send data asynchronously over the web.
// fetch(url, {options})
//
async function fetchData(){
    try{
        pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        let data = await response.json();

        pokemonIMG = document.getElementById("pokemonIMG");
        pokemonIMG.src = data.sprites.other["official-artwork"].front_default;
        pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
        document.getElementById("pokemon-name").textContent= pokemonName;
        document.getElementById("pokemon-hp").textContent = "HP: " + data.stats[0].base_stat + `❤️`;
        document.getElementById("pokemon-atk").textContent = "ATK: " + data.stats[1].base_stat + `⚔️`;
        document.getElementById("pokemon-def").textContent = "DEF: " + data.stats[2].base_stat +`🛡️`;
        document.getElementById("pokemon-speed").textContent = "SPD: " + data.stats[5].base_stat +`💨`;
        document.getElementById("pokemon-card").style.visibility = "visible";
        
        pokemon_types = document.getElementById("pokemon-types");
        while (pokemon_types.firstChild !== null) {
            pokemon_types.removeChild(pokemon_types.lastChild);
        }
        data.types.forEach(type => {
            switch(type.type.name){
                case("normal"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/1.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("fighting"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/2.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("flying"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/3.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("poison"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("ground"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/5.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("rock"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/6.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("bug"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/7.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("ghost"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/8.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("steel"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/9.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("fire"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/10.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("water"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/11.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("grass"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/12.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("electric"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/13.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("psychic"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/14.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("ice"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/15.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("dragon"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/16.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("dark"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/17.png";
                    pokemon_types.appendChild(img);
                    break;
                }
                case("fairy"): {
                    img = document.createElement("img");
                    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/18.png";
                    pokemon_types.appendChild(img);
                    break;
                }
            }
        });
        
    }
    catch(error) {
        console.error(error);
    }
}