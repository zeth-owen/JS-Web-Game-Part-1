
//Function for Character & Static Imagery
function newImage(src, left, bottom) {
    let character = document.createElement('img');
    character.src = src;
    character.style.position = 'fixed';
    character.style.left = left;
    character.style.bottom = bottom;
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




