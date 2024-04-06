# 📣 Football League API

This is the API backend for the Football League application.

## 🛠️ Setup Instructions

Follow these steps to set up and run the API project locally:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd football-league-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Seeds

Run TypeORM seeds to populate database tables:

```bash
npm run db:seed
```

Clear tables:

```bash
npm run db:clear
```

### 4. Start the Server

Start the API server:

```bash
npm run dev
```

The API server should now be running on the specified port.

## 🚀 API Endpoints

- **GET /categories**: Retrieve all categories.
- **GET /notifications**: Retrieve all notifications.
- **POST /notifications**: Create a new notification.
