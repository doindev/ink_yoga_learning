# 🚀 Installation & Setup Guide

Complete guide to get your Ink learning environment up and running.

---

## Prerequisites

### Required Software

#### 1. Node.js (v18.0.0 or higher)

**Check if installed:**
```bash
node --version
```

**Installation:**

**macOS:**
```bash
# Using Homebrew
brew install node

# Or download from nodejs.org
```

**Windows:**
```bash
# Using Chocolatey
choco install nodejs

# Or download installer from nodejs.org
```

**Linux (Ubuntu/Debian):**
```bash
# Using apt
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Or using snap
sudo snap install node --classic
```

#### 2. npm (comes with Node.js)

**Check if installed:**
```bash
npm --version
```

#### 3. Git (optional, but recommended)

**Check if installed:**
```bash
git --version
```

**Installation:**
- **macOS:** `brew install git`
- **Windows:** Download from git-scm.com
- **Linux:** `sudo apt-get install git`

---

## Quick Start (3 minutes)

### Option 1: Run Immediately (No Installation)

```bash
# Run directly with npx
npx tsx https://github.com/yourusername/ink-terminal-app/src/index.tsx
```

### Option 2: Clone and Install

```bash
# 1. Navigate to your workspace
cd C:\Users\timhj\eclipse-workspace

# Already there? Great!

# 2. Navigate to the project
cd ink-terminal-app

# 3. Install dependencies
npm install

# 4. Start the learning platform
npm run dev
```

That's it! The application should now be running.

---

## Detailed Installation Steps

### Step 1: Verify Prerequisites

Open your terminal and run:

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version
```

If you see version numbers, you're good to go!

### Step 2: Install Dependencies

Navigate to the project directory:

```bash
cd C:\Users\timhj\eclipse-workspace\ink-terminal-app
```

Install all required packages:

```bash
npm install
```

This will install:
- **ink** (v5.0.1) - React renderer for CLI
- **react** (v18.3.1) - React library
- **yoga-layout-prebuilt** (v1.10.0) - Layout engine
- **ink-text-input** (v6.0.0) - Text input component
- **ink-select-input** (v6.0.0) - Select component
- **chalk** (v5.3.0) - Terminal colors
- **TypeScript** and other dev dependencies

**Installation Time:** ~30-60 seconds depending on internet speed

### Step 3: Verify Installation

Check that everything installed correctly:

```bash
# Should show a list of installed packages
npm list --depth=0
```

### Step 4: Run the Application

Start in development mode:

```bash
npm run dev
```

You should see the Ink + Yoga Learning Platform appear!

---

## Alternative Installation Methods

### Using Yarn

```bash
# Install Yarn globally (if not installed)
npm install -g yarn

# Install dependencies
yarn install

# Run the app
yarn dev
```

### Using pnpm

```bash
# Install pnpm globally (if not installed)
npm install -g pnpm

# Install dependencies
pnpm install

# Run the app
pnpm dev
```

---

## Build for Production

### Compile TypeScript

```bash
# Build the project
npm run build

# Output will be in ./dist folder
```

### Run the Built Version

```bash
# After building
npm start
```

### Make it Globally Installable

```bash
# Link the package locally
npm link

# Now you can run from anywhere
learn-ink
# or
ink-learn
```

### Publish to npm (Optional)

```bash
# Login to npm
npm login

# Publish your package
npm publish
```

---

## Development Setup

### Recommended Terminal Setup

For the best experience:

1. **Use a modern terminal:**
   - **macOS:** iTerm2
   - **Windows:** Windows Terminal
   - **Linux:** GNOME Terminal, Terminator, or Alacritty

2. **Enable true color support:**
   Most modern terminals support this by default.

3. **Use a monospace font:**
   - Fira Code
   - JetBrains Mono
   - Cascadia Code
   - Source Code Pro

4. **Set your terminal size:**
   Minimum recommended: 80 columns × 24 rows
   Comfortable: 120 columns × 40 rows

### VS Code Setup (Recommended)

If you're using VS Code:

1. **Install Extensions:**
   ```
   - TypeScript and JavaScript
   - ESLint
   - Prettier
   - npm Intellisense
   ```

2. **Integrated Terminal:**
   - Press `` Ctrl+` `` to open terminal
   - Set shell: `Terminal: Select Default Profile`

3. **Settings (`.vscode/settings.json`):**
   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "typescript.preferences.importModuleSpecifier": "relative"
   }
   ```

---

## Troubleshooting

### Common Issues and Solutions

#### Issue 1: `command not found: npm`

**Solution:** Node.js is not installed or not in PATH.

```bash
# Reinstall Node.js from nodejs.org
# Or add to PATH (macOS/Linux)
export PATH="/usr/local/bin:$PATH"

# Windows: Add Node.js to System PATH via Environment Variables
```

#### Issue 2: `Error: Cannot find module 'ink'`

**Solution:** Dependencies not installed.

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Issue 3: TypeScript errors

**Solution:** TypeScript version mismatch.

```bash
# Install TypeScript globally
npm install -g typescript

# Or use project's TypeScript
npx tsc --version
```

#### Issue 4: Terminal colors not showing

**Solution:** Terminal doesn't support colors.

- Use a modern terminal (see recommendations above)
- Check if `$TERM` environment variable is set:
  ```bash
  echo $TERM
  # Should be xterm-256color or similar
  ```

#### Issue 5: Layout looks broken

**Solution:** Terminal too small.

- Resize terminal to at least 80×24
- Check terminal size:
  ```bash
  # Unix/macOS
  echo $COLUMNS $LINES
  
  # Or use stty
  stty size
  ```

#### Issue 6: `Permission denied` error

**Solution:** Insufficient permissions.

```bash
# macOS/Linux: Use sudo
sudo npm install -g [package]

# Or fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile
```

#### Issue 7: Port already in use (if using server)

**Solution:** Kill the process using the port.

```bash
# Find process
lsof -i :3000

# Kill process
kill -9 [PID]
```

---

## Package Scripts Reference

The project includes these npm scripts:

```json
{
  "dev": "tsx src/index.tsx",          // Run in development mode with hot reload
  "build": "tsc",                      // Compile TypeScript to JavaScript
  "start": "npm run build && node dist/index.js",  // Build and run
  "watch": "tsc --watch",              // Watch mode for TypeScript
  "learn": "tsx src/index.tsx"         // Alias for dev
}
```

**Usage:**
```bash
npm run dev      # Development
npm run build    # Production build
npm start        # Run built version
npm run watch    # Auto-compile on changes
```

---

## Environment Setup

### Terminal Configuration

#### macOS/Linux (~/.bashrc or ~/.zshrc)

```bash
# Add to your shell config
export PATH="/usr/local/bin:$PATH"

# Optional: Aliases
alias learn="cd ~/workspace/ink-terminal-app && npm run dev"
```

#### Windows (PowerShell)

```powershell
# Add to $PROFILE
function Start-Learning {
    Set-Location "C:\Users\timhj\eclipse-workspace\ink-terminal-app"
    npm run dev
}

# Usage: Start-Learning
```

---

## Testing Your Setup

Run this checklist to ensure everything works:

```bash
# ✅ Node.js installed
node --version
# Expected: v18.0.0 or higher

# ✅ npm installed
npm --version
# Expected: 8.0.0 or higher

# ✅ Project dependencies installed
npm list --depth=0
# Expected: List of packages

# ✅ TypeScript compiles
npm run build
# Expected: No errors, dist/ folder created

# ✅ Application runs
npm run dev
# Expected: Interactive learning platform appears

# ✅ Terminal supports colors
npm run dev
# Expected: Colored text and borders

# ✅ Keyboard input works
# Try pressing arrow keys, letters, etc.
# Expected: Responsive navigation
```

If all checks pass, you're ready to learn! 🎉

---

## Updating the Project

### Update Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm update ink

# Update to latest versions (use cautiously)
npm install ink@latest react@latest
```

### Pull Latest Changes (if using Git)

```bash
# Fetch and merge latest changes
git pull origin main

# Reinstall dependencies if package.json changed
npm install
```

---

## Performance Optimization

### For Faster Startup

```bash
# Use tsx (development) instead of tsc + node
npm run dev

# Or compile once and run (production)
npm run build
npm start
```

### For Smaller Bundle

```bash
# Install production dependencies only
npm install --production

# Remove unnecessary dev dependencies
npm prune --production
```

---

## Uninstalling

If you need to remove the project:

```bash
# Navigate to project directory
cd C:\Users\timhj\eclipse-workspace\ink-terminal-app

# Remove node_modules
rm -rf node_modules

# Remove build output
rm -rf dist

# Optionally, remove the entire project
cd ..
rm -rf ink-terminal-app
```

---

## Getting Help

### Resources

- **Ink Documentation:** https://github.com/vadimdemedes/ink
- **Yoga Documentation:** https://yogalayout.com
- **React Documentation:** https://react.dev
- **TypeScript Documentation:** https://typescriptlang.org

### Community

- **GitHub Issues:** Report bugs or ask questions
- **Stack Overflow:** Tag questions with `ink-cli`
- **Discord/Slack:** Join Ink community channels

### Project Documentation

- **README.md** - Project overview
- **TUTORIAL.md** - Comprehensive tutorial
- **CHEATSHEET.md** - Quick reference
- **GLOSSARY.md** - Term definitions
- **PROJECT_IDEAS.md** - What to build next

---

## Next Steps

1. ✅ Complete installation
2. ✅ Run the application
3. 📚 Read the README.md
4. 🎓 Start with Lesson 1
5. 🎮 Practice in the playground
6. 🚀 Build your first project

---

**Happy Learning!** 🎉

If you encounter any issues not covered here, please open an issue on GitHub or reach out to the community.
