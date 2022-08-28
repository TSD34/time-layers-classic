function buy(t, u) {
    switch (t) {
        case 0:
            if (game.tp >= generator.cost[u]) {
                game.tp -= generator.cost[u]
                generator.mag[u] = Math.round(generator.mag[u] * 110) / 100
                generator.amount[u] += 1
                generator.cost[u] = Math.round(generator.cost[u] ** (1.3 + 0.1 * u))
                document.getElementById("multiplier" + u).textContent = unit(generator.mag[u])
                document.getElementById("cost" + u).textContent = ageunit(generator.cost[u])
            }
            break;
        case "a":
            switch (unlock) {
                case 0:
                    if (game.tp >= (86400 * 7)) {
                        game.tp -= 86400 * 7
                        document.getElementById("tabbutton1").style.display = "block"
                        document.getElementById("cost-up1").textContent = "1c"
                        document.getElementById("name-up1").textContent = "Unlock Prestage"
                        unlock = 1
                    }
                    break;
                case 1:
                    if (game.tp >= (86400 * 36500)) {
                        game.tp -= 86400 * 36500
                    }
            }
            break;
    }
}
function ageunit(t) {
    var fullsec = Math.floor((t % 60) * 100) / 100
    if (t >= 60) {
        var min = Math.round((t - fullsec) / 60)
        if (t >= 3600) {
            var sec = Math.floor(t) % 60
            var hour = Math.round((min - min % 60) / 60)
            min %= 60
            if (t >= 86400) {
                var day = Math.round((hour - hour % 24) / 24)
                hour %= 24
                if (t >= (86400 * 365)) {
                    var year = Math.round((day - day % 365) / 365)
                    day %= 365
                    if (t >= (86400 * 36500)) {
                        var cent = Math.round((year - year % 100) / 100)
                        year %= 100
                        if (t >= (86400 * 36500000)) {
                            var kc = Math.round((cent - cent % 1000) / 1000)
                            cent %= 1000
                            if (t >= (86400 * 36500000 * 400)) {
                                var hum = Math.round((kc - kc % 400) / 400)
                                kc %= 400
                                if (t >= ua) {
                                    return ageunit_a(kc, hum, t);
                                } else {
                                    return hum + "hum" + kc + "Kc" + cent + "c";
                                }
                            } else {
                                return kc + "Kc" + cent + "c" + year + "y";
                            }
                        } else {
                            return cent + "c" + year + "y" + day + "d";
                        }
                    } else {
                        return year + "y" + day + "d" + hour + "h";
                    }
                } else {
                    return day + "d" + hour + "h" + min + "m";
                }
            } else {
                return hour + "h" + min + "m" + sec + "s";
            }
        } else {
            return min + "m" + fullsec + "s";
        }
    } else {
        return fullsec + "s";
    }
}
function ageunit_a(k, h, t) {
    var kc = k;
    var hum = h;
    var uni = Math.round((hum - hum % 343) / 343)
    hum %= 343
    if (t >= ua * 1000) {
        if (t >= sa) {
            var sag = Math.round((uni - uni % 7.29e+9) / 7.29e+9)
            uni %= 7.29e+9
            if (t >= sa * 1000) {
                if (t >= pa) {
                    var pag = Math.round((sag - sag % 1e+14) / 1e+14)
                    sag %= 1e+14
                    if (t >= pa * 1000) {
                        return unit(t / pa) + "p";
                    } else {
                        var tsa = Math.round(sag / 1e+10) / 100
                        return pag + "pag" + tsa + "Tsa";
                    }
                } else {
                    return unit(t / sa) + "sa";
                }
            } else {
                var bu = Math.round(uni / 1e+7) / 100
                return sag + "sag" + bu + "Bu";
            }
        } else {
            return unit(t / ua) + "u";
        }
    } else {
        return uni + "uni" + hum + "hum" + kc + "Kc";
    }
}
function unit(t) {
    if (t < 1000) {
        return Math.round(t * 100) / 100;
    } else {
        var z_1 = 10 ** Math.floor(Math.log10(t) - 2)
        var z_2 = Math.floor(Math.log10(t) / 3)
        var z_3 = Math.round(t / z_1) * z_1 / 10 ** (z_2 * 3)
        z_3 = Math.round(z_3 * 100) / 100
        z_2 = uniten(z_2 - 1)
        return z_3 + z_2;
    }
}
function uniten(t) {
    if (t == 0) {
        return "K"
    } else if (t == 1) {
        return "M"
    } else if (t == 2) {
        return "B"
    } else {
        return U_en_a[t % 10] + U_en_b[Math.floor(t / 10)]
    }
}
function tab(t) {
    document.getElementById("tab1").style.display = "none"
    document.getElementById("tab2").style.display = "none"
    document.getElementById("tab" + t).style.display = "block"
}