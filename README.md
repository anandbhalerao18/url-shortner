# 🔗 URL Shortener Project

A simple and powerful full-stack **URL Shortener** built using **HTML, CSS, JavaScript, Node.js, and Express.js**. This app allows users to shorten long URLs, create custom short aliases, and track click statistics — all with a clean, responsive frontend.

---

## 🚀 Features

- ✅ Shorten long URLs automatically or with a **custom alias**
- 🔁 Redirect users to the original URL when visiting the short one
- 📊 Track and display the total number of clicks per short URL
- 💻 Frontend form to submit URLs and view shortened links
- 🗂️ Built using Express, plain JavaScript, and file-based storage (`urls.json`)

---

## 🖥️ Tech Stack

- **Frontend:** HTML, CSS, Vanilla JS
- **Backend:** Node.js, Express.js
- **Storage:** Local JSON file (can be upgraded to MongoDB)
- **Other:** `shortid` package for unique short codes

---

## 📁 Project Structure

The project is divided into a frontend (served from the `public` folder) and a backend (Node + Express). Here's the folder breakdown:

url-shortener-project/
├── server.js # Backend Express server for routing and logic
├── urls.json # JSON file used as a simple database to store URLs and click counts
├── package.json # Node.js project metadata and dependencies
├── public/ # Static frontend files
│ ├── index.html # Main HTML page with form for URL input
│ ├── style.css # Basic CSS styling for the UI
│ └── script.js # Client-side JavaScript for form handling and rendering output


---

## ⚙️ Installation & Setup

Follow these steps to run the project locally on your machine:

### 1. Clone the repository

```bash
git clone https://github.com/anandbhalerao18/url-shortner.git
cd url-shortner

### 2. Install project dependencies

Before running the project, make sure Node.js is installed on your system.

Use the following command to install the required npm packages:

```bash
npm install

### 3. Start the development server

Once dependencies are installed and the `urls.json` file is ready, start the backend server using:

```bash
node server.js
