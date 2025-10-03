# 🤝 Contributing to the Ink + Yoga Learning Platform

Thank you for your interest in improving this educational project! This guide will help you contribute effectively.

---

## 🎯 Ways to Contribute

### 1. Report Issues
Found a bug or typo? Have a suggestion?
- Open an issue on GitHub
- Use the issue template
- Be specific and provide examples

### 2. Improve Documentation
- Fix typos and grammar
- Add clarifications
- Create new examples
- Translate to other languages

### 3. Add New Lessons
- Create lessons on advanced topics
- Add more interactive examples
- Improve existing lesson content

### 4. Enhance the Platform
- Add new features
- Improve UI/UX
- Optimize performance
- Add tests

### 5. Share Knowledge
- Write blog posts
- Create video tutorials
- Answer questions from learners
- Share your project ideas

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Git
- Familiarity with TypeScript and React
- Understanding of Ink and Yoga

### Setup Development Environment

```bash
# Fork the repository on GitHub

# Clone your fork
git clone https://github.com/YOUR_USERNAME/ink-terminal-app.git
cd ink-terminal-app

# Install dependencies
npm install

# Create a new branch
git checkout -b feature/your-feature-name

# Run in development mode
npm run dev
```

---

## 📝 Adding a New Lesson

### Step 1: Create the Lesson File

Create a new file in `src/components/lessons/`:

```typescript
// src/components/lessons/YourNewLesson.tsx

/**
 * LESSON X: Your Lesson Title
 * 
 * Brief description of what this lesson teaches
 */

import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

interface LessonProps {
  onBack: () => void;
}

const YourNewLesson: React.FC<LessonProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useInput((input, key) => {
    // Handle navigation
    if (key.rightArrow && currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
    if (key.leftArrow && currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  });

  return (
    <Box flexDirection="column" padding={1}>
      {/* Lesson Header */}
      <Box borderStyle="double" borderColor="cyan" padding={1} marginBottom={1}>
        <Text bold color="cyan">
          🎯 LESSON X: Your Lesson Title
        </Text>
      </Box>

      {/* Lesson Content */}
      <Box flexDirection="column" borderStyle="round" padding={2}>
        {/* Add your teaching content here */}
        <Text bold>Key Concept:</Text>
        <Text>Explanation goes here...</Text>

        {/* Interactive examples */}
        <Box marginTop={1}>
          {/* Live demo */}
        </Box>

        {/* Code examples */}
        <Box marginTop={1} borderStyle="single" padding={1}>
          <Text dimColor>{'<Box>Example code</Box>'}</Text>
        </Box>
      </Box>

      {/* Navigation Footer */}
      <Box marginTop={1} borderStyle="single" padding={1}>
        <Text dimColor>
          <Text color="cyan">← →</Text> Navigate  
          <Text color="yellow"> M</Text> Menu
        </Text>
      </Box>

      {/* Key Takeaway */}
      <Box marginTop={1} borderStyle="double" borderColor="green" padding={1}>
        <Text bold color="green">
          ✅ Key Takeaway: Main point of this lesson
        </Text>
      </Box>
    </Box>
  );
};

export default YourNewLesson;
```

### Step 2: Update App.tsx

Add your lesson to the main app:

```typescript
// src/App.tsx

import YourNewLesson from './components/lessons/YourNewLesson.js';

// Add to Screen type
type Screen = 
  | 'menu'
  | 'layout-basics'
  // ... other lessons
  | 'your-new-lesson';

// Add to render logic
{currentScreen === 'your-new-lesson' && (
  <YourNewLesson onBack={() => setCurrentScreen('menu')} />
)}
```

### Step 3: Update MenuScreen.tsx

Add your lesson to the menu:

```typescript
// src/components/MenuScreen.tsx

const menuItems: MenuItem[] = [
  // ... existing lessons
  {
    id: 'your-new-lesson',
    title: 'Your Lesson Title',
    description: 'Brief description of what this teaches',
    icon: '🎯',
    difficulty: 'Intermediate'
  }
];
```

### Step 4: Test Your Lesson

```bash
# Run the app
npm run dev

# Navigate to your new lesson
# Test all interactive features
# Check responsiveness at different terminal sizes
```

### Step 5: Document

Update relevant documentation:
- Add lesson description to README.md
- Update TUTORIAL.md if introducing new concepts
- Add examples to CHEATSHEET.md if applicable

---

## 🎨 Style Guidelines

### Code Style

```typescript
// ✅ Good: Clear, commented, educational
const handleInput = () => {
  /**
   * This function demonstrates...
   * Key concept: ...
   */
  // Implementation
};

// ❌ Bad: Uncommented, unclear purpose
const h = () => { /* ... */ };
```

### Component Structure

```typescript
// Always follow this structure:
1. Imports
2. Type definitions
3. Component function
4. State management
5. Event handlers
6. Render logic
7. Export
```

### Comments

```typescript
// For educational purposes, heavily comment your code:

/**
 * 🔑 KEY PROPERTY: flexGrow
 * 
 * This tells Yoga how much space this component should take.
 * A value of 1 means it will grow to fill available space.
 */
<Box flexGrow={1}>
```

### Naming Conventions

- Components: `PascalCase` (e.g., `FlexDirectionLesson`)
- Functions: `camelCase` (e.g., `handleKeyPress`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_ATTEMPTS`)
- Files: Match component name (e.g., `FlexDirectionLesson.tsx`)

---

## 📚 Documentation Guidelines

### README Updates

When adding features:
```markdown
## New Feature

### What it does
Brief explanation

### How to use
Code example

### When to use
Use cases
```

### Code Examples

Always include:
1. What the code does
2. Why it's useful
3. How to customize it

```typescript
// What: Centers content in both directions
// Why: Common pattern for modals, landing screens
// How: Adjust height/width as needed
<Box 
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  height={20}
>
  <Text>Centered!</Text>
</Box>
```

---

## 🧪 Testing

### Manual Testing Checklist

Before submitting:

- [ ] Tested at 80x24 terminal size (minimum)
- [ ] Tested at 120x40 terminal size (comfortable)
- [ ] Tested at 200x60 terminal size (large)
- [ ] All keyboard shortcuts work
- [ ] No TypeScript errors
- [ ] No console warnings/errors
- [ ] Responsive layout (resize terminal)
- [ ] Works on macOS
- [ ] Works on Windows
- [ ] Works on Linux (if possible)

### Visual Testing

```bash
# Test different color schemes
# Test in different terminals:
- macOS Terminal
- iTerm2
- Windows Terminal
- VS Code integrated terminal
```

---

## 🔍 Code Review Process

### What Reviewers Look For

1. **Educational Value**
   - Does it teach effectively?
   - Are concepts well-explained?
   - Are examples clear?

2. **Code Quality**
   - TypeScript types used correctly?
   - No unnecessary complexity?
   - Follows project conventions?

3. **Performance**
   - No unnecessary re-renders?
   - Efficient state management?
   - Fast keyboard response?

4. **Accessibility**
   - Clear visual hierarchy?
   - Keyboard navigation works?
   - Readable at different sizes?

### Review Response

When receiving feedback:
- Thank the reviewer
- Ask questions if unclear
- Make requested changes
- Explain if you disagree (respectfully)

---

## 📦 Submitting Changes

### Commit Messages

Use conventional commit format:

```bash
# Features
git commit -m "feat: add advanced flexbox lesson"

# Bug fixes
git commit -m "fix: correct typo in alignment lesson"

# Documentation
git commit -m "docs: improve installation guide"

# Refactoring
git commit -m "refactor: simplify playground component"
```

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New lesson
- [ ] Bug fix
- [ ] Documentation
- [ ] Enhancement

## Testing
- [ ] Tested in multiple terminals
- [ ] Tested at different sizes
- [ ] No TypeScript errors

## Screenshots
If applicable, add screenshots

## Additional Notes
Any other context
```

### Before Submitting

```bash
# Build successfully
npm run build

# No TypeScript errors
npx tsc --noEmit

# Format code (if using Prettier)
npx prettier --write "src/**/*.tsx"

# Test the application
npm run dev
```

---

## 🐛 Reporting Bugs

### Bug Report Template

```markdown
## Description
Clear description of the bug

## Steps to Reproduce
1. Start the application
2. Navigate to...
3. Press...
4. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: [e.g., macOS 12.0]
- Terminal: [e.g., iTerm2]
- Node version: [e.g., 18.0.0]
- Project version: [e.g., 1.0.0]

## Screenshots
If applicable

## Additional Context
Any other information
```

---

## 💡 Improvement Ideas

### Low-Hanging Fruit

Easy wins for first-time contributors:

1. Fix typos in documentation
2. Add more examples to existing lessons
3. Improve color schemes
4. Add keyboard shortcuts
5. Create beginner project templates

### Medium Difficulty

For experienced contributors:

1. Add quiz/assessment system
2. Create progress tracking
3. Add lesson bookmarks
4. Implement search functionality
5. Add code export feature

### Advanced Projects

For expert contributors:

1. Multi-language support
2. Lesson recording/playback
3. Cloud sync for progress
4. AI-powered hints
5. Collaborative learning features

---

## 🌟 Recognition

Contributors are recognized in:
- README.md Contributors section
- Lesson credits (for new lessons)
- Release notes
- Community shoutouts

---

## 📞 Getting Help

### Questions?

- Open a Discussion on GitHub
- Ask in Issues (tag as 'question')
- Reach out to maintainers
- Join community chat

### Stuck?

Don't worry! Contributing to open source is a learning experience.
- Ask for help
- Request code review early
- Break tasks into smaller pieces
- Celebrate small wins

---

## 🎓 Learning Resources

### For Contributors

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)
- [Ink Documentation](https://github.com/vadimdemedes/ink)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)

---

## 🙏 Thank You!

Every contribution, no matter how small, makes this project better for learners worldwide. Your effort helps others learn and grow.

**Happy Contributing!** 🚀

---

## 📜 Code of Conduct

Be kind, respectful, and inclusive:
- Welcome newcomers
- Give constructive feedback
- Assume good intentions
- Help others learn
- Celebrate diversity

**Zero tolerance for:**
- Harassment
- Discrimination
- Disrespectful behavior
- Spam or trolling

Report issues to maintainers immediately.
