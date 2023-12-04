//Function for Background
function bgImage(url, left, bottom, width, height) {
    for(let h = 0; h < height; h++) {
        for(let w = 0; w < width; w++) {
            newImage(url, left + w* 100, bottom + h * 100);
        }
    }
}

//bgImage('assets/grass.png',0,0,window.innerWidth/100, heightOfGrass/100);
//bgImage('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100);

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


bgImage('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100);
bgImage('assets/grass.png',0,0,window.innerWidth/100, heightOfGrass/100);

//Evoking Functions w/ arguments
newImage('assets/green-character.gif', '100', '100');
newImage('assets/pine-tree.png','450','200');
newImage('assets/tree.png', '200', '300');
newImage('assets/pillar.png','350','100');
newImage('assets/crate.png','150','200');
newImage('assets/well.png','500','425')

newItem('assets/sword.png','500','405');
newItem('assets/shield.png','165','185');
newItem('assets/staff.png','600','100');

//bgImage('assets/grass.png',0,0,window.innerWidth/100, heightOfGrass/100);
//bgImage('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100);