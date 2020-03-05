# AppinessTask
# Installation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

1) Download From Github account or clone it from account.

2) After Project Download/clone Inside project folder install node_module

3) command: npm install

4) Start Server using:
  command : ng serve (default port 4200) If you want to run this project specify port use (ng serve --port 4500) you can replace 4500     port as you want.
  
  
## Functionality overview

# General functionality:
 
 1. Get All users from github api and rendered.
 2. Search on user page using 'Ng2SearchPipeModule'.
 3. Click on any user to seen profile deatils and repositories lists.
 4. Get user public repositories from github api and rendered.
 5. Click on any user repository to seen repository deatils.
 
 # The general page breakdown looks like this:
 
 1) Home page (URL:/users);
    i. List of Users
    
    ![picture](img/task_user_list.png)
    
 2) User Details (URL : user-detail/username);
    i. User Details
    ![picture](img/task_user_details.png)
    
 3) Repositories List (URL : repositories/username);
    i. List of Repositories
    ![picture](img/task_user_repo.png)
    
 3) Rrepository Details (URL : repository-detail/username/repo);
    i.Repository Details
    ![picture](img/task_repo_details.png)
    
  4) I added all pages screen short to img folder inside.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

For Production use ng build --prod

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
