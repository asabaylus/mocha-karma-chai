# Unit Tests
Unit test scaffolding based upon Mocha, Karma, Chai, Sinon and JS-Fixtures.

## Installation
Install latest version of node from [http://nodejs.org](http://nodejs.org)

Then navigate to the directory where this project was cloned and install the required dependencies


    $ npm install


## Running the Unit Tests
Start a watch task to lint and test JavaScript while developing. The watch task will also run Mocha unit tests using Karma.

In your terminal window run...

    $ npm test

...which starts the karma server and sets up a watch task. When grunt watch detects a change to one of the watched project files, it will run the unit tests specified in the browsers specified in ```karma.conf.js```. This is the preferred method for development.
