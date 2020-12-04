# Simon Squares

Simon Squares is a memory testing game where a player attempts to recreate the pattern sequence that the cpu displays.
The inspiration was taken from the 'Simon' electronic game from the 1980's and also from this [website...](https://www.memozor.com/simon-games/simon-game-colored-squares)

# UX

The main technologies used in designing and creating this memory game are HTML5, CSS3, Javascript and jQuery and some [Bootstrap 4.0.](https://getbootstrap.com/)

The use of a wireframing program [(Balsamiq)](https://balsamiq.com/wireframes/google-drive/) was also needed to bring some of the design ideas out from the abstract.

[Googlefonts](https://fonts.google.com/) was used to add character and flavour to the overall 'feel' of the site/game.

I also needed small sized icons to be displayed on the browser tabs of this game site. I did this using a free tool online called [Favicon Generator](https://favicon.io/)

## Strategy
The design strategy for this project ...

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

### ***Splash Screen***

Firstly I needed a background that was going to fit in with the 'theme' of the game, namely, squares and I found that [here](https://www.pexels.com/photo/black-and-white-checkered-illustration-4278784/)
which I then blurred using [this website](http://blur.imageonline.co/) to give it the appearance thar its really in the background and anything which will be placed on top will appear to 'pop out' giving a sense of depth to the user.

For the title of the game I've chosen a big flowy font (Krona) with size of 8ems to capture the attention of the user.

The colour blue was used as it conveys a sense of calm.

On this page there would be 3 main navigation elements

* How to play 
* Play the game
* High-Scores

All buttons would take the user to a new page where the design idea for the background, the colours and font decisions will remain consistent throughout the site for a smooth experience.

Later I realised I needed a short description of the game so that the user can get a sneak insight into what the game is about - kind of like a synopsis for a book/movie.

On both the high-scores and instructions pages there should be a way of getting back to the title screen without having the user pressing the back button on the browser. A predefined back button would need to be implemented here.

### ***Main game***

The main idea of the game is that the computer (cpu) would 'light-up' a randomly selected grid-square (a div) on its 1st round/level. That div would then return to the colour or state it was before.

The user would then have to click the approriate matching grid-sqauare to reach level 2.

Only if the user is correct do the levels increase.

The maximum level was initially going to be 20 (just like in the original Simon game) but because I didnt want the cpu to pick any repeatable numbers AND there are only 16 grid-squares, the maximum level to beat is set at 16 only although this can be changed with the code so that any repeated random numbers between 1 and 16 aren't checked.

# ***User Stories***

1. As a new player of this game I would like to know how to play it. A clear indication of the instructions would need to be obvious.

2. As a player wanting to jump straight in and play, the ability to immediately play should be on the main screen that the user/player is greeted with when accessing the site.

3. As a player I would like to enter my name and see it on the gameplay screen.

4. As a returning player I would like to see who holds the high score and if its beatable therefore a record of previous high scorers should be displayed for viewing.

5. As a player playing the game and making a mistake, I would like the chance to redo my turn and the game should allow for this. Therefore a life counter could be added and displayed to allow users to be updated and after a certain amount of mistakes the game ends.

6. As a player who has lost all lives they should be given the opportunity to play again or return to main menu.

7. As a player who succeeds to the end - level 16 in this case - they will be congratulated and their name with score will be recorded in the high-score table for all to see.

8. As a player who'd like to know the whereabouts of high scorers and to find where in the world they are from, there could be an option in the high-score table where a map icon could appear beside the name entries which when clicked upon would show a google map with their location.

9. As a player who has made a mistake and lost a life, this would need to be alerted to the user in some way to inform them of their remaining lives.

10. As a player advancing through the levels, an indication of how the player is doing would need to be displayed and incremented accordingly.


# Features

**HIGH SCORE TABLE** - If the player does well in the game they can have their score recorded in the high-score table and later view their success in the high-score table provided via the ***'high-score table'*** button on the welcome screen.

**HOW TO PLAY** - Instructions for the first-time player.

**LIFE COUNTER** - to keep player informed of remaining lives.

**LEVEL INDICATOR** - to track users' progress.

# Navigation

Navigating Simon Squares is quite easy as there are only 4 pages.

* page 1 - index.html

  * This is the 1st page that greets the player and is where the main title is largely displayed. 
    Also from here the player can navigate to read 'how to play' the game, check out the high-scores
    and jump straight in and have a game!

* page 2 - main.html

    * Upon clicking, the user/player is asked for their name and is taken to where the game-play takes place.
      The player is then asked if they are ready via an alert. 
      
    *  On this screen is the game grid of 4x4 equally sized divs,
       the players name at the left of the grid and the level indicator 
       and remaining lives on the right.

       * The level indicator increases by 1 (in real-time) when the players' guesses
         match that of the cpu's which is stored in the <code>tileSeq[]</code>
      
    *  The player loses a life when they input an incorrect guess.

        * An incorrect guess is when the players guess doesn't match 
      the sequence that the cpu generated and displayed to the user earlier.

        * The game ends when the player loses all 3 lives and this is updated in real-time.

            * A modal pops up to ask the user to play again and
              displays the level they reached.

    * When the game is over, the player has the choice of playing again or
      returning to the start screen.(index.html)

* page 3 - instructions.html

    * A basic How-To simply explaining how to play 
      framed in a border to draw the eye in.

    * A back button is present to return to the starting 
      screen. (index.html) I initially put in a timer 
      here but I felt it was a bit too constricting and 
      puts pressure on the user/player to read fast.

* page 4 - high-scores.html

    * Upon arriving, the player can check out the top 5 
    high scores. A high score in this case is recorded 
    by which level was reached. 

        * There are a max of 16 levels.

    * A back button is present to return to the starting 
      screen. (index.html)



# Features to be added at a later time

**A GOOGLE MAP** - to locate other players who are recorded in the high-score table.

**MUSIC**  

* a theme tune which would play throughout the gameplay.

* a different tune while viewing the high-scores.

**SFX**

* to let the user know they have clicked something.

* to inform user they have won or lost the game.

* when modals or text boxes appear that needs users' attention.

# TESTING

see [TESTING.md](https://github.com/GOSUB-C64/User-Centric_Project/blob/master/TESTING.md) for all the relevant testing I performed to make sure this project works well.

#

# Deployment

## Deploy to GitHub pages

1. In the Github repository find and click on **settings**

2. Locate **github pages** by scrolling the settings page

3. Select **Master Branch** via the **Source** drop down

4. After a quick refresh go back to the **github pages** section

5. Your site is now deployed 'live' and you can use the generated url to find it

#

## Deploy Locally

1. Go to your browser's add on store for FireFox or extensions for Chrome

2. find and install **Gitpod**

3. In the Github repository find and click the **gitpod** button

4. The repository will download and load into **Gitpod** IDE

5. Open a terminal and type <code>**python3 -m http.server**</code> to open a port to the browser.
#
# Credits

Many thanks to ***Menno van der Krift*** [responsive grid code](https://www.youtube.com/watch?v=lbIYGALzP0A&list=PLD-A13pAt_uqsYtnByMWT4I6ItCN1KflS&index=10&t=489s) for his youtube video on how to apply js to my grid so it stays responsive no matter the screen size!

I sourced [this video](https://www.youtube.com/watch?v=uTGRJqn889Q&t=4s) which help alot in my understanding of how to generate an array of non-repeatable items which I used for function generateTileArray() in [main.js](https://github.com/GOSUB-C64/MS2_Project/blob/master/assets/js/main.js)
go to timestamp 9:44

I must admit it took me a while to understand ***setTimeout*** and ***serInterval*** which has led me to basically understanding a duality of Javascript and how it is asynchronous.

[***setTimeout*** and ***setTimeout***](https://www.youtube.com/watch?v=nGfTjA8qNDA) YouTube Video that really helped me in that understanding.

When I captured a name from the player - I needed to figure out how to pass that data from one page to another so I found the answer [here](https://stackoverflow.com/questions/27765666/passing-variable-through-javascript-from-one-html-page-to-another-page) and implemented it into this project.

The only image I used was for the background which was consistent throughout the site - I sourced that from [here](https://www.pexels.com/photo/black-and-white-checkered-illustration-4278784/)

I blurred it slightly using this [online tool](http://blur.imageonline.co/)

# Acknowledgements

* I would like to take this opportunity to thank Akshat Garg (Mentor at Code Institute). He was awesome from the start. He displayed patience, insight and his guidance was most welcome to a newbie like me.

* Also Mr Bim Williams (Code Institute Alumnus) for taking the time to cut thru the confusion of Javascript arrays and setTimeout/setInterval - Thanks Bim!

# Disclaimer

* This game project was designed solely for educational reasons.
