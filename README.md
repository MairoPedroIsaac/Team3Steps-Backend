# Team 3steps Backend
Backend API implementation

## Prerequisites
The following tools need to be installed on the system before running this project:
- git (Version control)
- node >=v18 
- npm
- postgres

## Setup
1. Clone the repository: 
    ```bash 
    git clone https://github.com/MairoPedroIsaac/Team3Steps-Backend.git
   ```
2. Install dependencies: 
    ```bash
   npm install
    ```
3. Add `.env` file at the project root with the variables including database connection and port
    ```bash
   PORT=4000
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=SCHEMA"
   ```
4. Run prisma/database migrations: 
    ```bash
   npm run prisma:migrate
   ```
5. Start the development server
    ```bash
    npm run dev
    ```

## Contributors
1. [Egide Harerimana](https://github.com/degide) <h.egide@alustudent.com>