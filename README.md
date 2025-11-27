# TodoL - Task Management Application

A modern and efficient task management application built with MERN stack.

## Tech Stack

### Backend

- **Runtime:** Node.js
- **Database:** MongoDB
- **API:** RESTful API

### Frontend

- **Framework:** React.js
- **UI Library:** Ant Design
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **HTTP Client:** Axios

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/nghiahd147/TodoL.git
cd todoL
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd todo

# Install dependencies
yarn

# Create .env file and configure environment variables
cp .env.example .env

# Start the server
yarn start
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd web-admin

# Install dependencies
yarn

# Start the development server
yarn start
```

## Environment Variables

### Backend (.env)

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todol
NODE_ENV=development
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

## Running the Application

### Development Mode

```bash
# Backend
cd todo
yarn start

# Frontend
cd web-admin
yarn start
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
