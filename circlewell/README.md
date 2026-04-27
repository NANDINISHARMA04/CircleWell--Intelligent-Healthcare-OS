# CircleWell — Intelligent Healthcare OS

A premium, full-featured healthcare dashboard built with vanilla HTML/CSS/JS + Firebase.

## Pages Included

| Page | File | Description |
|------|------|-------------|
| Login / Signup | `index.html` | Auth with Firebase or demo mode |
| Dashboard | `pages/dashboard.html` | Stats, mood tracker, quick actions |
| Appointments | `pages/appointments.html` | Full CRUD booking system |
| Find Doctors | `pages/doctors.html` | Search & filter specialists |
| Medical Vault | `pages/records.html` | Upload & manage medical records |
| Health Analytics | `pages/analytics.html` | Vitals logging + Chart.js charts |
| Insurance | `pages/insurance.html` | Policies + claim filing |
| Family | `pages/family.html` | Multi-profile management |
| AI Assistant | `pages/ai.html` | Claude-powered health chatbot |
| Emergency | `pages/emergency.html` | Medical ID, contacts, SOS |
| Profile | `pages/profile.html` | Edit info, preferences, security |

## Firebase Setup (5 minutes)

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project → Add a Web App
3. Copy the config object and paste into `js/firebase.js`:

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

4. In Firebase Console → **Authentication** → Sign-in method → Enable **Email/Password**
5. In Firebase Console → **Firestore Database** → Create database (start in test mode)

### Firestore Collections Used

| Collection | Purpose |
|-----------|---------|
| `users` | User profiles |
| `appointments` | Appointment records |
| `records` | Medical vault files |
| `vitals` | Health vitals logs |
| `moods` | Daily mood entries |
| `insurance_policies` | Insurance policies |
| `insurance_claims` | Filed claims |
| `family_members` | Family profiles |
| `emergency_contacts` | Emergency contacts |
| `emergency_tokens` | Temporary share tokens |

### Activating Firebase in each page

Each page has Firebase calls commented out. To activate:
1. Uncomment the `import` line at the top of each page's `<script type="module">`
2. Uncomment each `// Firebase:` line
3. Replace `localStorage` calls with the Firestore helpers

### AI Assistant Setup

The AI page uses the Claude API. The API key is handled server-side by Anthropic.
- No additional setup needed if using via claude.ai artifacts
- For standalone deployment, add a backend proxy to protect your API key

## Running Locally

Just open `index.html` in a browser — no build step needed.

For best results use a local server:
```bash
npx serve .
# or
python -m http.server 8080
```

## Design System

- **Fonts**: Fraunces (display) + DM Sans (body)
- **Colors**: Deep navy + sage green + gold accents
- **Theme**: Luxury Medical — dark, precise, trustworthy
- **CSS Variables**: All defined in `css/style.css` under `:root`

## Data Flow

```
Demo mode → localStorage (no setup needed)
     ↓
Firebase mode → Firestore (uncomment Firebase lines)
```

All pages work fully in demo mode with realistic seed data.
localStorage is used as the persistence layer until Firebase is configured.
