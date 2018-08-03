# Galactic Age Calculator

#### Epicodus JavaScript Code Review, Week #1, August 3, 2018

#### By Kelli McCloskey

## This calculates a user's age in Mercury, Venus, Mars and Jupiter years

## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

## Specs
| Spec        | Input         | Output  |
| ------------- |:-------------:| -----:|
| Takes user age and converts it into seconds | 30 | 946,080,000 |
| Takes 2 dates and determines the difference in seconds between the two | August 3, 2018, August 4, 2018 | 86,400 |
| Given the age of a human in Earth years, determines its age in Mercury, Venus, Mars and Jupiter years | 30 | Mercury: 7.2, Venus: 18.6, Mars: 56.4, Jupiter: 355.8 |
| Given the age of a human in Earth years, determines how many years a user has to live on each planet | 30 | Mercury: 12.24, Venus: 31.62, Mars: 95.88, Jupiter: 604.86 |
| If a user has surpassed the average life expectancy, determines how many years on each planet they have lived past the life expectancy | 82 | Mercury: .24, Venus: .62, Mars: 1.88, Jupiter: 11.86 |

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Kelli McCloskey**
