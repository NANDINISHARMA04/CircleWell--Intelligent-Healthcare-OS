# CircleWell--Intelligent-Healthcare-OS
A premium, full-featured healthcare dashboard built with vanilla HTML, CSS, and JavaScript, powered by Firebase for real-time data and authentication. CircleWell is designed as a modern, all-in-one healthcare platform — combining medical records, appointments, analytics, and AI assistance into a clean, luxury-grade interfac# 🩺 CircleWell — Intelligent Healthcare OS

A premium, full-featured healthcare dashboard built with **vanilla HTML, CSS, and JavaScript**, powered by **Firebase** for real-time data and authentication.

CircleWell is designed as a **modern, all-in-one healthcare platform** — combining medical records, appointments, analytics, and AI assistance into a clean, luxury-grade interface.

---

## ✨ Features Overview

* 🔐 Secure Authentication (Firebase + Demo Mode)
* 📊 Health Dashboard with real-time insights
* 📅 Appointment Booking System (Full CRUD)
* 👨‍⚕️ Doctor Discovery & Filtering
* 📁 Medical Records Vault (Upload & Manage)
* 📈 Health Analytics with Charts
* 🛡 Insurance Tracking & Claims
* 👨‍👩‍👧 Family Profile Management
* 🤖 AI Health Assistant
* 🚨 Emergency Access & SOS
* 👤 User Profile & Preferences

---

## 📄 Pages Included

| Page             | File                      | Description                     |
| ---------------- | ------------------------- | ------------------------------- |
| Login / Signup   | `index.html`              | Firebase auth or demo access    |
| Dashboard        | `pages/dashboard.html`    | Health stats, mood tracker      |
| Appointments     | `pages/appointments.html` | Book, edit, cancel appointments |
| Find Doctors     | `pages/doctors.html`      | Search specialists              |
| Medical Vault    | `pages/records.html`      | Upload & manage records         |
| Health Analytics | `pages/analytics.html`    | Vitals tracking + charts        |
| Insurance        | `pages/insurance.html`    | Policies & claims               |
| Family           | `pages/family.html`       | Multi-user profiles             |
| AI Assistant     | `pages/ai.html`           | Smart health chatbot            |
| Emergency        | `pages/emergency.html`    | SOS + medical ID                |
| Profile          | `pages/profile.html`      | Settings & account              |

---

## ⚡ Quick Start

### Run Locally

No build tools required — it's fully static.

```bash
# Option 1
npx serve .

# Option 2
python -m http.server 8080
```

Or simply open:

```
index.html
```

---

## 🔥 Firebase Setup (5 Minutes)

1. Go to Firebase Console
2. Create a new project → Add a Web App
3. Copy your config and paste into:

```
js/firebase.js
```

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

### Enable Services

* **Authentication → Sign-in Method → Enable Email/Password**
* **Firestore Database → Create Database (Start in test mode)**

---

## 🗂 Firestore Structure

| Collection           | Purpose          |
| -------------------- | ---------------- |
| `users`              | User profiles    |
| `appointments`       | Appointment data |
| `records`            | Medical files    |
| `vitals`             | Health logs      |
| `moods`              | Mood tracking    |
| `insurance_policies` | Insurance info   |
| `insurance_claims`   | Claims           |
| `family_members`     | Linked profiles  |
| `emergency_contacts` | Contacts         |
| `emergency_tokens`   | Secure sharing   |

---

## 🔄 Switching from Demo → Firebase

By default, the app runs in **Demo Mode** using `localStorage`.

To enable Firebase:

1. Open each page
2. Uncomment:

   * `import` statements
   * Lines marked `// Firebase:`
3. Replace `localStorage` logic with Firestore helpers

---

## 🤖 AI Assistant Setup

* Powered by Claude API
* API key handled **server-side**
* No setup needed in demo environment

### For Production:

* Add a backend proxy (Node.js / serverless)
* Never expose API keys in frontend

---

## 🎨 Design System

* **Fonts**: Fraunces (headings), DM Sans (body)
* **Theme**: Luxury Medical UI
* **Palette**:

  * Deep Navy
  * Sage Green
  * Gold Accents

All styles are managed via:

```
css/style.css
```

Using CSS variables under `:root`.

---

## 🔁 Data Flow

```
Demo Mode → localStorage
         ↓
Firebase Mode → Firestore
```

* Fully functional without setup
* Seamless upgrade to cloud backend

---

## 📌 Tech Stack

* HTML5
* CSS3 (Custom Properties)
* Vanilla JavaScript (ES Modules)
* Firebase (Auth + Firestore)
* Chart.js

---

## 🚀 Deployment

You can deploy easily on:

* Netlify
* Vercel
* Firebase Hosting
* GitHub Pages

---

## 🛡 Security Notes

* Never expose API keys in frontend
* Use Firestore rules for access control
* Add backend for AI requests in production

---

## 💡 Future Enhancements

* Telemedicine video integration
* Prescription management
* Wearable device sync (Fitbit, Apple Health)
* Role-based dashboards (Doctor/Admin)
* Multi-language support

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

## 👨‍💻 Author

Built as a modern healthcare experience prototype combining **design + functionality + scalability**.

---

## ⭐ If you like this project

Give it a star and share your feedback — it helps improve and evolve the platform!


