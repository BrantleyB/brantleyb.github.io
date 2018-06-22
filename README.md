# Connect 4

[Live Game](https://brantleyb.github.io/)

## Setup for the Game
To initially set the game up I tried running a loop that created 42 boxes, I quickly found out how difficult it was going to be to keep up with each box. Instead I decided to create a loop that created the top column, then appended the rows underneath, giving them all their own row and column number.

## Instructions
Unlike a normal Connect 4 game, this one allows you to place your piece anywhere, regardless of if one has been placed underneath it already. And just as the name suggests, match 4 in a row to win.

## Challenges
The biggest challenges were the win conditions. I tried multiple different approaches but I ended up having the two functions that are called create new variables of the circles to the left and right and up and down, it would then check the class against the clicked circle and if all 4 of the classes match, you win/lose.

## Unsolved Problems
I was hoping to find win conditions that would pertain to diagonal winnings but was unable to find the right logic to check to see if they had the same class. I'm sure with more time and tweaking I'd be able to figure out how to make that last win condition function. I also would have liked my game to be a little more interactive, maybe with moving parts or backgrounds that would change depending on the person playing.
