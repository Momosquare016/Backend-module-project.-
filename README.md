# FitBook

A fitness class booking app built with React and Firebase Firestore.

## Overview

FitBook lets users book fitness classes and manage those bookings with full create, read, update, and delete support, backed by a live Firestore database. It is a small learning and demo project built to practise React with Firebase and react-bootstrap.

## Features

- Create a new class booking
- Read and list all existing bookings
- Update an existing booking
- Delete a booking
- Real-time persistence with Firebase Firestore
- Clean, responsive UI with react-bootstrap

## Tech Stack

- React 19
- Firebase Firestore
- react-bootstrap and Bootstrap 5
- Create React App (react-scripts)

## Getting Started

### Prerequisites
- Node.js 18 or newer
- A Firebase project with Firestore enabled

### 1. Clone the repository
```bash
git clone https://github.com/Momosquare016/fitbook.git
cd fitbook
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Firebase
Add your own Firebase project's configuration in `src/firebase.js`, then make sure Firestore is enabled in the Firebase console.

### 4. Run the app
```bash
npm start
```

Then open http://localhost:3000 in your browser.

## Project Structure

- `src/components/BookingForm.js` handles creating and editing bookings
- `src/components/BookingList.js` lists all bookings
- `src/components/BookingCard.js` renders a single booking with edit and delete actions
- `src/firebase.js` initialises Firebase and exports the Firestore instance

## Author

Built by Muhammad Ali

LinkedIn: https://www.linkedin.com/in/muhammad-ali-r-35a9762b4
