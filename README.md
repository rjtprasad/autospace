# AutoSpace Parking Application
![autospace_banner]([images/example.png](https://res.cloudinary.com/dnsk11q7u/image/upload/v1736314816/zg4dwa7y8tcrk6yof2jr.gif))
<img src="https://res.cloudinary.com/dnsk11q7u/image/upload/v1736314816/zg4dwa7y8tcrk6yof2jr.gif" alt="autospace_banner"/>

AutoSpace is comprehensive solution for managing parking, with features for both customers and parking facility managers, as well as a way for valets to manage their assignments.

## Overview
AutoSpace is a parking application built as a monorepo, encompassing four frontend applications:

- **Customer Application**: A customer facing web application for booking parking spots.
- **Manager Application**: An application for garage managers to manage their garages, bookings, and valets.
- **Valet Application**: An application for valets to manage their assignments.
- **Admin Application**: An application for administrators to manage the platform.

The application uses both REST and GraphQL APIs for data interaction. The REST API is also used for [API documentation](https://autospace-production.up.railway.app/rest), employing Swagger UI.

## Deployment
- **Customer Application**: https://autospace-web-sable.vercel.app/
- **Manager Application**: https://autospace-manager-rho.vercel.app/
- **Valet Application**: https://autospace-valet.vercel.app/
- **Admin Application**: https://autospace-admin.vercel.app/
- **Backend API**: https://autospace-production.up.railway.app/rest

## Key Features
- **Interactive 3D Scene**: The customer application features a 3D scene built with Three.js.
- **Geo, Date, and Type-Based Filtering**: Garages can be filtered based on location, date, vehicle type, price, and garage dimensions.
- **Real-time Slot Management**: Tracks available slots for each garage in real-time and prevents overbooking.
- **Valet Service Integration**: Features for booking valet services with pickup and drop-off location management.
- **Payment Service Integration**: A Stripe interface for payment processing.
- **User Authentication**: Supports user registration and login with both Google and email/password credentials.
- **Admin Panel**: An admin interface for verifying garages and managing admins.
- **Interactive Maps**: Uses Mapbox for displaying maps and directions.

## Technologies Used
### Frontend
- **Next.js**: For building the frontend applications.
- **React**: For building UI components.
- **Tailwind CSS**: For styling.
- **Headless UI**: For building UI components.
- **Material UI**: For additional UI components like range sliders.
- **React Map GL**: For interactive maps.
- **React Hook Form**: For form management.
- **Zod**: For schema validation.
- **Apollo Client**: For GraphQL data fetching.
- **React Toastify**: For toast notifications.

### Backend
- **NestJS**: For building the backend API.
- **GraphQL**: For API queries and mutations.
- **REST**: For API endpoints and documentation.
- **Prisma**: For database access.
- **PostgreSQL**: As the database.
- **JSON Web Tokens (JWT)**: For authentication.
- **NextAuth**: For handling user authentication.

### Monorepo Management
- **yarn**: For package management.
- **NX**: For running scripts and build caching.

### Other Tools
- **Docker**: For containerizing the database locally.
- **Railway**: For hosting the backend and database.
- **Vercel**: For hosting the frontend applications.
- **Cloudinary**: For image uploads.

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/rjtprasad/autospace.git
   cd autospace
   ```
2. **Install Dependencies**
    ```bash
   yarn install
   ```
3. **Set Up Environment Variables**
    - Create `.env` files in each application (e.g., `apps/api/.env`, `apps/web/.env`, `apps/web-manager/.env`, `apps/valy-web/.env`, `apps/web-admin/.env`).

    - Refer `.env.example` of each app for all the environment variables needed.

4. **Set Up the Database**
   - Use Docker Compose to start the PostgreSQL database locally:
        ```bash
        cd apps/api
        docker compose up -d
        ```
    - Apply database migrations using Prisma:
        ```bash
        yarn prisma migrate dev
        ```
5. **Run the Applications**
    - Start the back-end API:
        ```Bash
        cd apps/api
        yarn dev
        ```
    - Start the front-end applications (customer, manager, valet, admin):
        ```Bash
        cd apps/web
        yarn dev

        cd apps/web-manager
        yarn dev

        cd apps/web-valet
        yarn dev

        cd apps/web-admin
        yarn dev
        ```

6. **Access the Applications**
    * Customer Application: `http://localhost:3001`
    * Manager Application: `http://localhost:3002`
    * Valet Application: `http://localhost:3003`
    * Admin Application: `http://localhost:3004`
    * API: `http://localhost:3000`

7. **Configure Google Cloud Console**
    - In the Google Cloud Console, navigate to the Google Cloud Project where you created the credentials.
    - Go to the **Credentials** page.
    - Find the OAuth 2.0 Client ID you created for your application.
    - Click on the **Edit** button.
    - In the **Authorized redirect URIs** section, add the following URLs:
        * For Customer Application: `http://localhost:3001/api/auth/callback/google`
        * For Manager Application: `http://localhost:3002/api/auth/callback/google`
        * For Valet Application: `http://localhost:3003/api/auth/callback/google`
        * For Admin Application: `http://localhost:3004/api/auth/callback/google`
    - Save the changes.

**Note: This project requires further polish and UI/UX improvements.**

