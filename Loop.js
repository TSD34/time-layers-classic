function loop() {
    aftertime = new Date().getTime()
    difftime = ( aftertime - beforetime ) / 1000
    game.timemag += generator.amount [0] * generator.mag [0] * difftime * game.mul [0]
    game.age += game.timemag * difftime
    game.tp += game.timemag * difftime
    document.getElementById("uniage").textContent = ageunit(game.age)
    document.getElementById("tp").textContent = ageunit(game.tp)
    document.getElementById("mag").textContent = unit(Math.round(game.timemag * 100) / 100)
    document.getElementById("magtime").textContent = ageunit(game.timemag)
    for (var i = 0; i < 7; i++) {
        document.getElementById("amount" + i).textContent = unit(Math.floor(generator.amount [i]))
        document.getElementById("plus" + i).textContent = unit(generator.amount [i + 1] * generator.mag [i + 1] * game.mul [i + 1])
        generator.amount [i] += generator.amount [i + 1] * generator.mag [i + 1] * difftime * game.mul [i + 1]
    }
    document.getElementById("amount7").textContent = unit(generator.amount [7])
    beforetime = aftertime
    setTimeout(loop, 20)
}