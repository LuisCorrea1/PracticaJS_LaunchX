const fetchPokemon = () => {
    const Name_P = document.getElementById("Name_P");
    let PokeInput = Name_P.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${PokeInput}`
    //Empieza a buscar informacion en URL (Promesa)
    fetch(url).then((res) => {
        if(res.status!="200")
        {
            console.log(res)
            pokeImage("./Imagenes/Error.png")
        }
        else{
            return res.json();
        }
        //console.log(res)
        
    }).then((data) => {
        console.log(data)
        let Name = data.name;
        let ID = data.order;
        let pokImg = data.sprites.front_default;
        let pokeType = data.types[0].type.name;
        let HP = data.stats[0].base_stat;
        let Atk = data.stats[1].base_stat;
        let Def = data.stats[2].base_stat;
        let SAtk = data.stats[3].base_stat;
        let SDef = data.stats[4].base_stat;
        let Speed = data.stats[5].base_stat;
        let M1 = data.moves[2].move.name;
        let M2 = data.moves[3].move.name;
        let M3 = data.moves[4].move.name;
        
        //Name
        const Nme = document.getElementById("Name");
        Nme.value = `${Name.toUpperCase()}`;
        //ID
        const PId = document.getElementById("ID");
        PId.value = `#${ID.toString().padStart(3,0)}`;
        //Image
        console.log(pokImg);
        pokeImage(pokImg);
        //Type
        const tipo = document.getElementById("pokeType");
        tipo.value = pokeType;
        //HP
        const Hp = document.getElementById("HP");
        Hp.value = HP;
        //Attack
        const Attack = document.getElementById("Atk");
        Attack.value = Atk;
        //Defense
        const Defense = document.getElementById("Def");
        Defense.value = Def;
        //Special Attack
        const SP_Attack = document.getElementById("SP_Atk");
        SP_Attack.value = SAtk;
        //Special Defense
        const SP_Def = document.getElementById("SP_Def");
        SP_Def.value = SDef;
        //Speed
        const Spd = document.getElementById("Speed");
        Spd.value = Speed;
        //Move1 
        const Move1 = document.getElementById("Move1");
        Move1.value = M1;
        //Move1 
        const Move2 = document.getElementById("Move2");
        Move2.value = M2;
        //Move1 
        const Move3 = document.getElementById("Move3");
        Move3.value = M3;
    })
}

//fetchPokemon();

//Cambio de imagen
const pokeImage = (url) => {
    const pokeImage = document.getElementById("pokeImg");
    pokeImage.src = url;
}


