Below is an updated version of the **WeDraw README** with improvements for clarity, structure, and additional details based on the `package.json` file and the existing README. The update enhances the content with better formatting, additional sections for clarity, and more precise instructions, while maintaining the original structure and intent.

---

# 🎨 WeDraw

**WeDraw** is a real-time collaborative drawing web application that enables multiple users to sketch, create, and brainstorm on a shared canvas in real time. Whether you're part of a remote team, a classroom, or a group of creative friends, WeDraw makes collaborative drawing seamless, intuitive, and fun—like Google Docs, but for sketching!

---

## 🌟 Features

- **Real-time Collaboration**: Draw together with others instantly using Liveblocks.
- **User Authentication**: Secure sign-up and sign-in powered by Clerk.
- **Responsive UI**: Beautiful, accessible interface built with Shadcn UI, Radix UI, and Tailwind CSS.
- **Theming**: Light and dark mode support with Next Themes.
- **Persistent Data**: Store drawings and metadata with Convex backend.
- **Interactive Components**: Modals, tooltips, avatars, and drawers for a polished user experience.
- **Mobile-Friendly**: Responsive design with drawer support via Vaul.

---

## 🧠 Tech Stack

WeDraw leverages a modern, robust tech stack for a seamless full-stack experience:

| Layer            | Technologies                                                                 |
|------------------|------------------------------------------------------------------------------|
| **Frontend**     | [Next.js](https://nextjs.org) (v14.1.0), [React](https://react.dev) (v18), [Tailwind CSS](https://tailwindcss.com) (v3.3.0) |
| **Real-time**    | [Liveblocks](https://liveblocks.io) (v1.12.0), [Zustand](https://zustand-demo.pmnd.rs) (v4.5.2) |
| **Authentication** | [Clerk](https://clerk.dev) (v4.29.7) with custom themes (v1.7.9)            |
| **Backend**      | [Convex](https://convex.dev) (v1.12.1) with helpers (v0.1.41)               |
| **UI Components** | [Shadcn UI](https://ui.shadcn.com) (v0.8.0), [Radix UI](https://www.radix-ui.com/) (Alert Dialog, Avatar, Dialog, Dropdown, Tooltip, Slot), [Lucide Icons](https://lucide.dev) (v0.336.0) |
| **Forms & Validation** | [Formik](https://formik.org) (v2.4.6), [Zod](https://zod.dev) (v3.23.8) |
| **Utilities**    | [Sonner](https://sonner.emilkowal.ski) (v1.4.41), [usehooks-ts](https://usehooks-ts.com) (v3.0.1), [Nanoid](https://github.com/ai/nanoid) (v5.0.7), [Date-fns](https://date-fns.org) (v3.6.0), [Query-string](https://github.com/sindresorhus/query-string) (v9.0.0), [Vaul](https://vaul.emilkowal.ski) (v0.9.1) |
| **Styling**      | [Tailwind Merge](https://github.com/dcastil/tailwind-merge) (v2.2.1), [Class Variance Authority](https://cva.style) (v0.7.0), [Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate) (v1.0.7) |

---

## 🚀 Getting Started

Follow these steps to run **WeDraw** locally on your machine:

### 1. ✅ Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20 or above recommended, as per `@types/node:^20`)
- [npm](https://www.npmjs.com/) (included with Node.js)
- [Git](https://git-scm.com/) (optional, for cloning the repository)
- A code editor like [VS Code](https://code.visualstudio.com/)

### 2. 📂 Clone the Repository

```bash
git clone https://github.com/lukmaann/wedraw.git
cd wedraw
```

### 3. 📦 Install Dependencies

```bash
npm install
```

This installs all dependencies listed in `package.json`, including Next.js, Liveblocks, Clerk, Convex, and UI libraries.

### 4. 🔑 Configure Environment Variables

Create a `.env.local` file in the project root and add the required environment variables for Clerk, Liveblocks, and Convex. Example:

```env
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/createroom
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/createroom
```

Obtain these keys from:
- [Clerk Dashboard](https://dashboard.clerk.dev/)
- [Liveblocks Dashboard](https://liveblocks.io/dashboard)
- [Convex Dashboard](https://dashboard.convex.dev/)

### 5. 🚀 Run the Development Server

```bash
npm run dev
```

This starts the app at `http://localhost:3000`. Open this URL in your browser to use WeDraw.

### 6. 🛠️ Build for Production

To create a production build and start the server:

```bash
npm run build
npm run start
```

### 7. ✅ Lint the Code

Check for code quality issues using ESLint:

```bash
npm run lint
```

---

## 🛠️ Development Notes

- **TypeScript**: The project uses TypeScript for type safety. Ensure your editor supports TypeScript for the best development experience.
- **ESLint**: Configured with `eslint-config-next` for Next.js-specific linting rules.
- **Tailwind CSS**: Styles are managed with Tailwind CSS and PostCSS. Customize styles in `tailwind.config.js`.
- **Liveblocks**: Ensure you have a Liveblocks account and valid API keys for real-time collaboration.
- **Clerk**: Authentication requires Clerk API keys. Set up Clerk for user management.
- **Convex**: The backend uses Convex for data storage. Configure your Convex project and deploy the schema.

---

## 🐛 Reporting Issues

Found a bug? Have a feature request? Open an issue on the [GitHub Issues page](https://github.com/lukmaann/wedraw/issues).

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a pull request on the [WeDraw repository](https://github.com/lukmaann/wedraw).

---

## 📜 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC). See the `LICENSE` file for details.

---

## 🙌 Acknowledgments

- Built with ❤️ using [Next.js](https://nextjs.org/) and [Liveblocks](https://liveblocks.io/).
- UI components powered by [Shadcn UI](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/).
- Icons from [Lucide](https://lucide.dev/).

---

## 📬 Contact

For questions or feedback, reach out via the [GitHub repository](https://github.com/lukmaann/wedraw) or file an issue.

---

### **Changes Made in the Update**
1. **Enhanced Features Section**: Added a clear list of features to highlight WeDraw’s capabilities (e.g., real-time collaboration, theming, mobile support).
2. **Updated Tech Stack**: Included specific versions from `package.json` and added links to utility libraries for clarity.
3. **Improved Setup Instructions**:
   - Added a step for configuring environment variables (`.env.local`) for Clerk, Liveblocks, and Convex.
   - Specified Node.js version (v20) based on `@types/node:^20`.
   - Clarified browser URL (`http://localhost:3000`).
4. **Added Development Notes**: Included tips for TypeScript, ESLint, and configuration for Tailwind, Liveblocks, and Convex.
5. **Contributing Section**: Added a clear guide for contributing to the project.
6. **License and Acknowledgments**: Formalized the license reference and added acknowledgments for key technologies.
7. **Improved Formatting**: Used consistent markdown formatting (e.g., tables, headers, code blocks) for readability.
8. **Contact Section**: Added a contact section for clarity on how to reach out.

This updated README is more comprehensive, user-friendly, and aligned with the project’s `package.json`. If you need further tweaks (e.g., adding a screenshot, specific feature details, or a demo link), let me know!
