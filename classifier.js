let heroData = [
    ["Seigfried", 901],
    ["Hercules", 1876],
    ["Dai", 2500],
    ["Akira", 3001],
    ["Laios", 5899],
    ["Shurato", 7100],
    ["Aiolia", 8099],
    ["Saga", 9453],
    ["Sailor Moon", 15000]
];

heroData.forEach( hero => {
    
    let level = "";

    switch(true) {
        case hero[1] <= 1000: level = "Ferro"; break;
        case hero[1] >= 1001 && hero[1] <= 2000: level = "Bronze"; break;
        case hero[1] >= 2001 && hero[1] <= 5000: level = "Prata"; break;
        case hero[1] >= 5001 && hero[1] <= 7000: level = "Ouro"; break;
        case hero[1] >= 7001 && hero[1] <= 8000: level = "Platina"; break;
        case hero[1] >= 8001 && hero[1] <= 9000: level = "Ascendente"; break;
        case hero[1] >= 9001 && hero[1] <= 10000: level = "Imortal"; break;
        case hero[1] >= 10001: level = "Radiante"; break;
    }

    console.log("O Herói de nome **"+hero[0]+"** está no nível de **"+level+"**");


});