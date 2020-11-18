# Movie-Trivia-Game

This website will contain a trivia game that will let the user guess which movie earned more at the box office.  There will be a navigation bar that will let the user select which decade's movies they want to be quizzed on, the 80's, 90's, or 2000's.  Media queries will change the navigation menu and the page content based upon the user's screen size using flexbox.  An array of objects will be used to store vital content that will be displayed on the page.  A Javascript loop will dynamically display content on the page. 

The 4 Code Louisville Project requirements this webpage will satisfy are:

1. CSS:  A navigation menu that expands and collapses properly at desktop and mobile sizes, such as by switching between vertical and horizontal, or is opened by clicking the “hamburger” menu item

-Location:  This requirement is satisfied by media queries located in the style.css file (starting on lines 285 and 374).  The rules located within make the nav menu change it's layout from vertical to horizontal as the users screen size expands.

2. CSS:  Use Flexbox or CSS Grid to organize content areas based on mobile or desktop views. For example, swapping from a single column layout to a two-column layout on desktop.

-Location:  Flexbox rules are used all throughout the style.css file to determine the layout of the page based on the users screen size.  

3. Create and populate a JavaScript array with one or more values and display the contents on your page

-Location:  Each of the three .js files has an array of objects at the top of the page whose contents are displayed on page.  

4. Javascript:  Create a Javascript loop that dynamically displays HTML on your page 

-Location:  Each of the .js files has for loops within that dynamically display html on the page, specifcally on lines 83 and 192. 