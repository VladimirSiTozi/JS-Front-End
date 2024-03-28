function solve(input) {
    const heroes = []

    for (const row of input) {
        const rowInfo = row.split(' / ')

        const name = rowInfo[0]
        const level = Number(rowInfo[1])
        let items = ''

        if (rowInfo.length > 2){
            items = rowInfo[2].split(', ')
        }

        hero = {
            name,
            level,
            items
        }
        heroes.push(hero)
    }

    function compareByLevel(a, b) {
        return a.level - b.level;
      }

    heroes
        .sort(compareByLevel)
        .forEach(hero => console.log(`Hero: ${hero.name} \nlevel => ${hero.level} \nitems => ${hero.items.join(', ')}`));
}

solve([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
])

console.log('=====')

solve([
'Batman / 2 / Banana, Gun',
'Superman / 18 / Sword',
'Poppy / 28 / Sentinel, Antara'
])