# 🎬 QuickShow – Movie Booking App
🌐 **Live Demo**: [https://quickshow-delta-rose.vercel.app/](https://quickshow-delta-rose.vercel.app/)

## Overview
A full-stack movie booking platform where users can sign up, browse the latest movies via TMDB, select their preferred showtimes and seats, securely complete payments through Stripe, and instantly receive confirmation emails. Admins get access to a powerful dashboard to manage movies and show schedules — all wrapped in a sleek, user-friendly interface.

---

## 📌 Features

- 🔐 **User Authentication** using **Clerk** – Only registered users can book shows.
- 🎥 **Live Movie Data** – Movies are fetched from **TMDB (The Movie Database) API**.
- 🪑 **Seat Selection** – Users can choose their own seats for the show.
- 💳 **Stripe Payment Integration** – Secure payment processing via Stripe.
- 📧 **Booking Confirmation Email** – Sent to users immediately after a successful booking using **Nodemailer + Inngest**.
- 🛡️ **Admin Dashboard** – Only users with the `admin` role (assigned via Clerk) can:
  - Add new movies
  - Create shows
  - Access admin-specific pages
- 🚀 **Deployed on Vercel**

## 🛠️ Tech Stack

### Frontend:
- **React.js**
- **Tailwind CSS**
- **React Router DOM**
- **Axios**
- **Vercel** (Deployment)

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **TMDB API** (for fetching movies)
- **Stripe** (for payments)
- **Nodemailer + Brevo SMTP** (for email service)
- **Inngest** (for event handling and triggering email after booking)
- **Clerk** (Authentication & Role-based Authorization)
- **Cloudinary** (for storing images, if used in admin movie creation)

---


## 📦 Installation & Setup (Local Development)

# Clone the repository
git clone https://github.com/deepesh2596/project-quickshow.git
cd quickshow

# Install dependencies for backend
cd server
npm install

# Create a .env file and add the necessary environment variables
touch .env

# Example .env content

- MONGODB_URI= your_mongodb_connection_string
- CLERK_SECRET_KEY= your_clerk_secret
- CLERK_PUBLISHABLE_KEY= your_clerk_publishable
- INNGEST_EVENT_API_KEY= your_inngest_event_key
- INNGEST_SIGNING_KEY= your_inngest_signing_key
- TMDB_API_KEY= your_tmdb_api_key
- STRIPE_SECRET_KEY= your_stripe_secret
- STRIPE_PUBLISHABLE_KEY= your_stripe_publishable_key
- STRIPE_WEBHOOK_SECRET= your_stripe_webhooksecret
- SENDER_EMAIL= your_email@example.com
- SMTP_USER= your_smtp_user
- SMTP_PASS= your_smtp_password
- VITE_CURRENCY= your_vite_currency
- VITE_BASE_URL=http://localhost:3000
- VITE_TMDB_IMAGE_BASE_URL= your_tmdb_image_base_url


# Start backend server
npm run dev

# Go to frontend
cd ../client
npm install

# Start frontend
npm run dev

---

✅ Admin Access
- Admin access is not granted by default.
- You must assign the admin role to a user's email manually through the Clerk dashboard.

📩 Booking Confirmation Flow
- User books a movie and selects seats.
- They are redirected to Stripe for payment.
- After successful payment:
-- An Inngest event is triggered (app/show.booked).
-- A confirmation email is sent to the user's registered email via Nodemailer.

🙌 Acknowledgements
Huge thanks to the dev community and open-source contributors for making tools like Clerk, Inngest, and TMDB available.

📬 Contact
Developer: Deepesh Chauhan
Email: deepesh2596@gmail.com
LinkedIn: linkedin.com/in/deepesh-chauhan

🏁 Final Notes
QuickShow is a modern, production-ready, full-stack project built to demonstrate real-world features like:

Authentication
Role-based access
Event-driven emails
API integrations
Secure payments

It’s deployed live and ready to use — give it a try!


