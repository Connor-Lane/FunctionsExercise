// 1
function fozzieBear() {
    console.log(`Wocka Wocka!`);
}
fozzieBear();

console.log(`==============`);

// 2
function beaker(speak) {
    console.log(speak);   
    console.log(speak);   
    console.log(speak);   
    console.log(speak);   
}
beaker(`Meep`);

console.log(`==============`);

// 3
muppetShow = (a, b) => {
    if (a === `Muppet` && b === `Show`) {
        console.log(`It's time to play the music. It's time to light the lights.`);
    }
}
muppetShow(`Muppet`);
muppetShow(`Muppet`, `Show`)

console.log(`==============`);

// 4
function kermit() {
    return `Kermit The Frog`
}
console.log(kermit());

console.log(`==============`);

// 5
function muppetShowSeasons(seasons) {
    if (seasons === 5) {
        return true;
    } else {
        return false;
    }
}
console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(2));

console.log(`==============`);

// 6
const manOrMuppet = () => {
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet();

console.log(`==============`);

// 7
rainbowConnection = () => `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers, and me.`;
console.log(rainbowConnection());

console.log(`==============`);

// 8 - No

// 9 - Yes

// 10a
const newMuppetMovies = [
    `The Muppets`,
    `Muppets Most Wanted`
];
console.log(newMuppetMovies);

console.log(`==============`);

// 10b
const uppercase = function(line) {
    return line.toUpperCase();
}
const upperMovies = newMuppetMovies.map(uppercase)
console.log(upperMovies);

console.log(`==============`);

// BONUS
// 11a
const oldMuppetMovies = [
    `The Muppet Movie`,
    `The Muppets Take Manhattan`,
    `The Great Muppet Caper`,
    `The Muppet Christmas Carol`,
    `Muppet Treasure Island`,
    `Muppets From Space`
];
console.log(oldMuppetMovies);

console.log(`==============`);

// 11b
const titleSplit = (title) => {
    if (title.length === 22) {
        return true;
    } else {
        return false;
    }
}

const twoMovies = oldMuppetMovies.filter(titleSplit);
console.log(twoMovies);

console.log(`==============`);

// 12a
const charactersOne = [
    `Statler`,
    `Waldorf`
];
console.log(charactersOne);

console.log(`==============`);

// 12b
const charactersTwo = [
    `The Swedish Chef`,
    `Animal`,
    `Rowlf`
];
console.log(charactersTwo);

console.log(`==============`);

// 12c & 12d
randomMuppet = (characters) => {
    item = Math.floor(Math.random() * characters.length);
    console.log(characters[item]);
}
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

console.log(`==============`);

// 13
caps = (string) => {
    let count = 0;
    let newString = ``;
    for (i = 0; i < string.length; i++) {
        if (string[i] === ` `) {
            newString = newString + ` `;
        } else if (count % 2 == 0) {
            newString = newString + string[i].toUpperCase();
            count++;
        } else {
            newString = newString + string[i].toLowerCase();
            count++;
        }
    }
    return newString;
}
console.log(caps(`Hello World`));