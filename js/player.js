let player = { x:1, y:1 };

function movePlayer(dx,dy){

let nx = player.x + dx
let ny = player.y + dy

if(maze[ny][nx] === 0){
player.x = nx
player.y = ny
}

}