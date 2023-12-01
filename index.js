//Function for Background
function bgImage(url, left, bottom, width, height) {
    for(let h = 0; h < height; h++) {
        for(let w = 0; w < width; w++) {
            newImage(url, left + w* 100, bottom + h * 100);
        }
    }
}

//Function for Character & Static Imagery
function newImage(src, left, bottom) {
    let character = document.createElement('img');
    character.src = src;
    character.style.position = 'fixed';
    character.style.left = left + 'px';
    character.style.bottom = bottom + 'px';
    document.body.append(character);
return character;
}

//Function for User Items
function newItem(src, left, bottom) {
    let item = newImage(src, left, bottom);
     
    item.addEventListener('dblclick', () => {
        item.remove();
    })
}

//Assigning value to variables in Background Arguments
let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

//Evoking Functions w/ arguments
newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png','450px','200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png','350px','100px');
newImage('assets/crate.png','150px','200px');
newImage('assets/well.png','500px','425px')

newItem('assets/sword.png','500px','405px');
newItem('assets/shield.png','165px','185px');
newItem('assets/staff.png','600px','100px');

bgImage('assets/grass.png',0,0,window.innerWidth/100, heightOfGrass/100);
bgImage('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100);clear