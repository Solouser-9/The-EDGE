# The Edge

The Edge is a React-based education platform interface for tutors and students. It includes a role-selection entry point, account registration and verification screens, tutor onboarding steps, public content and shop pages, and dashboard views for managing classes and students.

The application is currently a client-side frontend. Form values and selected roles are handled in React state, with a small amount of registration data stored in `localStorage`. There is no backend or database integration in the current version.

## Tech Stack

- React 19
- Vite
- React Router DOM
- JavaScript and JSX
- CSS, including scoped CSS rules with `@scope`
- ESLint

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal, normally `http://localhost:5173`.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm run lint` | Run ESLint across the project. |

## Project Structure

```text
The-EDGE/
├── public/                 Static files served as-is
├── src/
│   ├── assets/             Imported image and SVG assets
│   ├── components/         Reusable UI components
│   │   ├── Footer.jsx      Public-page footer
│   │   ├── Logo.jsx        Shared logo component
│   │   ├── Nav.jsx         Public navigation
│   │   ├── Navbar.jsx      Dashboard navigation
│   │   └── PasswordField.jsx
│   ├── pages/              Route-level React page components
│   ├── styles/             Page and shared CSS files
│   ├── App.jsx             Router and route definitions
│   └── main.jsx            React application entry point
├── index.html              Vite HTML entry document
├── package.json            Scripts and dependencies
└── vite.config.js          Vite configuration
```

Each page imports the stylesheet it owns. Public pages share the `Nav` component, while dashboard pages share `Navbar`. The CSS is generally scoped to a page wrapper such as `.shop-page` or `.dashboard-page` so page styles do not leak into other routes.

## Application Routes

| Path | Page | Purpose |
| --- | --- | --- |
| `/` | Welcome | Select a Tutor or Student role. |
| `/home` | Landing page | Public home page. |
| `/about` | About | Public information page. |
| `/article` | Article | Public article/content page. |
| `/shop` | Shop | Product and feature listing. |
| `/product` | Product detail | Product details and related products. |
| `/signin` | Register | Create an account. |
| `/verification` | Verification | Continue the account verification flow. |
| `/onboarding` | Documents upload | Upload tutor identity and qualification documents. |
| `/availability` | Availability setup | Select a teaching mode and add availability notes. |
| `/login` | Login | Sign in to the platform. |
| `/successful` | Successful | Registration or setup success screen. |
| `/dashboard` | Dashboard | Tutor dashboard overview. |
| `/class` | My Classes | Manage classes. |
| `/student` | Students | Manage students. |

## How It Works

### Application startup

`src/main.jsx` mounts the React application into the `#root` element from `index.html`. `App.jsx` wraps the page routes in `BrowserRouter`, so navigation happens without full-page reloads.

### Public navigation

The public pages use `Nav.jsx`. It uses React Router `Link` components and receives an `active` prop from the page, for example:

```jsx
<Nav active="shop" />
```

The active link receives `nav-link-active`, while the shared CSS classes control layout, hover styling, and the selected green state.

### Registration and onboarding

1. The welcome page stores the selected role in `localStorage` and moves to `/signin`.
2. The registration page validates required fields, email format, matching passwords, and terms acceptance.
3. Valid registration data is stored in `localStorage` and the user is sent to `/verification`.
4. The onboarding page requires four document uploads before navigating to `/availability`.
5. The availability page requires a teaching mode before navigating to `/login`.

This is frontend-only flow control. The stored values are not sent to a server and should not be treated as secure authentication data.

### Dashboard navigation

Dashboard pages use `Navbar.jsx`. It uses `NavLink` so React Router automatically applies the active class to `/dashboard`, `/class`, and `/student`. The dashboard pages provide their own layout CSS while reusing the generic navigation class pattern.

## Demo Walkthrough

The live demo is available at [the-edge-three.vercel.app](https://the-edge-three.vercel.app/).

The demo stores registration details and the selected role in the browser's `localStorage`. Use a fresh browser session or clear the site's local storage before starting another walkthrough.

### Tutor walkthrough

1. Open the [live demo](https://the-edge-three.vercel.app/) and select **I am a Tutor**.
2. Select **Continue** to open the registration page.
3. Complete the required name, email, phone, password, confirmation, and terms fields.
4. Select **Sign Up** to open email verification.
5. Enter any six-digit numeric code to complete the frontend verification demo.
6. Select **Continue to Login**. Tutor accounts are sent to document onboarding.
7. Upload a file for each required document: government ID, academic certificate, Arabic or Islamic-related certificate, and profile photo.
8. Select **Next**, choose a teaching mode on the availability page, and select **Next** again.
9. Enter the same email and password used during registration and select **Log in**.
10. A valid Tutor login opens the dashboard, where the Dashboard, My Classes, and Students views are available.

### Student walkthrough

1. Open the [live demo](https://the-edge-three.vercel.app/) and select **I am a Student**.
2. Select **Continue** and complete the registration form.
3. Select **Sign Up**, then enter any six-digit numeric code on the verification page.
4. Select **Continue to Login**. Student accounts go directly to the login page and skip tutor document onboarding.
5. Enter the same email and password used during registration and select **Log in**.
6. A valid Student login opens the public home page.

The verification code is only checked in the browser for length and numeric content. It is not sent to or checked by a real email service.

## Deployment

The current deployment is hosted on Vercel:

[Open the deployed application](https://the-edge-three.vercel.app/)

The project is a Vite single-page application. A typical Vercel deployment workflow is:

1. Import the Git repository into Vercel.
2. Keep the framework preset as Vite or configure the build command as `npm run build`.
3. Set the output directory to `dist`.
4. Deploy the selected branch.
5. Vercel creates a preview deployment for pull requests and a production deployment for the configured production branch.

Because React Router handles client-side routes, production hosting must serve `index.html` as the fallback for application routes such as `/dashboard` and `/shop`.

## Development Workflow

1. Pull the latest changes and install dependencies with `npm install`.
2. Start the app with `npm run dev`.
3. Add or update a page component in `src/pages/`.
4. Import that page's stylesheet from `src/styles/`.
5. Add the route in `src/App.jsx`.
6. Reuse an existing shared component when the UI is common to multiple pages.
7. Run `npm run lint` to check JavaScript and JSX.
8. Run `npm run build` before committing to verify the production bundle.
9. Commit focused changes with a descriptive message and push the branch.

## Styling Conventions

- Keep page-specific rules inside the page's root scope, such as `@scope (.shop-page) { ... }`.
- Use generic class names for reusable components, such as `nav-menu`, `nav-link`, and `nav-link-active`.
- Keep layout and visual styles in CSS rather than duplicating them in JSX.
- Use inline styles only for values that are directly driven by component state, such as selected-step colors or validation opacity.
- Preserve the existing page wrapper so scoped selectors continue to match.

## Current Limitations

- There is no backend API, persistent database, or real authentication service.
- Uploaded documents remain in browser memory and are not uploaded to a server.
- Some public-page content and product data are placeholder content.
- Several image assets are loaded from external URLs.