# 📱Instagram React Clone⚛️ 

This React version is an evolution of a previous static HTML/CSS Instagram clone, available at `https://github.com/ClaraDev01/Projeto-Instagram`
It has been rewritten using React components and includes the new requirements of the current project.


## 🚀 Technologies Used

- **React** (using `create-react-app`) — Main framework for component-based architecture
- **JavaScript** — Logic, state handling, and interactive behavior
- **HTML5** — Markup and structure
- **CSS3** — Styling and layout
- **Git & GitHub** — Version control and deployment

## 🎯 *Requirements Met*

- ✅ Created with:
    ```
    npx create-react-app project-name --template @driven-education/cra-template
    ```
    ensuring `package.json` and `package-lock.json` are in the root directory.
- ✅ Proper componentization:
    - Stories, Posts, and Suggestions are rendered from **object arrays** using `.map()`.
- ✅ Dynamic user interactions:
    - Change username via a prompt.
    - Change profile picture via a prompt.
    - Save and unsave posts by clicking the save icon.
    - Like and unlike posts by clicking the heart icon.
    - Click the post image itself to like it.
    - Likes counter increases or decreases based on user interaction.
    - Each post maintains its own state (no global state for likes/saves).
- ✅ **Correct Project Structure**:
    - All images reside in `public/assets`.
    - All components reside within `src/components`.
    - Styles reside in `public`.
- ✅ No mobile layout required — desktop layout only.
- ✅ Pure React syntax with componentization, making future enhancements and maintenance seamless.

## 📌 Project Structure

```
📂 Projeto-Instagram-React
├── 📄 .gitignore
├── 📄 package.json
├── 📄 package-lock.json
├── 📂 public
│   ├── 📄 index.html
│   ├── 📄 reset.css
│   ├── 📄 style.css
│   └── 📂 assets
│        └── 📂 img
│            ├── 📄 9gag.svg
│            ├── 📄 adorable_animals.svg
│            ├── 📄 bad_vibes.memes.svg
│            ├── 📄 barked.svg
│            ├── 📄 catanacomics.svg
│            ├── 📄 chibirdart.svg
│            ├── 📄 dog.svg
│            ├── 📄 filomoderna.svg
│            ├── 📄 gato-telefone.svg
│            ├── 📄 logo.png
│            ├── 📄 memenagourmet.svg
│            ├── 📄 meowed.svg
│            ├── 📄 nathanwpylestrangepian.svg
│            ├── 📄 razoesparaacreditar.svg
│            ├── 📄 respondeai.svg
│            ├── 📄 smallcutecats.svg
│            ├── 📄 stories_background.jpg
│            ├── 📄 story-circle.svg
│            └── 📄 wawawicomics.svg
├── 📂 src
│   ├── 📄 App.js
│   ├── 📄 Body.js
│   ├── 📄 index.js
│   ├── 📄 NavBar.js
│   ├── 📄 Posts.js
│   ├── 📄 SideBar.js
│   ├── 📄 Stories.js
│   ├── 📄 Suggestions.js
│   └── 📄 User.js
└── 📄 README.md

```
All images (logos, avatars, and icons) are stored in public/assets/img and used across components.

## 📝 *Code Language*

Component and file names are in English, while CSS class names, comments, variables, and functions are written in Portuguese for clarity and project requirements.

## ✨ How to Run/View the Project

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ClaraDev01/Projeto-Instagram-React.git
    ```
2. **Navigate into the project directory and install dependencies**:
    ```bash
    cd Projeto-Instagram-React
    npm install
    ```
3. **Run the development server**:
    ```bash
    npm start
    ```
    The app will be available at `http://localhost:3000`.

4. **Deploying to GitHub Pages (optional):**
    - Edit the `homepage` in `package.json`.
    - Run:
      ```
      npm run build
      npm run deploy
      ```
    - Access your app via the generated URL.

## 📌 *Future Improvements*

- 💬 Adding comments for posts.
- 🔔 Notifications for new interactions.
- 📱 Responsive layout for mobile devices.
- 👥 Multi-profile support and user authentication.

## 📜 *License*

This project is open-source, intended for educational and study purposes.

💻 *Developed by ClaraDev01*
