# 🎭 Artistly – Performing Artist Booking Platform (Frontend Demo)

Artistly is a demo platform that connects event planners with talented performing artists like Singers, Dancers, DJs, and Speakers. This is a **frontend-only project** built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, powered by dummy JSON data.

---

## 📄 Key Pages (3–4 Main Pages)

### 1. 🏠 Homepage (`/`)

- Hero section with background image and call-to-action button
- 3–4 artist category cards (e.g., Singers, Dancers, DJs, Speakers)
- Navigation links to Artists, About, and Contact pages
- Responsive layout using Tailwind CSS

### 2. 📋 Artist Listing Page (`/artists`)

- Grid layout of artist cards with filtering controls
- Each artist card displays:
  - Name
  - Category
  - Price Range
  - Location
  - "Ask for Quote" CTA
- Filtering options include:
  - Category (dropdown)
  - Location (dropdown)
  - Price Range (min–max inputs)
- Uses reusable components:
  - `ArtistCard`
  - `FilterBlock`
- Fully responsive (Grid on desktop, List on mobile)

### 3. ✍️ Artist Onboarding Form (`/onboard`)

- Multi-section form to collect artist details:
  - Name
  - Bio
  - Category (multi-select with checkboxes)
  - Languages Spoken (multi-select with checkboxes)
  - Fee Range (dropdown)
  - Profile Image Upload (optional)
  - Location (text input)
- Form validation using **Formik + Yup**
- Submits data to a mock handler or logs to the console
- Uses controlled components and accessible UI

### 4. 📊 Manager Dashboard (Optional, `/dashboard`)

- Simple table displaying list of submitted artists
- Columns include:
  - Name
  - Category
  - Location
  - Fee Range
  - Action Button (e.g., View or Approve)

---

## 📎 Additional Pages

### 📖 About Page (`/about`)

- Short overview of the platform
- Can include a mission statement or founder info

### 📞 Contact Page (`/contact`)

- Simple contact form or details for support

### 🔐 Privacy Policy (`/privacy-policy`)

- Static page outlining privacy and data usage policy

### 📜 Terms & Conditions (`/terms`)

- Static page outlining terms of service and usage rules

---

## 🛠 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: Formik + Yup
- **State Management**: Context API (for auth/global state)
- **Routing**: App Router (`app/` directory)
- **Assets**: Static JSON data (for artists, categories, etc.)

---

## 🚀 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/your-username/artistly.git
cd artistly

# Install dependencies
npm install

# Run the development server
npm run dev

# Then visit
http://localhost:3000
```
