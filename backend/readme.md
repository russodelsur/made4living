# Compulsory taks 01 - projects server

### 01 - Start local server

Go to the task folder and run "npm start"

### 02 - Display all projects

Go to "http://localhost:3000/api" and all project objects will be displayed.

### 03 - Add project

From postman. Use the POST http verb with the url "http://localhost:3000/projects".
Add a body in raw JSON format as per the example below:

{"title":"example", "description": "example description", "URL": "example.com"}

Project will be added at the back of the list with automatic ID.

### 04 - Delete project with ID. 

From postman. Use the DELETE http verb with the url "http://localhost:3000/projects/id" with id being the id of the project you want to delete.

For instance, if you want to delete project with id 4. Use url "http://localhost:3000/projects/4".

Once DELETE is executed. All project id are organized from 1 upwards. Meaning that if project id 4 is deleted. Project above 4 will downgrade id by one.

### 05 - Replace title or description, or both. 

From postman. Use the PUT http verb with the url "http://localhost:3000/projects/id" with id being the id of the project you want to edit.

Add a body in raw JSON format as per the example below:

{"title":"example", "description": "example description"}

If you only want to edit the title, ignore the description completely. And viceversa, see below:

To update title:
{"title":"example"}

To update description:
{"description": "example description"}

Enjoy the app by (c)Ruslan. 