# CV-USA-CSV-SUV - Backend

### Corona Virus data in the United States of America in enough Comma-Separated-Value-formatted lines to fill a large Sports Utility Vehicle.

It's a truckload of American pandemic data!


### Guidelines

* You won't need to pull in the data from the `.csv` at ANY point in this exercise. It's only for reference. We'll be pulling it in in the next part!
* Pay attention to the hints; if we don't tell you to use a function from another external file, you won't need it!
* And if we do tell you need it... you probably do.


### Tasks


* `getDate` - takes in a row array and returns the date from it (see the table header in the `.csv` file for which that is!)
* `getTotalCases` - takes in a row array and returns the total cases from it (see the table header for which that is!)
* `getNewCases` - takes in a row array and returns the new cases from it (see the table header for which that is!)
* `getRow` - takes in a comma-separated string and converts it to array, returning that array
* `getRows` - takes in newline-separated string and convert to 2d array
  * HINT: This is a mapping function, essentially. Make a new array, split the huge csv string, loop through the array that gives you, and push an array for each string row into your new array.
  * HINT: You can use `getRow` (requiring it in!) to convert each row from a string to an array.
* `getTotalCasesByDay` - takes in a date string and a 2D array and returns total cases that day
  * HINT: You'll want to loop through each row of the data!
  * HINT: You can use `getDate` and `getTotalCases` so you don't have to check those indices again!
* `getNewCasesByDay` - takes in a date string and a 2D array and returns new cases that day
  * HINT: You'll want to loop through each row of the data!
  * HINT: You can use `getDate` and `getNewCases` so you don't have to check those indices again!


### Untested-For Stretch Goals

* Write a function that takes in a 2D array and two date strings and returns the difference in total cases between those two days
* Write a function that takes in a 2D array and two date strings and returns the difference in NEW cases between those two days (this is the growth or decline in the rate of case growth)
