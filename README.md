# SPARK ⚡

## 📔 About

<b>SPARK</b>: Smart Programming Assistant for Refactoring and Knowledge.
An intelligent code refactoring tool that elevates your code quality through AI-powered analysis.

## ✨ Key Features

- Smart code refactoring suggestions.
- In-depth code explanations.
- Best practices recommendations.
- Intelligent code analysis.

## 🛠️ Built With

[![React][React-badge]][React-url] [![Next.js][Next.js-badge]][Next.js-url] [![Tailwind CSS][Tailwind-badge]][Tailwind-url]

[React-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Next.js-badge]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white
[Next.js-url]: https://nextjs.org/
[Tailwind-badge]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone [your-repository-url]
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Frontend Setup

1. Start the UI development server:

   ```bash
   npx nx serve ui
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

### Backend Setup

1. Start the backend server:

   ```bash
   npx nx serve backend
   ```

2. The API will be available at:
   ```
   http://localhost:3000
   ```

> **Note:** Make sure to have both frontend and backend running simultaneously for full functionality.

### Environment Setup

1. Create the following `.env` files:

   **Frontend (.env)**

   ```plaintext
   VITE_API_URL=YOUR_API_URL
   ```

   **Backend (.env)**

   ```plaintext
   OPENAI_API_KEY=YOUR_OPENAI_API_KEY
   ```

2. Place these files in their respective directories:
   - Frontend: `/apps/ui/.env`
   - Backend: `/apps/backend/.env`

> **Note:** These files contain sensitive information and should not be committed to version control.

## 🔮 Future Features

- Add a chat interface for real-time code assistance.
> Use synchronous requests to deliver quick responses, displaying them in the chat interface.
> And making the interface styled so it be more clear and user-friendly.
- Implement a code editor with syntax highlighting and error detection.
> Use the code editor from the [Monaco Editor](https://microsoft.github.io/monaco-editor/) library. 
- Visualization of the code refactoring process.
> Use the [Mermaid](https://mermaid.js.org/) library to visualize the code refactoring process.
- Improve the visual design of the UI, including the chat interface.
> Enhance the user experience through Tailwind CSS utility classes, implement a cohesive color palette, and ensure responsive design across all devices.

