# UIDesigner

A React application for UI design and prototyping.

## Prerequisites

Before setting up this project, you'll need to install the following software:

### Required Software
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)
- **Code Editor** (VS Code recommended)

---

## Setup Instructions

### For Windows Users

#### Step 1: Install Node.js and npm
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS version** (Long Term Support)
3. Run the installer and follow the setup wizard
4. Accept all default settings
5. Verify installation by opening **Command Prompt** and running:
   ```cmd
   node --version
   npm --version
   ```

#### Step 2: Install Git
1. Go to [git-scm.com](https://git-scm.com/)
2. Download Git for Windows
3. Run the installer with default settings
4. Verify installation:
   ```cmd
   git --version
   ```

#### Step 3: Install a Code Editor (Optional but Recommended)
1. Download [Visual Studio Code](https://code.visualstudio.com/)
2. Install with default settings
3. Recommended extensions:
   - ES7+ React/Redux/React-Native snippets
   - Prettier - Code formatter
   - Auto Rename Tag
   - Bracket Pair Colorizer

#### Step 4: Clone and Setup the Project
1. Open **Command Prompt** or **PowerShell**
2. Navigate to your desired directory:
   ```cmd
   cd C:\Users\YourUsername\Documents
   ```
3. Clone the repository:
   ```cmd
   git clone [repository-url]
   cd UIDesigner
   ```
4. Install dependencies:
   ```cmd
   npm install
   ```
5. Start the development server:
   ```cmd
   npm start
   ```

---

### For Mac Users

#### Step 1: Install Node.js and npm
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS version** (Long Term Support)
3. Run the .pkg installer and follow the setup wizard
4. Verify installation by opening **Terminal** and running:
   ```bash
   node --version
   npm --version
   ```

**Alternative: Install using Homebrew (if you have it)**
```bash
brew install node
```

#### Step 2: Install Git
Git comes pre-installed on macOS, but you can update it:

**Using Homebrew:**
```bash
brew install git
```

**Or download from:** [git-scm.com](https://git-scm.com/)

Verify installation:
```bash
git --version
```

#### Step 3: Install a Code Editor (Optional but Recommended)
1. Download [Visual Studio Code](https://code.visualstudio.com/)
2. Move the app to your Applications folder
3. Recommended extensions:
   - ES7+ React/Redux/React-Native snippets
   - Prettier - Code formatter
   - Auto Rename Tag
   - Bracket Pair Colorizer

#### Step 4: Clone and Setup the Project
1. Open **Terminal**
2. Navigate to your desired directory:
   ```bash
   cd ~/Documents
   ```
3. Clone the repository:
   ```bash
   git clone [repository-url]
   cd UIDesigner
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm start
   ```

---

## Troubleshooting

### Common Issues

**Node.js/npm not found after installation:**
- Restart your terminal/command prompt
- On Windows: Restart your computer
- Verify PATH environment variable includes Node.js

**Permission errors on Mac:**
- Use `sudo` prefix: `sudo npm install`
- Or configure npm to use a different directory

**Port 3000 already in use:**
- The app will prompt to use a different port
- Or manually specify: `npm start -- --port 3001`

**Dependency installation fails:**
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install`

---

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.

---

## Project Structure

```
UIDesigner/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Testing Library** - Testing utilities

## Getting Help

If you encounter any issues:

1. Check the [Troubleshooting](#troubleshooting) section above
2. Search for similar issues in the project's issue tracker
3. Create a new issue with detailed information about the problem

## Learn More

- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)