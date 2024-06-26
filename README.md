# MERN Project

Welcome to our MERN (MongoDB, Express.js, React.js, Node.js) project! This project is designed to show CRUD Operations.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
git clone https://github.com/Medhavi-18/MERN-Project.git
cd MERN-Project

2. **Install dependencies for the server:**
cd server  
npm install


3. **Install dependencies for the client:**
cd client   
npm install


4. **Set up MongoDB:**
- Install MongoDB if not already installed.
- Create a `.env` file in the server directory and add your MongoDB connection URI:
  ```
  MONGO_URI=your_mongo_connection_uri
  ```

## Usage

To run the application, follow these steps:

1. **Run the server:**
cd server    
npm start


2. **Run the client:**
cd client   
npm start


3. **View the application:**

Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Folder Structure
MERN-Project/   
│
├── client/   
│ ├── public/  
│ └── src/   
│ ├── components/   
│ ├── pages/    
│ ├── App.js   
│ └── index.js   
│

└── server/       
├── config/    
├── controllers/   
├── models/    
├── routes/    
├── .env    
└── server.js


## Dependencies

- **Client**:
  - axios: ^0.24.0
  - react: ^17.0.2
  - react-dom: ^17.0.2
  - react-scripts: 5.0.0
- **Server**:
  - bcryptjs: ^2.4.3
  - cors: ^2.8.5
  - dotenv: ^10.0.0
  - express: ^4.17.2
  - mongoose: ^6.2.1


