function calculaRank(vitoria, derrota){
	return vitoria - derrota;
}


let heroData = [
    ["Seigfried", 9, 1],
    ["Hercules", 18, 7],
    ["Dai", 25, 0],
    ["Akira", 30, 01],
    ["Laios", 99, 58],
    ["Shurato", 71, 10],
    ["Aiolia", 90, 9],
    ["Saga", 94, 3],
    ["Sailor Moon", 150, 30]
];

heroData.forEach( hero => {
    
    let level = "";

	let rank = calculaRank(hero[1], hero[2]);
	
    switch(true) {
        case rank <= 10: level = "Ferro"; break;
        case rank >= 11 && rank <= 20: level = "Bronze"; break;
        case rank >= 21 && rank <= 50: level = "Prata"; break;
        case rank >= 51 && rank <= 80: level = "Ouro"; break;
        case rank >= 81 && rank <= 90: level = "Diamante"; break;
        case rank >= 91 && rank <= 100: level = "Lendário"; break;
        case rank >= 101: level = "Imortal"; break;
    }

    console.log("O Herói tem saldo de **"+rank+"** está no nível de **"+level+"**");


});