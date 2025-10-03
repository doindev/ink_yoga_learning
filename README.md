# 🎓 Ink + Yoga Learning Platform

An interactive, hands-on learning application that teaches you how to build terminal UIs with **Ink** and **Yoga** using **TypeScript** and **React**.

## 🌟 What You'll Learn

This application is a complete educational platform that teaches you:

1. **Ink Fundamentals** - How React renders to the terminal
2. **Yoga Layout Engine** - Flexbox for terminal interfaces
3. **Box Component** - Your primary building block
4. **Flex Direction** - Controlling layout direction (row vs column)
5. **Alignment** - Positioning with justifyContent and alignItems
6. **Spacing** - Mastering padding, margin, and dimensions
7. **Flexible Sizing** - Dynamic layouts with flexGrow
8. **Real-World Patterns** - Production-ready layout examples
9. **Interactive Playground** - Hands-on experimentation

## 🎯 Why This Approach?

Unlike traditional tutorials, this application:

- ✅ **Learn by doing** - Interactive lessons with real-time feedback
- ✅ **See the code** - Every example shows the actual code used
- ✅ **Visual learning** - Watch layouts change as you adjust properties
- ✅ **Commented code** - Extensive inline documentation explains everything
- ✅ **Progressive** - Start with basics, build to advanced patterns
- ✅ **Playground mode** - Experiment freely with all properties

## 📚 Course Structure

### Lesson 1: Layout Basics
**Difficulty:** Beginner  
Learn what Ink and Yoga are, how they work together, and understand the fundamental Box component.

**Topics:**
- What is Ink? (React for terminals)
- What is Yoga? (Flexbox layout engine)
- The Box component
- Default flexbox behavior
- The layout pipeline

### Lesson 2: Flex Direction
**Difficulty:** Beginner  
Master the most important layout property - flexDirection.

**Topics:**
- Row vs Column layouts
- Understanding the main axis
- When to use each direction
- Real-world examples
- Mixed layouts

### Lesson 3: Alignment & Justification
**Difficulty:** Intermediate  
Control positioning with justifyContent and alignItems.

**Topics:**
- Main axis vs cross axis
- justifyContent values and behavior
- alignItems values and behavior
- Centering content
- Common alignment patterns

### Lesson 4: Spacing & Sizing
**Difficulty:** Beginner  
Master the box model with padding, margin, and dimensions.

**Topics:**
- The terminal box model
- Padding (space inside)
- Margin (space outside)
- Directional spacing
- Fixed dimensions (width/height)
- Min/Max dimensions

### Lesson 5: Flexible Sizing
**Difficulty:** Intermediate  
Create responsive layouts with flexGrow, flexShrink, and flexBasis.

**Topics:**
- How flexGrow works
- Proportional space distribution
- Common flexGrow patterns
- flexShrink for responsive layouts
- flexBasis for initial sizing

### Lesson 6: Real-World Examples
**Difficulty:** Advanced  
See complete, production-ready layout patterns.

**Topics:**
- Header/Footer layouts
- Sidebar navigation
- Card grids
- Form layouts
- Modal dialogs
- Full dashboard example

### Lesson 7: Interactive Playground
**Difficulty:** All Levels  
Experiment with all properties in real-time.

**Features:**
- Adjust any property and see immediate results
- Generated code preview
- Suggested experiments
- Complete control panel

## 🚀 Getting Started

### Prerequisites
```bash
Node.js >= 18.0.0
npm or yarn
```

### Installation

1. **Navigate to the project:**
   ```bash
   cd ink-terminal-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the learning platform:**
   ```bash
   npm run dev
   ```

## 🎮 How to Use

### Navigation
- **Arrow Keys (↑↓)** - Navigate menus and options
- **Enter** - Select current item
- **1-7** - Quick select lessons from main menu
- **M** - Return to main menu (from any lesson)
- **Q** - Quit application
- **ESC** - Go back

### Lesson-Specific Controls
Each lesson has unique interactive controls:

- **Lesson 2 (Flex Direction):**
  - `C` - Switch to column mode
  - `R` - Switch to row mode

- **Lesson 3 (Alignment):**
  - `D` - Toggle direction
  - `J` - Cycle justifyContent
  - `A` - Cycle alignItems

- **Lesson 4 (Spacing):**
  - `+/-` - Adjust padding
  - `[/]` - Adjust margin

- **Lesson 5 (Flex Grow):**
  - `1/2/3` - Cycle flexGrow for each box

- **Lesson 7 (Playground):**
  - `D` - Toggle flexDirection
  - `J` - Cycle justifyContent
  - `A` - Cycle alignItems
  - `P/p` - Adjust container padding
  - `G` - Cycle child flexGrow
  - `C/c` - Adjust child padding
  - `M/m` - Adjust child margin
  - `R` - Reset all values

## 💡 Learning Tips

1. **Start from the beginning** - Even if you know React, Ink has unique concepts
2. **Experiment in the playground** - Hands-on experience is the best teacher
3. **Read the comments** - The code is heavily documented to explain concepts
4. **Try the suggested experiments** - Each lesson includes practice exercises
5. **Build something** - After completing lessons, try building your own CLI app

## 🏗️ Project Structure

```
ink-terminal-app/
├── src/
│   ├── components/
│   │   ├── MenuScreen.tsx          # Main navigation menu
│   │   └── lessons/
│   │       ├── LayoutBasicsLesson.tsx      # Lesson 1
│   │       ├── FlexDirectionLesson.tsx     # Lesson 2
│   │       ├── AlignmentLesson.tsx         # Lesson 3
│   │       ├── SpacingLesson.tsx           # Lesson 4
│   │       ├── FlexGrowLesson.tsx          # Lesson 5
│   │       ├── RealWorldExamples.tsx       # Lesson 6
│   │       └── InteractivePlayground.tsx   # Lesson 7
│   ├── types/
│   │   └── Task.ts                 # Type definitions
│   ├── App.tsx                     # Main application
│   └── index.tsx                   # Entry point
├── package.json
├── tsconfig.json
└── README.md
```

## 🧠 Key Concepts Explained

### Ink
Ink is a React renderer for building command-line interfaces. Think of it as ReactDOM, but for terminals instead of browsers.

**Key Points:**
- Uses familiar React patterns (components, hooks, props)
- Renders to terminal using ANSI escape codes
- Powered by Yoga layout engine
- Efficient updates via React reconciliation

### Yoga
Yoga is Facebook's cross-platform layout engine that implements Flexbox. It's used by React Native, Ink, and other frameworks.

**Key Points:**
- Implements CSS Flexbox specification
- Calculates positions and sizes
- High-performance layout engine
- Predictable, consistent results

### The Box Component
Box is Ink's fundamental layout component, similar to `<div>` in HTML.

**Key Properties:**
- `flexDirection`: Direction of layout (row/column)
- `justifyContent`: Alignment along main axis
- `alignItems`: Alignment along cross axis
- `flexGrow`: How much to grow
- `padding`: Space inside
- `margin`: Space outside
- `width/height`: Fixed dimensions

## 📖 Additional Resources

### Documentation
- [Ink Official Docs](https://github.com/vadimdemedes/ink)
- [Yoga Documentation](https://yogalayout.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Related Projects
- [Ink UI Components](https://github.com/vadimdemedes/ink-ui)
- [Pastel](https://github.com/vadimdemedes/pastel) - Framework for Ink apps
- [React Native](https://reactnative.dev) - Uses the same Yoga engine

## 🎨 Code Philosophy

This project prioritizes **educational value** over brevity:

1. **Extensive Comments** - Every significant line is explained
2. **Descriptive Names** - Variables and functions are self-documenting
3. **Visual Examples** - See the result of every concept
4. **Progressive Complexity** - Start simple, build to advanced
5. **Real-World Context** - Learn why, not just how

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|-----------|---------|---------|
| Ink | 5.0.1 | React renderer for CLI |
| React | 18.3.1 | UI component framework |
| Yoga | 1.10.0 | Flexbox layout engine |
| TypeScript | 5.6.3 | Type-safe development |
| Node.js | >=18.0.0 | Runtime environment |

## 🎯 Learning Outcomes

After completing this course, you will be able to:

✅ Understand how Ink renders React to the terminal  
✅ Use the Yoga layout engine effectively  
✅ Build complex terminal UIs with flexbox  
✅ Create responsive CLI applications  
✅ Apply real-world layout patterns  
✅ Debug layout issues with confidence  
✅ Build production-ready terminal applications  

## 🚀 What's Next?

After mastering the basics:

1. **Build a Project** - Create your own CLI tool
2. **Explore Components** - Check out ink-text-input, ink-select-input
3. **Add State Management** - Integrate with Redux or Zustand
4. **Handle User Input** - Master the useInput hook
5. **Add Animations** - Explore ink-spinner and custom animations
6. **Publish to NPM** - Share your CLI tool with the world

## 💬 Common Questions

**Q: Do I need to know React?**  
A: Basic React knowledge helps, but we explain everything from scratch.

**Q: Is this different from CSS Flexbox?**  
A: Yoga implements the Flexbox spec, so it's nearly identical to CSS Flexbox.

**Q: Can I use this knowledge for React Native?**  
A: Yes! React Native uses the same Yoga engine for layout.

**Q: How do I add colors and styles?**  
A: Use the Text component's color prop and borderStyle on Box.

**Q: Can I build complex apps with Ink?**  
A: Absolutely! Many production CLIs are built with Ink.

## 📝 License

MIT

## 🙏 Acknowledgments

- **Ink** by Vadim Demedes - Making terminal UIs enjoyable
- **Yoga** by Facebook - Bringing Flexbox everywhere
- **React** by Meta - Revolutionary UI paradigm
- **TypeScript** by Microsoft - Making JavaScript better

## 🎓 Happy Learning!

Remember: The best way to learn is by doing. Open the app, work through the lessons, and experiment in the playground. Before you know it, you'll be building amazing terminal UIs!

**Ready to start?** Run `npm run dev` and begin your journey! 🚀
