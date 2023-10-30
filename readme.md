# Testing my restful api using Postman

In the project directory, you can run:

### `npm start`

This runs the app and the app listens for requests on port 8080. The frontend also starts up automatically.
If you open the browser and navigate to http://localhost:8080/api you will see the contents of my projects.json file.
This file can be used to store projects by using Postman and various http methods to populate it.

## Adding a project using POST

1.Open Postman in the browser and click the plus sign to make a request.
2.Enter http://localhost:8080/api in the request field and make sure the dropdown menu on the left is selected to POST.
3.On the menu below the URL field select Body, raw, Text and finally JSON.
4.Create an object using curly braces and type three properties, title and description, all enclosed in double quotes.
5.Give each property a value and enclose them in double quotes as well. A comma must seperate each property except for the last property .
6.Click SEND on the top right hand side. If the request is successful the words "File created" will appear in the window below.
7.The new project can be seen by making a GET request to http://localhost:8080/api

## Deleting a project

1.In Postman enter http://localhost:8080/api in the request input field.
2.To delete a specific project enter the id in the URL. eg. http://localhost:8080/api/1 will delete the project with
the id of 1. Make sure to select DELETE on the left of the input field.
3.Click SEND to execute the request.
4.If the project was successfully deleted the words "project deleted" will appear in the window below.

## Updating a project

1.In Postman enter http://localhost:8080/api in the request input field.
2.Select PUT and alter the URL to the project you want to update. eg.http://localhost:8080/api/1 will update
the project with the id of 1.
3.On the menu below the URL field select Body, raw, Text and finally JSON.
4.Create an object using curly braces and type two properties, title and description, all enclosed in double quotes.
5.Give each property a value and enclose them in double quotes as well. A comma must seperate each property except for the last property .
6.Click SEND on the top right hand side. If the request is successful the words "File created" will appear in the window below.
