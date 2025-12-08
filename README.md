# betOnMe
_Users can compete against their friends to help build habits! Find clusters to share the habits you want to improve on, betting on yourself and your companions to complete the habit building task with a specified amount of time and frequency for completion._

## Structure of app

* _Branches are provided for each team_
  * __1 master version: Main__ (Requests are only made to main under special circumstances)
  * __devops branch__
  * __backend branch__
    * _let pms figure out how to organize a branch_
  * __frontend branch__
    * _let pms figure out how to organize the branch_

## How to submit your code for review
1. Fork and Clone the Main Branch
2. Checkout your teams respective branch (e.g backend-branch, frontend-branch, etc)
3. Make your changes
4. Push changes to your respective branch (e.g backend-branch, frontend-branch, etc)
5. Have someone review your changes
6. Ping a PM for a merge request review to the DevOps Branch
7. Request Devops To Review Your Pull-Request (PR)
8. Wait for DevOps to review your PR
9. DevOps will either approve or decline the PR
10. If all looks good DevOps will Merge changes to the Main Branch

## How to Build & Run the App

Follow these steps to run the project locally:

### 1. Clone the repository
git clone https://github.com/abdirxhmxn/betOnMe.git
cd <your-project-folder>

### 2. Install server dependencies
npm install

### 3. Set up environment variables
- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

### 4. Run the server
npm run dev
(or npm start if you're not using nodemon)

### 5. Run the client 
cd client
npm start

### 6. Open the app

Navigate to:

http://localhost:3000   → client
http://localhost:5000   → backend API

## Tech Stack: 
| Category  | Tools                               |
| --------- | ----------------------------------- |
| Backend   | Node.js, Express, Mongoose, MongoDB |
| Frontend  | EJS, HTML, CSS, JavaScript          |
| Dev Tools | dotenv                     |

Issues & Actions to look into:
