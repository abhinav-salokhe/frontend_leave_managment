# 🖥️ Leave Management Frontend

This is the **frontend application** for the Leave Management System, built with **React** and **Vite**. It provides the user interface for employees to authenticate, request leaves, and manage data by communicating with the backend API.

---

## 🚀 Features

- React 18 with Vite for fast development and build
- Client-side routing with React Router DOM
- API communication using Axios
- Tailwind CSS for styling
- Environment-based configuration for backend API URL
- Responsive UI

---

## 🛠️ Tech Stack

- React 18
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- ESLint for linting

---

## 📂 Project Structure

frontend/
│
├── public/ # Public assets and index.html
├── src/
│ ├── components/ # React components
│ ├── pages/ # React pages/views
│ ├── routes/ # Route definitions
│ ├── services/ # API service files (Axios)
│ ├── styles/ # Tailwind and CSS files
│ └── main.jsx # React entry point
│
├── vite.config.js # Vite config
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md

---

## ⚙️ Environment Variables

Create a `.env` file in your frontend root with:

VITE_BACKEND_URL=https://your-backend-url.onrender.com


Make sure to use `VITE_` prefix for environment variables in Vite.

---

## 📦 Installation & Usage

### 1️⃣ Clone the repository
git clone https://github.com/your-username/frontend-leave-management.git
cd frontend


### 2️⃣ Install dependencies
npm install


### 3️⃣ Run locally for development
npm run dev


### 4️⃣ Build for production
npm run build


---

## 🌐 Deployment on Render.com

- Create a **Static Site** on Render.
- Connect your frontend GitHub repo.
- Set **Build Command:** `npm run build`
- Set **Publish Directory:** `dist`
- Add environment variable `VITE_BACKEND_URL` with your deployed backend URL.
- Add a rewrite rule for client-side routing:
  - Source: `/*`
  - Destination: `/index.html`
  - Action: `Rewrite`

---

## 👨‍💻 Author

**Abhinav Salokhe**  
🔗 [GitHub](https://github.com/abhinav-salokhe)

---

## 📜 License

This project is licensed under the MIT License.

