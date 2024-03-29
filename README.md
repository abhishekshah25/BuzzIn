![Screenshot 2024-02-07 00 34 48](https://github.com/abhishekshah25/BuzzIn/assets/147745895/06912171-854b-4d40-8b22-58e373d03635)


Welcome to BuzzIn! 

This document provides an overview of the application's architecture, functionality, and deployment details.

Functionality:-

BuzzIn provides the following functionality:

1. User Authentication: Users can sign up, log in, and log out of their accounts securely.
2. Post Creation and Interaction: Users can create new posts, like posts, comment on posts, and share posts with other users.
3. User Profiles: Each user has a profile page displaying their information, posts, and followers/following.
4. Search Functionality: Users can search for other users, posts, or topics using the search feature.
5. Real-time Updates: The application provides real-time updates for new posts, likes, comments, and follows using WebSocket connections.


Architecture:-

Frontend (React)

Key Features:

1. React Components - Modular components are used to structure the user interface and manage state.
2. React Router - Navigation within the application is handled using React Router for seamless page transitions.
3. Axios - Axios is utilized for making HTTP requests to the backend API endpoints.

Backend (MirageJS)

Key Features:

1. Routes and Controllers - MirageJS provides a way to define routes and controllers to handle HTTP requests.
2. Data Models - MirageJS allows us to define data models and seed the mock database with sample data for testing purposes.
3. Middleware - Middleware functions can be implemented to intercept and modify requests and responses.

Deployment (Vercel)

Key Features:

1. Automatic Deployments - Changes pushed to the GitHub repository trigger automatic deployments on Vercel, ensuring the latest version of the application is always live.
2. Environment Variables - Vercel supports environment variables for configuring application settings and API endpoints.
3. Custom Domains - Custom domains can be configured to point to the deployed application for a branded experience.
