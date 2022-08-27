var game = {};
game.age = 0
game.timemag = 1
game.tp = 0
game.mul = [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01]
var generator = {};
generator.mag = [
    1, 1, 1, 1, 1, 1, 1, 1
]
generator.amount = [
    0, 0, 0, 0, 0, 0, 0, 0
]
generator.cost = [
    5, 1000, 2000000, 4e9, 8e12, 16e15, 32e18, 64e21
]
var beforetime = new Date().getTime();
var aftertime,difftime;
var up = [
    ,
    "All compressor performance is multiply by 1.2",
    "Spacetime compressor 1 performance is multiply by 1.5",
    "Spacetime compressor 2 performance is multiply by 1.5",
    "Spacetime compressor 3 performance is multiply by 1.5",
    "Spacetime compressor 4 performance is multiply by 1.5",
    "Spacetime compressor 5 performance is multiply by 1.5",
    "Spacetime compressor 6 performance is multiply by 1.5",
    "Spacetime compressor 7 performance is multiply by 1.5",
    "Spacetime compressor 8 performance is multiply by 1.5"
]
var func = []
const ua = 86400 * 365 * 137.2e+8;
function dis() {
    for (var i = 0; i < 8; i ++) {
        document.getElementById("cost" + i).textContent = ageunit(generator.cost [i] )
    }
    for (var i = 1; i < 10; i ++) {
        func [i] = function () {
            document.getElementById("content").textContent = up [i]
        }
    }
}
let U_en_a = ["", "U", "D", "T", "Qa", "Qt", "Sx", "Sp", "Oc", "No"]
let U_en_b = ["", "Dc", "Vg", "Tg", "Qd", "Qi", "Se", "St", "Og", "Nn"]
var unlock = 0;
