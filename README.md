# 📣 Football League API

Welcome to the API backend for the Football League application.

## 🛠️ Setup Instructions

Follow these steps to set up and run the API project locally:

### 1. Navigate to the project folder

Clone this repository and navigate to the project folder

```bash
cd football-league-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setting up the Database

Alongside this folder, you'll find another folder for the database (`football-league-database`). Inside, there's a `docker-compose.yml` file that you can use to run the database. Execute the following command:

```bash
docker-compose up
```

If you need to clear the database, run the command below:

```bash
docker-compose down -v && docker-compose up
```

### 4. Add your API Token

To obtain an API Key, create an account [here](https://www.football-data.org/client/register). You'll receive an email with the API Key that you'll use to make requests.

There's an `.env.sample` file in the folder that you need to rename to `.env` and then edit by adding your own API Key.
Once this is done, you'll be able to run the project by following the next step.

### 5. Start the Server

Launch the API server:

```bash
npm run dev
```

The API server should now be running on port 8000.

## 🚀 API Queries and Mutations

Navigate to http://localhost:8000/graphql to be redirected to [Apollo Studio](https://studio.apollographql.com/sandbox/explorer). Here, you'll find the Schema Reference [here](https://studio.apollographql.com/sandbox/schema/reference).

## Developer Notes

Completing this code challenge has provided me with a deeper understanding of GraphQL and related concepts. I designed the database to accommodate various scenarios, such as teams participating in multiple competitions, players belonging to national teams or clubs, and coaches affiliated with a single club or team.

I implemented request rate limiting since it's a paid API with restrictions set to 10 requests per minute.

Additionally, I included some extra queries for enhanced functionality.

It's been a rewarding journey developing this project.