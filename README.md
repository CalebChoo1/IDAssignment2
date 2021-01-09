# The Lord of The Rings wikipedia (ID Assignment 2)

github page link: https://calebchoo1.github.io/IDAssignment2/

My project allows fans of the novel "The Lord of the Rings" to search for its books, characters and movies. They can see all the books and movies with just a click of a button. There is a separate section for the information of books and movies. There is also a section which allows users to search for characters. The specific character's information will be displayed. (race, gender, etc...). The last section contains a random quote generator which displays a random quote along with which character and movie it is from. I feel that this would help fans of the novel to know more about the characters and also discover movies they might not have watched yet. This website can also be used by people who are new to the novel but would like to find out more about it. Hence i feel that my website is useful in helping its users to search and retrieve information on The Lord of the Rings.
 
## Design Process

I wanted this website to provide useful and good functions to the fans of The Lord of the Rings and also anyone trying to find more information about the series. I decided to go with one big section for the about section since it would attract their attention to read the short description which might be informative for the users who are new to the series. There are 4 smaller sections which include the books, movies, characters and quotes. These sections have a specific function which displays information by clicking each of the buttons. I made these sections small as they were the main functions of the website and i feel that they should be grouped together so that they can be used simultaneously. For example, when a user generates a quote and sees the character and movie it is from, he can just search the name of the character and movie in the various search functions. For the background images, i went with different high resolution The Lord of the Ring images.

- As a person new to the series, I want to know what the Lord of the Rings is about, hence I click the about section on the navigation bar to read the information displayed.
- As a person new to the series, I want to know more about the books of this series, hence I click the books section on the navigation bar to look at all the image, title and  description of all the books.
- As a person new to the series, I want to know all the movies of the series, hence I click on the movie section of the navigation bar and click the display all movies button. 
- As a person new to the series, I want to generate a random quote, hence i click on the quotes section on the navigation bar and click the generate random quote button.
- As a fan of the series, I want to know more about the details of a movie. Hence I click the movie section on the navigation bar and search the name of the movie.
- As a fan of the series, I want to more more details about a character, hence I click the characters section on the navigation bar and search the name of the charcter.
- As a fan of the series, I want to generate a random quote, hence i click on the quotes section on the navigation bar and click the generate random quote button.

Adobe XD wireframe link: https://xd.adobe.com/view/ce4fc9cd-8cc0-4e03-b5f8-0e069916966b-9b1c/

## Features
### Existing Features

- Navigation bar with buttons for each section - allows users to navigate to each section by clicking the respective button for that section.
  
- Movie search bar - allows users to search for the details of a movie by entering the name of that movie

- Display all movies button - allows users see all the movies of the series by clicking the button

- Character search bar - allows users to search for the details of a character by entering the name of the character

- Random quote generator - allows users to generate and display a random quote along with which character and movie it's from by clicking the button.

- Back to top button - allows users to navigate back to the top of the website by clicking the button.
  
## Technologies Used

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to make api calls.
- [Javascript](https://www.javascript.com/)
    - The project uses **Javascript** to simplify DOM manipulation.
- [Bootstrap](https://getbootstrap.com/)
    - The project uses a **Bootstrap** template called product as the base layout of the website.
- [HTML](https://html.com/)
    - The project uses **HTML** language to write the website.
- [CSS](https://css-tricks.com/)
    - The project uses **CSS** language to style the website. 
- [API](https://the-one-api.dev/)
    - The project uses the one **API** to retrieve information on The Lord of the Rings.

## Testing

**IMPORTANT**
The api used in this project, (https://the-one-api.dev/), has made a restriction such that access for authenticated users to all endpoints is limited to 100 requests every 10 minutes.

1. About button on navigation bar:
   1. When button is clicked, user is brought to about section of the website. 	:heavy_check_mark:
   
2. Books button on navigation bar:
   1. When button is clicked, user is brought to books section of the website. 	:heavy_check_mark:
   
3. Movies button on navigation bar:
   1. When button is clicked, user is brought to movies section of the website. 	:heavy_check_mark:
   
4. Characters button on navigation bar:
   1. When button is clicked, user is brought to characters section of the website. :heavy_check_mark:
   
5. Quotes button on navigation bar:
   1. When button is clicked, user is brought to quotes section of the website. :heavy_check_mark:
   
6. Movie search function:
   1. When user enters the name of the movie into the search bar, and clicks search, the corresponding movie with its details are shown below the search bar. :heavy_check_mark:
   
7. Display all movies below button:
   1. When user clicks on the button, all movies are displayed below the button in a list. :heavy_check_mark:
   
8. Character search function:
   1. When user enters the name of a character and clicks search, the corresponding character and his details are shown below the search bar. :heavy_check_mark:
   
9.  Random quote generator:
   1.  When user clicks the button, a random quote will be show along with which character and movie it is from. :heavy_check_mark:

10.  Back to top button:
   1.  When user clicks the button, he will be brought back to the top of the page. :heavy_check_mark:


My project looks normal across firefox, microsoft edge and google chrome. All its functions work normally as well.

### Bugs

The random quote generator has a lag where the character and movie are displayed slower than the quote.

The container of the books section is uneven when the screen size is reduced. It looks normal again when it reaches around 368px in width.

## Credits

- The code to change the size of placeholder text (style.css lines 5-17) was copied from (https://stackoverflow.com/questions/38070369/how-change-the-placeholder-size-color-in-html)

- The code to generate random numbers for random quotes was copied from (https://www.freecodecamp.org/news/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08/)

### Content

- The text for about section was copied from the [Wikipedia article The_Lord_of_the_Rings](https://en.wikipedia.org/wiki/The_Lord_of_the_Rings)
  
- The text for the book "The Fellowship of the Ring" was copied from [Wikipedia article The_Fellowship_of_the_Ring](https://en.wikipedia.org/wiki/The_Fellowship_of_the_Ring)

- The text for the book "The Two Towers" was copied from [Wikipedia article The_Two_Towers](https://en.wikipedia.org/wiki/The_Two_Towers)
  
- The text for the book "The Return of the King" was copied from [Wikipedia article The_Return_of_the_King](https://en.wikipedia.org/wiki/The_Return_of_the_King)

### Media
- Background image for the body was obtained from (https://wallpapersafari.com/map-of-middle-earth-wallpaper/)
- Background image for about section was obtained from (https://wallpaperaccess.com/4k-lord-of-the-rings)
- Background image for books section was obtained from (https://www.pinterest.com/pin/562809284683220777/)
- Image of the book "The Fellowship of the Ring" was obtained from (https://www.waterstones.com/book/the-fellowship-of-the-ring/j-r-r-tolkien/9780261103573)
- Image of the book "The Two Towers" was obtained from (
https://www.waterstones.com/book/the-two-towers/j-r-r-tolkien/9780261103580)
- Image of the book "The Return of the King" was obtained from (https://www.amazon.com/Return-King-Being-Third-Rings-ebook/dp/B007978P18)
- Background image for movies section was obtained from (https://wallpapercave.com/the-lord-of-the-rings-the-fellowship-of-the-ring-wallpapers)
- Background image for characters section was obtained from (https://wallpaperset.com/lord-of-the-rings-hd-wallpaper)
- Background image for quotes section was obtained from (https://www.teahub.io/viewwp/hxRRxJ_war-lord-of-the-rings/)

### Acknowledgements

- I received inspiration for this project from this website (https://www.theonering.com/).
