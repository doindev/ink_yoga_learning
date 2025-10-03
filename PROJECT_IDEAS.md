# 🚀 Project Ideas - Build Your Own CLI Apps!

After completing the lessons, put your skills to the test with these project ideas. Start with beginner projects and work your way up!

---

## 🟢 Beginner Projects (1-2 hours)

### 1. Todo List Manager
**Skills Used:** flexDirection, justifyContent, useState, useInput

**Features:**
- Add new todos
- Mark todos as complete
- Delete todos
- Filter by status (all/active/completed)
- Keyboard navigation with arrow keys

**Layout Challenge:** Vertical list with header and footer

**Bonus:**
- Save to JSON file
- Due dates
- Priority levels with colors

---

### 2. Pomodoro Timer
**Skills Used:** useEffect, Text styling, Box centering

**Features:**
- 25-minute work timer
- 5-minute break timer
- Visual countdown
- Sound notification when done
- Pause/resume controls

**Layout Challenge:** Centered content with large timer display

**Bonus:**
- Session counter
- Statistics (total focus time)
- Custom durations

---

### 3. Note Taker
**Skills Used:** TextInput, file operations, list rendering

**Features:**
- Create new notes
- List all notes
- View note content
- Delete notes
- Simple search

**Layout Challenge:** Two-panel layout (list + preview)

**Bonus:**
- Markdown support
- Tags/categories
- Export to file

---

### 4. Weather Dashboard
**Skills Used:** API calls, card layouts, flexGrow

**Features:**
- Current weather display
- 5-day forecast
- Temperature, humidity, wind
- Weather icons (using emojis)
- Location selection

**Layout Challenge:** Card grid for forecast

**Bonus:**
- Multiple locations
- Refresh interval
- Weather alerts

---

### 5. Git Status Viewer
**Skills Used:** Child process, color coding, alignment

**Features:**
- Show current branch
- List modified files
- Show staged changes
- Git status summary
- Color-coded output

**Layout Challenge:** Sidebar with summary, main area with files

**Bonus:**
- Quick commit interface
- Branch switcher
- Recent commits

---

## 🟡 Intermediate Projects (3-5 hours)

### 6. File Explorer
**Skills Used:** fs operations, tree structure, keyboard navigation

**Features:**
- Navigate directories
- View file details
- Create/delete files and folders
- Open files in editor
- Search files

**Layout Challenge:** Tree view with breadcrumbs

**Bonus:**
- File preview
- Fuzzy search
- Bookmarks

---

### 7. Package Manager Dashboard
**Skills Used:** npm API, tables, interactive selection

**Features:**
- List installed packages
- Check for updates
- Install new packages
- View package details
- Dependency tree

**Layout Challenge:** Table with columns for name, version, status

**Bonus:**
- Update all packages
- Remove unused packages
- Search npm registry

---

### 8. System Monitor
**Skills Used:** Real-time updates, progress bars, charts

**Features:**
- CPU usage
- Memory usage
- Disk space
- Network activity
- Running processes

**Layout Challenge:** Dashboard with multiple stat cards

**Bonus:**
- Process killer
- Alerts for high usage
- Historical graphs

---

### 9. Database Browser
**Skills Used:** Database connections, table rendering, pagination

**Features:**
- Connect to SQLite/MySQL/PostgreSQL
- List tables
- Browse table data
- Execute SQL queries
- Export results

**Layout Challenge:** Split view (tables list + data grid)

**Bonus:**
- Query history
- Schema visualization
- Data editing

---

### 10. API Tester (Postman Clone)
**Skills Used:** HTTP requests, JSON formatting, history

**Features:**
- Send GET/POST/PUT/DELETE requests
- Set headers and body
- View response
- Save requests
- Collection management

**Layout Challenge:** Three-panel (requests, editor, response)

**Bonus:**
- Environment variables
- Authentication
- Response time tracking

---

## 🔴 Advanced Projects (6+ hours)

### 11. Terminal Code Editor
**Skills Used:** Text editing, syntax highlighting, file management

**Features:**
- Open and edit files
- Line numbers
- Basic syntax highlighting
- Find and replace
- Multiple files (tabs)

**Layout Challenge:** Editor with status bar and file tree

**Bonus:**
- Code completion
- Multi-cursor
- Git integration

---

### 12. Chat Application
**Skills Used:** WebSockets, real-time updates, scrolling

**Features:**
- Connect to chat server
- Send and receive messages
- User list
- Private messages
- Chat rooms

**Layout Challenge:** Messages area with sidebar and input bar

**Bonus:**
- Emoji support
- File sharing
- Notifications

---

### 13. Docker Manager
**Skills Used:** Docker API, container management, logs

**Features:**
- List containers
- Start/stop containers
- View logs
- Container stats
- Image management

**Layout Challenge:** Multi-panel dashboard

**Bonus:**
- Compose file support
- Container shell access
- Network management

---

### 14. Task Scheduler (Cron Manager)
**Skills Used:** Cron parsing, job scheduling, notifications

**Features:**
- Create scheduled tasks
- View upcoming runs
- Execution history
- Enable/disable tasks
- Task templates

**Layout Challenge:** Calendar view + task list

**Bonus:**
- Email notifications
- Retry logic
- Chained tasks

---

### 15. Portfolio CLI
**Skills Used:** All concepts, navigation, content display

**Features:**
- About me section
- Projects showcase
- Skills visualization
- Contact form
- Blog posts

**Layout Challenge:** Multi-screen navigation system

**Bonus:**
- Interactive resume
- GitHub integration
- Analytics

---

## 🎨 Creative Projects

### 16. ASCII Art Generator
Convert images to ASCII art, display animations

### 17. Terminal Game (Snake, Tetris, etc.)
Real-time keyboard input, collision detection

### 18. Music Player
Control system music, display playlist, progress bar

### 19. Markdown Viewer
Render markdown files with formatting

### 20. Log Viewer
Tail log files, syntax highlighting, filtering

---

## 📋 Project Template Structure

Use this structure for any project:

```
my-cli-app/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   └── [Feature]Component.tsx
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── SettingsScreen.tsx
│   │   └── [Feature]Screen.tsx
│   ├── hooks/
│   │   ├── useKeyboard.ts
│   │   └── use[Feature].ts
│   ├── utils/
│   │   ├── storage.ts
│   │   ├── api.ts
│   │   └── helpers.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── data/
│   └── [storage files]
├── tests/
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💡 Development Tips

### 1. Start Simple
Build the core feature first, then add enhancements.

### 2. Test at Different Sizes
Resize your terminal to ensure responsive design.

### 3. Handle Edge Cases
- Empty states (no data)
- Loading states
- Error states
- Very long text

### 4. Add Helpful Shortcuts
Always include:
- `q` to quit
- `?` for help
- `ESC` to go back

### 5. Use Components
Break down complex UIs into reusable components.

### 6. Consider Performance
Avoid unnecessary re-renders with React.memo and useMemo.

---

## 🛠️ Helpful Libraries

### UI Components
- **ink-text-input** - Text input component
- **ink-select-input** - Selection menu
- **ink-spinner** - Loading spinners
- **ink-table** - Data tables
- **ink-progress-bar** - Progress indicators

### Utilities
- **chalk** - Terminal colors
- **boxen** - Create boxes
- **figlet** - ASCII art text
- **ora** - Elegant terminal spinners
- **inquirer** - Interactive prompts

### Data & API
- **axios** - HTTP client
- **sqlite3** - SQLite database
- **lowdb** - Simple JSON database
- **node-fetch** - Fetch API for Node

### File Operations
- **fs-extra** - Enhanced file system
- **chokidar** - File watcher
- **glob** - File pattern matching

---

## 📚 Learning Path

1. **Complete all lessons** in the learning platform
2. **Build 2-3 beginner projects** to solidify basics
3. **Choose 1 intermediate project** that interests you
4. **Tackle an advanced project** to master the skills
5. **Publish your CLI** to npm and share it!

---

## 🎯 Challenge Ideas

### Daily Challenges
- Build a different layout pattern each day
- Recreate popular CLI tool interfaces
- Optimize an existing project for performance

### Community Challenges
- Contribute to open-source Ink projects
- Help others in GitHub issues
- Write blog posts about your learnings

### Personal Goals
- Build a tool you'll use daily
- Replace a GUI app with your CLI version
- Create a viral CLI tool

---

## 🌟 Showcase Your Work

After building a project:

1. **Polish the README** - Add screenshots (use `terminalizer`)
2. **Record a demo** - Use `asciinema` for terminal recordings
3. **Publish to npm** - Make it installable with `npx`
4. **Share on social media** - Use #InkCLI hashtag
5. **Write a blog post** - Document your learnings
6. **Add to GitHub** - Open source it!

---

## 📸 Recording Your CLI

### Using Asciinema
```bash
# Install
npm install -g asciinema

# Record
asciinema rec my-demo.cast

# Play
asciinema play my-demo.cast

# Upload and share
asciinema upload my-demo.cast
```

### Using Terminalizer
```bash
# Install
npm install -g terminalizer

# Record
terminalizer record my-demo

# Play
terminalizer play my-demo

# Generate GIF
terminalizer render my-demo
```

---

## 🎓 Advanced Topics to Explore

After mastering basics, dive into:

- **Testing** - Jest with ink-testing-library
- **CI/CD** - GitHub Actions for CLI tools
- **Distribution** - Publishing to npm, Homebrew
- **Performance** - Profiling and optimization
- **Accessibility** - Screen reader support
- **Themes** - Customizable color schemes
- **Plugins** - Extensible architecture
- **Configuration** - User preferences and settings

---

## 🏆 Portfolio Ideas

Build a personal CLI portfolio that showcases:

1. Your projects (with demos)
2. Your skills (visual representation)
3. Your experience (interactive resume)
4. Your blog posts
5. Contact information

Make it installable: `npx yourname-cli`

---

## 🤝 Contributing Back

Once you're comfortable with Ink:

1. **Answer questions** on Stack Overflow
2. **Write tutorials** on your blog
3. **Create video courses** on YouTube
4. **Build component libraries** for others
5. **Contribute to Ink** itself on GitHub

---

## 💪 Remember

- **Start small** - Every expert was once a beginner
- **Build things you'll use** - Motivation comes from utility
- **Share your work** - Community feedback helps you grow
- **Have fun** - Building CLIs should be enjoyable!

---

**Ready to build? Pick a project and start coding!** 🚀

Need help? Open an issue or reach out to the Ink community!
