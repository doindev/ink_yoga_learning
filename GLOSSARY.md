# 📖 Glossary of Terms

A comprehensive reference of all terms used in Ink and Yoga development.

---

## A

### alignItems
A flexbox property that controls how children are aligned along the **cross axis**. Values include `flex-start`, `center`, `flex-end`, and `stretch`.

**Example:**
```typescript
<Box flexDirection="row" alignItems="center">
  {/* Items centered vertically */}
</Box>
```

### ANSI Escape Codes
Special character sequences that control text formatting, colors, and cursor positioning in terminals. Ink uses these internally to render UI.

**Example:** `\x1b[31m` makes text red

---

## B

### Box
The fundamental layout component in Ink. Similar to `<div>` in HTML. Every Box is a flexbox container managed by Yoga.

**Properties:** flexDirection, justifyContent, alignItems, padding, margin, width, height, etc.

### borderColor
Property that sets the color of a Box's border. Works with `borderStyle`.

**Values:** `red`, `green`, `blue`, `yellow`, `cyan`, `magenta`, `white`, `gray`

### borderStyle
Property that defines the visual style of a Box's border.

**Values:** `single`, `double`, `round`, `bold`, `classic`

---

## C

### CLI (Command-Line Interface)
A text-based user interface for interacting with programs. Ink helps you build beautiful CLIs using React.

### Component
A reusable piece of UI in React. Can be a function or class that returns JSX.

**Example:**
```typescript
const Header = () => (
  <Box><Text bold>My Header</Text></Box>
);
```

### Cross Axis
The axis perpendicular to the main axis in flexbox. Controlled by `alignItems`.

- If `flexDirection="row"`, cross axis is vertical (↓)
- If `flexDirection="column"`, cross axis is horizontal (→)

---

## D

### dimColor
A Text property that displays text with reduced brightness, useful for secondary information.

**Example:**
```typescript
<Text dimColor>Last updated: 2 hours ago</Text>
```

---

## E

### exit()
Function from `useApp()` hook that terminates the Ink application.

**Example:**
```typescript
const { exit } = useApp();
exit(); // Quits the app
```

---

## F

### flexBasis
The initial size of a flex item before flexGrow/flexShrink are applied. Think of it as a "preferred size."

**Example:**
```typescript
<Box flexBasis={20} flexGrow={1}>
  {/* Starts at 20 chars, then grows */}
</Box>
```

### flexbox
A CSS layout system for arranging items in rows or columns with flexible sizing. Implemented by Yoga for terminal UIs.

### flexDirection
The primary flexbox property that determines the direction children are laid out.

**Values:**
- `row` - Horizontal layout (→)
- `column` - Vertical layout (↓)

### flexGrow
A number that determines how much a flex item should grow relative to siblings when extra space is available.

**Example:**
```typescript
<Box flexGrow={1}> {/* Takes 1 part of space */}
<Box flexGrow={2}> {/* Takes 2 parts of space */}
```

### flexShrink
A number that determines how much a flex item should shrink when space is limited. Default is 1. Set to 0 to prevent shrinking.

**Example:**
```typescript
<Box flexShrink={0} width={20}>
  {/* Won't shrink below 20 */}
</Box>
```

---

## H

### height
Property that sets a fixed height for a Box (in terminal lines/rows).

**Example:**
```typescript
<Box height={10}> {/* 10 lines tall */}
```

### Hook
A React function that lets you use state and other features in functional components. Ink provides special hooks like `useInput` and `useApp`.

---

## I

### Ink
A React renderer for building CLI applications. Renders React components to the terminal instead of the browser.

**Created by:** Vadim Demedes

### input
Parameter in `useInput` hook representing the character typed by the user.

**Example:**
```typescript
useInput((input, key) => {
  if (input === 'q') {
    // User pressed 'q'
  }
});
```

### inverse
Text property that swaps foreground and background colors, creating a highlight effect.

**Example:**
```typescript
<Text inverse> Selected Item </Text>
```

---

## J

### JSX
JavaScript XML - syntax extension that lets you write HTML-like code in JavaScript. Used by React and Ink.

**Example:**
```typescript
const element = <Box><Text>Hello</Text></Box>;
```

### justifyContent
Flexbox property that controls spacing along the **main axis**.

**Values:**
- `flex-start` - Pack at start
- `center` - Pack in center
- `flex-end` - Pack at end
- `space-between` - Distribute with space between
- `space-around` - Distribute with space around

---

## K

### key
Parameter in `useInput` hook containing information about special keys pressed.

**Properties:**
```typescript
key.upArrow
key.downArrow
key.leftArrow
key.rightArrow
key.return
key.escape
key.ctrl
key.shift
key.meta
```

---

## M

### Main Axis
The primary axis along which flex items are laid out. Determined by `flexDirection`.

- If `flexDirection="row"`, main axis is horizontal (→)
- If `flexDirection="column"`, main axis is vertical (↓)

### margin
Property that creates space **outside** a component, pushing other components away.

**Example:**
```typescript
<Box margin={2}>        {/* All sides */}
<Box marginX={2}>       {/* Horizontal */}
<Box marginY={1}>       {/* Vertical */}
<Box marginTop={1}>     {/* Individual sides */}
```

### maxHeight
Maximum height constraint for a Box. Content can be smaller but not larger.

### maxWidth
Maximum width constraint for a Box. Content can be smaller but not larger.

### minHeight
Minimum height constraint for a Box. Content must be at least this tall.

### minWidth
Minimum width constraint for a Box. Content must be at least this wide.

---

## N

### Newline
Ink component that creates a line break, similar to `<br>` in HTML.

**Example:**
```typescript
<Text>
  Line 1
  <Newline />
  Line 2
</Text>
```

### Node
JavaScript runtime built on Chrome's V8 engine. Required to run Ink applications.

---

## P

### padding
Property that creates space **inside** a component, between the border and content.

**Example:**
```typescript
<Box padding={2}>       {/* All sides */}
<Box paddingX={2}>      {/* Horizontal */}
<Box paddingY={1}>      {/* Vertical */}
<Box paddingTop={1}>    {/* Individual sides */}
```

### Props
Properties passed to React components. Similar to function parameters.

**Example:**
```typescript
const Greeting = ({ name }) => (
  <Text>Hello {name}!</Text>
);

<Greeting name="World" />
```

---

## R

### React
JavaScript library for building user interfaces using components. Ink uses React to build terminal UIs.

### render()
Ink function that renders a React component tree to the terminal.

**Example:**
```typescript
import { render } from 'ink';
render(<App />);
```

### REPL (Read-Eval-Print Loop)
Interactive programming environment. Ink apps are not traditional REPLs but interactive CLI applications.

---

## S

### State
Data that changes over time in a React component. Managed with `useState` hook.

**Example:**
```typescript
const [count, setCount] = useState(0);
```

### stdin (Standard Input)
Input stream for reading user input. Accessed via `useStdin` hook.

### stdout (Standard Output)
Output stream for writing to the terminal. Accessed via `useStdout` hook.

**Example:**
```typescript
const { stdout } = useStdout();
console.log(stdout.columns); // Terminal width
```

---

## T

### Terminal
Text-based interface for interacting with computers. Also called command line, console, or shell.

### Text
Ink component for displaying text content. Similar to `<span>` in HTML.

**Properties:**
```typescript
<Text
  color="cyan"
  backgroundColor="blue"
  bold
  italic
  underline
  strikethrough
  dimColor
  inverse
>
```

### TypeScript
Typed superset of JavaScript that compiles to plain JavaScript. Provides type safety and better IDE support.

---

## U

### useApp
Ink hook that provides app lifecycle methods.

**Returns:** `{ exit }` - function to quit the app

### useInput
Ink hook that captures keyboard input in real-time.

**Signature:**
```typescript
useInput((input: string, key: Key) => void)
```

### useStdin
Ink hook that provides access to stdin (standard input).

**Returns:** `{ stdin, setRawMode }`

### useStdout
Ink hook that provides access to stdout (standard output) and terminal dimensions.

**Returns:** `{ stdout, write }`

---

## W

### width
Property that sets a fixed width for a Box (in terminal characters/columns).

**Example:**
```typescript
<Box width={50}> {/* 50 characters wide */}
```

---

## Y

### Yoga
Cross-platform layout engine that implements CSS Flexbox. Used by Ink, React Native, and other frameworks to calculate layouts.

**Created by:** Meta (Facebook)

**Core Algorithm:**
1. Measure - Calculate element sizes
2. Layout - Position elements using flexbox rules
3. Update - Recalculate when things change

---

## Common Abbreviations

- **CLI** - Command-Line Interface
- **JSX** - JavaScript XML
- **ANSI** - American National Standards Institute
- **REPL** - Read-Eval-Print Loop
- **stdin** - Standard Input
- **stdout** - Standard Output
- **stderr** - Standard Error
- **UI** - User Interface
- **UX** - User Experience

---

## See Also

- **TUTORIAL.md** - Comprehensive tutorial
- **CHEATSHEET.md** - Quick reference
- **README.md** - Getting started guide
- **LAYOUT_GUIDE.md** - Deep dive into Yoga layouts

---

**Use this glossary when you encounter unfamiliar terms!** 📖
