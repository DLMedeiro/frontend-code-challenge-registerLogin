# Yodlr Front End Engineer Code/Design Challenge
*Full readme located in backend folder*

=======================

## Overview

__Provided:__ A simple [NodeJS](https://nodejs.org)
application server for user registration and administration.
This app does two things:
* Hosts static content from the 'public' directory
* Serves a JSON REST API for [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations on users stored in memory

__The Ask:__ Build a user interface for user registration and one for administration of existing users. Any any front-end technologies are acceptable

Minimum Requirements:
* Users should be able to register
* Admin page should list all users
* Design/layout of content

__Features Completed and In Process after 8 Hours of work:__
* Updated file structure to include a React frontend, and created an API Endpoint to communicate with JSON REST API
* Landing page: Users can navigate to the Admin or Registration pages
* Registration form:
    * Users can submit all there details.  Upon submitting the form, users will be added to the saved list of users
    * Form validation and backend tests preventing an incomplete form from being submitted
    * User Route Testing includes adding a new user, rejecting an incomplete request, and removing a user.
* Administration page: Lists all users, including their full name and e-mail 
* Page navigation: Users can move throughout the site without requiring the back button
* Snapshot testing completed for the Home page component
* Styling completed with Bootstrap and additional CSS
* _(In Process)_ Snapshot testing in process for the Registration and Admin pages (working through import error)

## Getting Started

__To use this application:__ 
1. Download and install [NodeJS](http://nodejs.org/download/).

1.  Download the source code through 1 of 2 options:

* Download & extract a [zip file](https://github.com/yodlr/frontend-code-challenge/archive/master.zip) of the source  
* Fork this repository and git clone your fork

1. Install the package dependencies by running the following command in the top-level directory of the source tree:
```
npm install
```

1. Start the application server by running
```
npm start
```

1. Open your browser to [http://localhost:3000](http://localhost:3000) to view the start page (index.html)

1. To stop the server, press CTRL-C.

## REST API

The Users JSON REST API is exposed at [http://localhost:3000/users](http://localhost:3000).

On server start, user data is read into memory from init_data.json. All subsequent actions are done against this memory store.  Stopping and starting the server will re-initialize data from init_data.json.  

#### API Endpoints

* **/users**  
HTTP GET: returns array of all users  
HTTP POST: creates a new user, returns the created user data
* **/users/:id**  
HTTP GET: returns the user with given id (numeric, auto-incrementing).  HTTP 404 if user not found  
HTTP PUT: updates the user with given id and returns updated record. HTTP 404 if user not fund.  
HTTP DELETE: removes the users with given id, returns nothing (HTTP 204)

Here is an example of results returned from HTTP GET on /users:
```
[{"id":1,"email":"kyle@getyodlr.com","firstName":"Kyle","lastName":"White","state":"active"},  
{"id":2,"email":"jane@getyodlr.com","firstName":"Jane","lastName":"Stone","state":"active"},  
{"id":3,"email":"lilly@getyodlr.com","firstName":"Lilly","lastName":"Smith","state":"pending"},  
{"id":4,"email":"fred@getyodlr.com","firstName":"Fred","lastName":"Miles","state":"pending"},  
{"id":5,"email":"alex@getyodlr.com","firstName":"Alexandra","lastName":"Betts","state":"pending"}]
```

## Additional Idea Inspiration

* Experiment with alternative designs (A/B Testing is important for registration!)
* Signup form validation
* Automated testing
* Dynamic data on Admin page (no need to refresh to status changes)
* Sorting/Searching of users
* Admin button to activate accounts (set user status to 'active')
* Admin creation of new accounts
* Optimize assets (minimize and/or bundle css/js)
* Authentication/Authorization
