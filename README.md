# mongoose_todo

📝 Todo App with Express & Mongoose
This is a simple Todo Application built with Express.js and Mongoose. The main goal of this project is to help me learn and practice backend development using Node.js, Express, and MongoDB through Mongoose.

🚀 Features
Create a new todo

Get all todos

Get a specific todo by ID

Update a todo

Delete a todo

🛠️ Tech Stack
Node.js

Express.js

MongoDB

Mongoose

📁 Project Structure
pgsql
Copy
Edit
project-root/
├── node_modules/
├── index.js
├── package.json
├── .env
└── README.md
🔧 Installation & Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/asifalam515/mongoose_todo
cd mongoose_todo
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file and add your MongoDB URI:

ini
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
PORT=5000
Start the development server:

bash
Copy
Edit
node index.js
📬 API Endpoints
Method Endpoint Description
GET /todos Get all todos
GET /todos/:id Get a todo by ID
POST /todos Create a new todo
PUT /todos/:id Update a todo
DELETE /todos/:id Delete a todo

📚 Learning Goals
Practice RESTful API design

Learn how to connect and interact with MongoDB using Mongoose

Understand routing, middleware, and CRUD operations in Express
