# 🎬 MovieApp

A modern movie browsing web application built with React that allows users to explore movies, search and filter movie listings, manage a personal wishlist, and authenticate using predefined user credentials.

## 🚀 Features

### User Authentication

- Login functionality using predefined user credentials.
- User data is managed through the `users.js` file located in the `src/data` folder.
- Basic client-side authentication for demonstration purposes.

### Movie Browsing

- View a complete list of available movies on the Home page.
- Search movies by title.
- Filter movies based on available categories or criteria.
- Responsive and user-friendly interface.

### Wishlist Management

- Add movies to a personal wishlist.
- Remove movies from the wishlist.
- Wishlist state is maintained during the session.

### Data Management

- Movie information is stored in the `movies.js` file.
- User credentials are stored in the `users.js` file.

---

## 🛠️ Technologies Used

- React.js
- React Router
- JavaScript (ES6+)
- HTML5
- CSS3

---

## 📂 Project Structure

```text
MovieApp/
│
├── src/
│   ├── components/
        ├── Moviecard/
            ├── Moviecard.jsx
            └── moviecard.css
        ├── Moviemodal/
            ├── Moviemodal.jsx
            └── moviemodal.css
        ├── Navbar/
            ├── Navbar.jsx
            └── Navbar.css
        ├── ProtectedRoute/
            └── ProtectedRoute.jsx
│   ├── pages
        ├──Home/
        ├──Login/
        └──Watchlist/
│   ├── data/
│   │   ├── movies.js
│   │   └── users.js
    ├── service/
        ├── movieApi.js
│   │   └── authApi.js
    ├── redux/
        ├── store.js
│   │   └── watchlistSlice.js
│   └── App.js
│
├── public/
├── package.json
└── README.md
```

---

## 👤 Demo Login Credentials

Use any of the following credentials to access the application:

### Admin User

```text
Email: admin@gmail.com
Password: admin123
```

### Regular User

```text
Email: mrunal@gmail.com
Password: mrunal123
```

---

## 🎥 Movie Data

All movie information is maintained inside:

```text
src/data/movies.js
```

To add, update, or remove movies, modify the data in this file.

---

## 👥 User Data

All user credentials are maintained inside:

```text
src/data/users.js
```

To add a new user, append a new user object to the users array.

Example:

```javascript
{
  email: "newuser@gmail.com",
  password: "password123"
}
```

---

## ⚙️ Installation and Setup

### Prerequisites

Make sure the following are installed on your system:

- Node.js (v16 or above recommended)
- npm (comes with Node.js)

Verify installation:

```bash
node -v
npm -v
```

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/<your-username>/MovieApp.git
```

### Step 2: Navigate to Project Directory

```bash
cd MovieApp
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start Development Server

```bash
npm run dev
```

The application will start locally and open in your browser.

If it does not open automatically, visit:

```text
http://localhost:5127
```

---

## 🚀 Build for Production

Create an optimized production build:

```bash
npm run build
```

The production-ready files will be generated inside the `build` folder.

---

## 📄 License

This project is developed for learning and demonstration purposes.
