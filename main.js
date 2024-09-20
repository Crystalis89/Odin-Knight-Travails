// Knight's basic move is two steps forward and one step to the side or one step forward and two steps to the side. It can face any direction. Given a starting position and a target one find shortest number of moves to reach the target.

// Gameboard coordinates 8 by 8 grid
/*
        "0-0" "0-1" "0-2" "0-3" "0-4" "0-5" "0-6" "0-7"
        "1-0" "1-1" "1-2" "1-3" "1-4" "1-5" "1-6" "1-7"
        "2-0" "2-1" "2-2" "2-3" "2-4" "2-5" "2-6" "2-7"
        "3-0" "3-1" "3-2" "3-3" "3-4" "3-5" "3-6" "3-7"
        "4-0" "4-1" "4-2" "4-3" "4-4" "4-5" "4-6" "4-7"
        "5-0" "5-1" "5-2" "5-3" "5-4" "5-5" "5-6" "5-7"
        "6-0" "6-1" "6-2" "6-3" "6-4" "6-5" "6-6" "6-7"
        "7-0" "7-1" "7-2" "7-3" "7-4" "7-5" "7-6" "7-7"
*/


//visualizer function to add class to the square of the next move and remove class from current square changing their color
/*
Pseudocode here
input coords for current location, goal, and next move
if next coords = goal coords add the current class and return
remove current class and replace it with prior.
add current class to next move coords target

add to CSS to add some kind of visual for current location and goal. Possibly an image, but at minimum changing color.
*/

function visualizer(movelist, current, goal) {
        let markedmoves = document.querySelectorAll('.nextmove')
        let currentmark = document.querySelector('.current')
        let goalmark = document.querySelector('.goal')

        //Should I add something to not have all three parameters in visualizer, maybe something like if x is not null then do the relevant part below.

        //If no goal yet add proper class to the provided goal.
        if (goalmark === null) {
                goalmark = document.getElementById(goal[0] + '-' + goal[1])
                goalmark.classList.add('goal')
        }

        //Removes the current classes. 
        for (const move of markedmoves) {
                move.classList.remove('nextmove')
        }
        currentmark.classList.remove('current')

        //Add the nextmove class to the objects matching the contents of the movelist array.
        for (const move of movelist) {
             
                let moveclass = document.getElementById(move[0] + '-' + move[1])
                moveclass.classList.add('nextmove')
        }

        //If nothing has the 'current' class find the element with the right coordinates and add the class to it.
        if (currentmark === null) {
                currentmark = document.getElementById(current[0] + '-' + current[1])
                currentmark.classList.add('current')
        }
        

}


//function to create array of next set of valid moves, including making sure doesn't go out of bounds. Might be used by a recursive function. Each move being + or - 2 to one coord and + or - 1 to the other without going over 7 or under 0.


function validMoves(current, goal) {
        let validmoveslist = []
        for (let i = 0; i < 8; i++) {
                let nextmove = []
                switch (i) {
                        case 0:
                                nextmove[0] = current[0] + 2
                                nextmove[1] = current[1] + 1
                                break;
                
                        case 1:
                                nextmove[0] = current[0] + 2
                                nextmove[1] = current[1] - 1
                                break;
        
                        case 2:
                                nextmove[0] = current[0] - 2
                                nextmove[1] = current[1] + 1
                                break;
        
                        case 3:
                                nextmove[0] = current[0] - 2
                                nextmove[1] = current[1] - 1
                                break;
                                
                        case 4:
                                nextmove[0] = current[0] + 1
                                nextmove[1] = current[1] + 2
                                break;
                                
                        case 5:
                                nextmove[0] = current[0] + 1
                                nextmove[1] = current[1] - 2
                                break;
                                
                        case 6: 
                                nextmove[0] = current[0] - 1                        
                                nextmove[1] = current[1] + 2
                        break;
                        
                
                        case 7:
                                nextmove[0] = current[0] - 1
                                nextmove[1] = current[1] - 2
                                break;
                                
                                
                
                        default:
                                break;
                }

                //add a check for if it was the prior move so doesnt go backwards. Could add prior class to current before move and then select by class to find which one instead of saving it seperately.
                console.log(nextmove)
                if ((nextmove[0] === goal[0]) && (nextmove[1] === goal[1])) {
                        return true
                } else {
                        if ((nextmove[0] <= 7 && nextmove[0] >= 0) && (nextmove[1] <= 7 && nextmove[1] >= 0)) {
                                console.log('Add to Valid Moves')
                                validmoveslist.push(nextmove)
                                console.log(validmoveslist)
                        }    
                }

              
        } 
        return validmoveslist
}




// function that decides which move, or maybe top 3 moves, go closer to the goal and feeds that new location into the above move finder function. This one might work recursively. Not 100% sure how to define what is closer when it is involving two coordinates but it might be as simple as compare x to x and y to y and picking the option with the lowest result of both.

/*
Pseudocode here

*/