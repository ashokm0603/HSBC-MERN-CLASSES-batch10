# DMart E-Commerce Frontend 🛒

A modern, highly interactive, and visually stunning frontend application built for the DMart E-Commerce platform. This project emphasizes a premium user experience utilizing **Glassmorphism**, smooth **Framer Motion** animations, and **3D Tilt** effects to create a state-of-the-art interface.

---

## 🌟 Key Features

### User Interface & Experience
- **Premium Aesthetics:** Unified glassmorphism theme with sleek blur effects (`backdrop-filter`) and soft gradient palettes.
- **Dynamic Animations:** Staggered list rendering, spring hover effects, and smooth page transitions powered by `framer-motion`.
- **3D Interactions:** Product cards feature interactive 3D parallax effects responding to mouse movements via `react-parallax-tilt`.

### Core Pages
- **Landing Page (`/`)**: A welcoming hero banner, beautifully styled typography, and quick access to Authentication.
- **Admin Dashboard (`/admin-home`)**: A comprehensive control center featuring a sleek metrics layout and quick links to manage products and users.
- **Product Management**: 
  - **View Products (`/view-products`)**: Browse the catalog with a dynamic real-time search filter and staggered animated cards.
  - **Add/Edit Products**: Interactive forms to manage inventory. `EditProducts` includes real-time filtering.
  - **Delete Products (`/delete-product`)**: A modernized data table view with integrated filtering and deletion workflows.
- **Authentication**: Dedicated Login and Registration routes.

---

## 💻 Tech Stack

- **Framework:** [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Routing:** React Router v7
- **Styling:** Vanilla CSS (CSS Variables) & [React-Bootstrap](https://react-bootstrap.js.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Effects:** [React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 📂 Folder Structure

```text
E-commerce-frontend/
├── public/                 # Static assets (Favicon, etc.)
├── src/
│   ├── assets/             # Images and local media files
│   ├── components/         # Reusable UI Components
│   │   ├── AdminMain.jsx       # Admin Dashboard grid layout
│   │   ├── AdminNav.jsx        # Admin Navigation Bar
│   │   ├── AnimatedFooter.jsx  # Global Animated Footer
│   │   ├── LandingMain.jsx     # Landing Page Hero Section
│   │   ├── LandingNav.jsx      # Landing Page Navigation
│   │   └── landingstyle.css    # Core Component Styles
│   ├── pages/              # Application Routes/Views
│   │   ├── AddProducts.jsx     # Form to insert products
│   │   ├── AdminHome.jsx       # Admin Dashboard landing
│   │   ├── DeleteProducts.jsx  # Product Table with Filters
│   │   ├── EditProducts.jsx    # Editable Catalog with Filters
│   │   ├── LandingPage.jsx     # Main entry point 
│   │   ├── Login.jsx           # User authentication
│   │   ├── Register.jsx        # User registration
│   │   ├── Users.jsx           # User Management
│   │   └── ViewProducts.jsx    # Public Product Catalog
│   ├── App.jsx             # Main Router & Layout Wrapper
│   ├── main.jsx            # React Bootstrap & Entry Point
│   └── style.css           # Global Theme & CSS Variables
├── index.html              # HTML Shell & Fonts
├── package.json            # Dependencies & Scripts
├── vite.config.js          # Vite Bundler Configuration
└── README.md               # Project Documentation
```

---

## 🚀 Execution Steps

To run this frontend application locally, follow these steps:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) installed on your machine.
Ensure the Backend Server is running concurrently on `https://dmart-nextgen-backend.onrender.com`.

### 2. Installation
Clone the repository and install the required NPM dependencies:
```bash
# Navigate to the project directory
cd E-commerce-frontend

# Install dependencies
npm install
```

### 3. Start the Development Server
Run the Vite development server:
```bash
npm run dev
```

### 4. View in Browser
Open your browser and navigate to:
```text
http://localhost:5173
```

---

## 📸 Page Screenshots

*(Note: Replace the placeholder images below with actual screenshots of your application)*

### 1. Landing Page
![Landing Page](./public/screenshots/landing-page.png)
*Featuring the glassmorphic navigation and 3D parallax hero card.*

### 2. Admin Dashboard
![Admin Dashboard](./public/screenshots/admin-dashboard.png)
*Sleek, dark-mode inspired data presentation and management modules.*

### 3. View Products & Filtering
![View Products](./public/screenshots/view-products.png)
*Real-time search filtering with Framer Motion staggered card animations.*

### 4. Product Management (Edit/Delete)
![Delete Products Table](./public/screenshots/delete-products.png)
*Modernized data table with integrated filtering mechanics.*

---
*Developed with ❤️ using React & Vite.*
