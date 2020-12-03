# **TESTING  EVIDENCED FOR SIMON SQUARES (MS2)**

# Automated Testing

## HTML Validator
* All 4 html pages tested negative for errors by copying and pasting the html markup into [the online W3C Validator tool](https://validator.w3.org/)

* index.html - *PASS*
* main.html  - *PASS*
* instructions - *PASS*
* high-scores.html - *PASS*

## CSS Validator

* style.css - *PASS* 

[WC3 CSS online Validator](https://jigsaw.w3.org/css-validator/validator)

## JavaScript Validator

* index.js  - *PASS*
* main.js - *PASS*
* instructions.js - *PASS*
* high-scores.js - *PASS*

I used [JShint](https://jshint.com/) to validate all JavaScript code I wrote/used with nothing major to report.

**All validators located at the links provided above accepted code copied from my project and pasted into the relevant window**

# Browser Tests

## Google Chrome

* This memory game project was developed on the Google Chrome Browser using the supplied dev tools.

* It is responsive on all major screen sizes with no glitches or obvious kinks in the layout.

## Firefox

* Everything looks good

* one thing to point out is that on the modals it now says 'Submit Query' but I think thats down to the browser itself and how it handles that.

## Opera 

* On each page there was a bit of vertical scrolling to be seen but I that is because of the default browser URI bar at top of screen. When fullscreen was toggled it seemed to stop this vertical scrolling on all 4 pages.

* A white bar at the left, right and bottom of the page was seen in the instructions page when you click 'How to Play' from the index page.

## Internet Explorer

* index.html - loaded good - nothing obvious out of place.

* instructions.html - loaded ok but 'wobbles' when scroll attempts are made.

* high-scores.html - problem showing Name data and Level data - must be with the txt file where this data is stored.
Back button also not working.

* main.html - modal for alerting user didnt appear on request. Grid layout is all wrong. Players name, Level and Lives data nit showing.

* There are design problems with using 'Flexbox' on MS IE browsers versions 10 and 11 and this will have to be a future fix on this project.

* I have found this [link useful](https://github.com/philipwalton/flexbugs#flexbug-6) and will be able to use it to fix this major issue at a future time.


## Microsoft Edge

* index.html - page loaded great - all good.

* instructions.html - page loaded - all good.

* high-scores.html - problem loading in data from txt file.

* main.html - problems with showing the Players name, Level amount and Lives.

#   Manual Tests

* Getting the 4x4 grid on the screen and aligned to be the central actor was difficult 
at the start primarily because I had to go back to the course materials and recap over
 Bootstrap Grid. In the end I realised that it was a combination of these plus the 
 introduction of using the css flexbox which suceeded in having my wireframe design for
  the grid realised.

* Next I needed to make it responsive across multiple screen sizes so I borrowed some code
 from ***Menno van der Krift*** [responsive grid code](https://www.youtube.com/watch?v=lbIYGALzP0A&list=PLD-A13pAt_uqsYtnByMWT4I6ItCN1KflS&index=10&t=489s)

  * I found this invaluable to the core concept.

#

* Next I started coding how the game would play and the functions I would need...
   
Initial ideas were to generate a random number and pair it to the approptiate grid cell (div id)
then light up that div (change its background-color) to a colour from an array.

Level #1 - 1 div would light up - wait - turn off.

Level #2 - 2 divs would light up - wait - turn off one by one.

.....
Level #16

# User Input

The player's click ability was turned off while the cpu was
 displaying its turn so that the player would know to wait 
 until this cycle was finished.
A boolean variable <code>isClickEnabled</code> was used for
 control.

The player uses the mouse/trackpad to move the mouse cursor
 and click the same sequence of coloured lit squares (divs)
  as was observed during the cpu's turn. 

A click event was used to capture which grid square was clicked,
 then compared to what the predefined <code>tileArray[]</code> 
 was. 

#

I used a combination of Bootstrap Modals and JS alerts.

Modals were used:

  * to capture the name of the player

  * to report the level reached when the game was over
    and ask if the player wanted to play again

  * to congratulate the player if they won (reached level 16)


JS alerts were used to let the player know: 
  
  * the game is starting/continuing

  * they've lost a life


I would've liked to extend the Modal implementation instead
 of using the alerts and this will be a future fix.

#

## High Score Table

I wanted to have the player's name and level reached recorded
in the high scores table if they ranked within the top 5 but
as time was against me I had to opt out and leave implementing 
this feature for another time. 
















