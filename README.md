# Simon Squares

Simon Squares is a memory testing game where the user attempts to recreate the pattern sequence that the cpu displays prior to the users' guess.
The inspiration was taken from the 'Simon' electronic game from the 1980's and also from this [website...](https://www.memozor.com/simon-games/simon-game-colored-squares)

# UX

The main technologies used in designing and creating this memory game are HTML5, CSS3, Javascript and jQuery and some [Bootstrap 4.0.](https://getbootstrap.com/)

The use of a wireframing program [(Balsamiq)](https://balsamiq.com/wireframes/google-drive/) was also needed to bring some of the design ideas out of the abstract.

[Googlefonts](https://fonts.google.com/) to add character and flavour to the overall 'feel' of the site/game.

I also needed small sized icons to be displayed on the browser tabs of this game site. I did this using a free tool online called [Favicon Generator](https://favicon.io/)

## Strategy
The design strategy for this project was simple...

* Create a simple memory game that tests the users' ability to remember a certain sequence of randomly appearing coloured squares in a predefined grid of squares.

* The User Interface would consist of a grid of 16 squares in a 4x4 grid arrangement.

## Scope
Things to include in this game is obviously the playing arena which would be the grid spoken of earlier. I would need (as a user) to see something that indicates which level I am on at any given moment and maybe a life counter.

The name of the player will need to be displayed also and this would be inputted by the user before the game is played.

There must be a section where the user can read the instructions on how to play the game - a demo maybe?

If the user reaches the end of the game (which could be trying to remember a sequence of 20 coloured grid squares) then he/she could have their name recorded on a 'high-score table' with the possibility of being interactive by clicking on other high score holders and seeing their location on a google map.


## Structure

The basic structure of this project could be divided up into 3 or 4 pages.

* A welcome title page with links to play the game, instructions and to view the highscore table

* The main game page showing the title of the game, the players name, level and lives remaining.

* A page showing the instructions on how to play.

* A page showing the previous players' high scores so far.

## Skeleton

[Here](https://github.com/GOSUB-C64/MS2_Project/tree/master/assets/wireframes/MS2_Wireframes.pdf) I have attempted to get a look and feel for the page layout of the game using wireframes.

## Surface

### Splash Screen

Firstly I needed a background that was going to fit in with the 'theme' of the game, namely, squares and I found that [here](https://www.pexels.com/photo/black-and-white-checkered-illustration-4278784/)
which I then blurred to give it the appearance thar its really in the background and anything which will be placed on top will appear to 'pop out' giving a sense of depth to the user.

For the title of the game I've chosen a big flowy font (Krona) with size of 8ems to capture the attention of the user.

The colour blue was used as it conveys a sense of calm.

On this page there would be 3 main navigation elements

* How to play 
* Play the game
* High-Scores

All buttons would take the user to a new page where the design idea for the background, the colours and font decisions will remain consistent throughout the site for a smooth experience.

Later I realised I needed a short description of the game so that the user can get a sneak insight into what the game is about - kind of like a synopsis for a book/movie.


### Main game

The main idea of the game is that the computer (cpu) would 'light-up' a randomly selected grid-square (a div) on its 1st round/level. That div would then return to the colour or state it was before.

The user would then have to click the approriate matching grid-sqauare to reach level 2.

Only if the user is correct do the levels increase.

The maximum level was initially going to be 20 but because I didnt want the cpu to pick any repeatable numbers AND there are only 16 grid-squares, the maximum level to beat is set at 16 only.





