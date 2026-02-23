

# 🎬 Movie Search Application - React.js

A high-performance **Movie Search Engine** built using **React.js**. This application allows users to browse through a vast database of movies, providing instant results with details such as posters, release years, and titles. It leverages a third-party REST API to deliver real-time data.

## 🌟 Key Features

* **Real-time Movie Search:** Users can search for any movie title and get instant results.
* **API Integration:** Fetches live data from the **OMDb API** (or TMDB) using asynchronous JavaScript.
* **Responsive Card Layout:** Uses a modern grid system to display movie posters and info, optimized for Mobile, Tablet, and Desktop.
* **Dynamic UI:** Implemented using React Hooks for seamless state transitions without page reloads.
* **Error Handling:** Robust handling for "Movie Not Found" scenarios and API fetch failures.

## 🛠️ Tech Stack

* **Frontend:** React.js (Functional Components)
* **State Management:** React `useState` and `useEffect` Hooks
* **Styling:** CSS3 (Custom Flexbox/Grid) & Bootstrap
* **Data Fetching:** Fetch API with `async/await`
* **API:** OMDb API / TMDB API

## 📂 Project Structure

```text
src/
├── components/
│   ├── MovieCard.jsx    # Reusable component for displaying movie info
│   ├── SearchBar.jsx    # Component to handle user input
│   └── Header.jsx       # App branding and navigation
├── App.js               # Core logic (State management & API calls)
├── App.css              # Custom styling for the movie grid
└── index.js             # Root entry point

```

## 🚀 Installation & Local Setup

1. **Clone the Repository:**
```bash
git clone https://github.com/Premkumar5861/Movies-Search-Application.git

```


2. **Navigate to Project Folder:**
```bash
cd Movies-Search-Application

```


3. **Install Dependencies:**
```bash
npm install

```


4. **Set up API Key:**
* Get a free API key from [OMDb API](https://www.omdbapi.com/).
* Create a `.env` file and add: `REACT_APP_API_KEY=your_key_here`


5. **Run the App:**
```bash
npm start

```



## 💡 Key Technical Learnings

* **Hooks Mastery:** Efficiently used `useEffect` to trigger API calls based on user search input.
* **Component Reusability:** Designed a single `MovieCard` component that can render thousands of different movie results.
* **Conditional Rendering:** Managed loading spinners and error messages based on the API response status.

---

**Developed by [Premkumar]** *Full Stack Web Development Project - GUVI*

---
