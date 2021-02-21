// Let's make a game
const position = {
    x: 0,
    y: 0, 
}

type move = 'up' | 'down' | 'left' | 'right';

function moveBy(choice: move) {
    switch(choice) {
        case 'up':
            position.y += 1;
            break;
        case 'down':
            position.y -= 1;
            break;
        case 'left':
            position.x -= 1;
            break;
        case "right":
            position.x += 1;
            break;
        default:
            throw Error('unknown');
    }
}


console.log(position);
moveBy('up');
console.log(position);
moveBy('down');
console.log(position);
moveBy('left');
console.log(position);
moveBy('right');
console.log(position);
