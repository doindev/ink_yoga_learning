# 🎓 Complete Ink + Yoga Tutorial Guide

This comprehensive guide explains every concept you need to master terminal UI development with Ink and Yoga.

---

## Table of Contents

1. [What is Ink?](#what-is-ink)
2. [What is Yoga?](#what-is-yoga)
3. [The Box Component](#the-box-component)
4. [Flexbox Fundamentals](#flexbox-fundamentals)
5. [Layout Properties Reference](#layout-properties-reference)
6. [Common Patterns](#common-patterns)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)

---

## What is Ink?

### Overview
Ink is a React renderer for building command-line interfaces. Instead of rendering to the browser DOM, Ink renders React components to your terminal.

### How It Works

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Your React Code                                    │
│  (Components, JSX, Hooks)                          │
│                                                     │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Ink Renderer                                       │
│  (Converts React to Terminal Output)                │
│                                                     │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Yoga Layout Engine                                 │
│  (Calculates Positions & Sizes)                     │
│                                                     │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│                                                     │
│  ANSI Escape Codes                                  │
│  (Terminal Drawing Commands)                        │
│                                                     │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Your Terminal                                      │
│  (Beautiful UI!)                                    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Key Concepts

**1. Same React You Know**
```typescript
// This is just React!
import React, { useState } from 'react';
import { Box, Text } from 'ink';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Box>
      <Text>Count: {count}</Text>
    </Box>
  );
};
```

**2. Terminal-Specific Components**
- `Box` - Layout container (like `<div>`)
- `Text` - Text content (like `<span>`)
- `Newline` - Line break (like `<br>`)

**3. React Hooks Work**
```typescript
// All React hooks work in Ink!
const [state, setState] = useState();
useEffect(() => {}, []);
const value = useContext(MyContext);
const memoized = useMemo(() => {}, []);
```

**4. Ink-Specific Hooks**
```typescript
// Special hooks for terminal features
useInput((input, key) => {
  // Handle keyboard input
});

const { exit } = useApp();
// exit() to quit the app
```

---

## What is Yoga?

### Overview
Yoga is a cross-platform layout engine that implements the CSS Flexbox specification. It's the same engine used by React Native!

### Why Yoga Matters

Without Yoga, you'd have to manually calculate positions:
```typescript
// Without Yoga - painful!
const box1Position = { x: 0, y: 0 };
const box2Position = { x: 20, y: 0 };
const box3Position = { x: 40, y: 0 };
// What if the terminal resizes? 😱
```

With Yoga, you describe intent:
```typescript
// With Yoga - delightful!
<Box flexDirection="row">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Box>
// Yoga handles all positioning automatically! 🎉
```

### Yoga's Job

1. **Measure** - Calculate the size of each element
2. **Layout** - Position elements based on flexbox rules
3. **Update** - Recalculate when things change

### CSS Flexbox Knowledge Transfers

If you know CSS Flexbox, you already know Yoga:

| CSS Property | Yoga/Ink Property | Same? |
|--------------|-------------------|-------|
| flex-direction | flexDirection | ✅ Yes |
| justify-content | justifyContent | ✅ Yes |
| align-items | alignItems | ✅ Yes |
| flex-grow | flexGrow | ✅ Yes |
| padding | padding | ✅ Yes |
| margin | margin | ✅ Yes |

---

## The Box Component

### What is Box?

Box is Ink's fundamental building block. It's like `<div>` in HTML - a container for layout.

### Basic Usage

```typescript
// Empty box
<Box>
  <Text>Content</Text>
</Box>

// Box with props
<Box
  flexDirection="column"
  padding={2}
  borderStyle="round"
  borderColor="cyan"
>
  <Text>Content</Text>
</Box>
```

### All Box Properties

#### Layout Properties
```typescript
<Box
  // Direction
  flexDirection="row" | "column"
  
  // Alignment
  justifyContent="flex-start" | "center" | "flex-end" | "space-between" | "space-around"
  alignItems="flex-start" | "center" | "flex-end" | "stretch"
  
  // Sizing
  flexGrow={number}
  flexShrink={number}
  flexBasis={number | string}
  
  // Dimensions
  width={number | string}
  height={number | string}
  minWidth={number}
  minHeight={number}
  maxWidth={number}
  maxHeight={number}
  
  // Spacing
  padding={number}
  paddingX={number}
  paddingY={number}
  paddingTop={number}
  paddingBottom={number}
  paddingLeft={number}
  paddingRight={number}
  
  margin={number}
  marginX={number}
  marginY={number}
  marginTop={number}
  marginBottom={number}
  marginLeft={number}
  marginRight={number}
>
```

#### Visual Properties
```typescript
<Box
  // Border
  borderStyle="single" | "double" | "round" | "bold" | "classic"
  borderColor="red" | "green" | "blue" | "yellow" | "cyan" | "magenta" | "white" | "gray"
  
  // Display
  display="flex" | "none"
>
```

---

## Flexbox Fundamentals

### The Two Axes

Every flexbox layout has two axes:

```
flexDirection="row"
┌─────────────────────────────────────┐
│                                     │
│  Main Axis →→→→→→→→→→               │
│       ↓                             │
│   Cross Axis                        │
│                                     │
└─────────────────────────────────────┘

flexDirection="column"
┌─────────────────────────────────────┐
│                                     │
│  Main Axis       Cross Axis         │
│      ↓              →               │
│      ↓                              │
│      ↓                              │
│                                     │
└─────────────────────────────────────┘
```

### flexDirection

Controls which direction children flow:

**Row (Horizontal)**
```typescript
<Box flexDirection="row">
  <Text>A</Text>
  <Text>B</Text>
  <Text>C</Text>
</Box>

// Output: A B C
```

**Column (Vertical)**
```typescript
<Box flexDirection="column">
  <Text>A</Text>
  <Text>B</Text>
  <Text>C</Text>
</Box>

// Output:
// A
// B
// C
```

### justifyContent

Controls position along the **main axis**:

```typescript
// flex-start (default)
<Box flexDirection="row" justifyContent="flex-start">
[A][B][C]              

// center
<Box flexDirection="row" justifyContent="center">
       [A][B][C]       

// flex-end
<Box flexDirection="row" justifyContent="flex-end">
              [A][B][C]

// space-between
<Box flexDirection="row" justifyContent="space-between">
[A]      [B]      [C]

// space-around
<Box flexDirection="row" justifyContent="space-around">
  [A]    [B]    [C]  
```

### alignItems

Controls position along the **cross axis**:

```typescript
// flexDirection="row" with different alignItems

// flex-start
<Box flexDirection="row" alignItems="flex-start" height={5}>
[A][B][C]
│  │  │
│  │  │
│  │  │

// center
<Box flexDirection="row" alignItems="center" height={5}>
│  │  │
[A][B][C]
│  │  │

// flex-end
<Box flexDirection="row" alignItems="flex-end" height={5}>
│  │  │
│  │  │
[A][B][C]
```

### flexGrow

Controls how much space an item should take:

```typescript
// Without flexGrow - items use their natural size
<Box flexDirection="row" width={60}>
  <Box>[A]</Box>
  <Box>[B]</Box>
  <Box>[C]</Box>
</Box>
// Result: [A][B][C]                                    

// With flexGrow - items share remaining space
<Box flexDirection="row" width={60}>
  <Box flexGrow={1}>[A]</Box>
  <Box flexGrow={1}>[B]</Box>
  <Box flexGrow={1}>[C]</Box>
</Box>
// Result: [       A       ][       B       ][       C       ]

// Different flexGrow values - proportional distribution
<Box flexDirection="row" width={60}>
  <Box flexGrow={2}>[A]</Box>
  <Box flexGrow={1}>[B]</Box>
  <Box flexGrow={1}>[C]</Box>
</Box>
// Result: [          A          ][     B     ][     C     ]
//         (50% of space)        (25%)        (25%)
```

### Padding vs Margin

**Padding** - Space INSIDE the component:
```typescript
<Box borderStyle="single" padding={2}>
  <Text>Content</Text>
</Box>

// ┌────────────────┐
// │                │  ← Padding
// │   Content      │
// │                │  ← Padding
// └────────────────┘
```

**Margin** - Space OUTSIDE the component:
```typescript
<Box>
  <Box borderStyle="single" margin={2}>
    <Text>Box 1</Text>
  </Box>
  <Box borderStyle="single" margin={2}>
    <Text>Box 2</Text>
  </Box>
</Box>

//         ← Margin
// ┌──────────┐
// │  Box 1   │
// └──────────┘
//         ← Margin (between boxes)
// ┌──────────┐
// │  Box 2   │
// └──────────┘
//         ← Margin
```

---

## Layout Properties Reference

### Complete Property Guide

#### flexDirection
**Values:** `"row"` | `"column"` (default: `"column"`)  
**Controls:** Direction children are laid out  
**When to use:** Always your first decision in layout

```typescript
// Horizontal
<Box flexDirection="row">

// Vertical (default)
<Box flexDirection="column">
```

#### justifyContent
**Values:** `"flex-start"` | `"center"` | `"flex-end"` | `"space-between"` | `"space-around"`  
**Controls:** Spacing along main axis  
**When to use:** Centering, distributing items

```typescript
// Centered
<Box flexDirection="row" justifyContent="center">

// Pushed to ends
<Box flexDirection="row" justifyContent="space-between">
```

#### alignItems
**Values:** `"flex-start"` | `"center"` | `"flex-end"` | `"stretch"`  
**Controls:** Alignment along cross axis  
**When to use:** Vertical/horizontal centering

```typescript
// Vertically centered (when row)
<Box flexDirection="row" alignItems="center">

// Horizontally centered (when column)
<Box flexDirection="column" alignItems="center">
```

#### flexGrow
**Values:** number (default: 0)  
**Controls:** How much item grows relative to siblings  
**When to use:** Responsive layouts, filling space

```typescript
// Takes all available space
<Box flexGrow={1}>

// Takes twice as much as siblings with flexGrow={1}
<Box flexGrow={2}>
```

#### padding
**Values:** number  
**Controls:** Space inside the component  
**When to use:** Creating breathing room for content

```typescript
// All sides
<Box padding={2}>

// Horizontal only
<Box paddingX={2}>

// Vertical only
<Box paddingY={2}>

// Individual sides
<Box paddingTop={1} paddingBottom={2}>
```

#### margin
**Values:** number  
**Controls:** Space outside the component  
**When to use:** Separating components

```typescript
// All sides
<Box margin={2}>

// Between items
<Box marginY={1}>
```

#### width / height
**Values:** number | string  
**Controls:** Fixed dimensions  
**When to use:** Fixed-size components

```typescript
<Box width={50} height={10}>

// Percentage (as string)
<Box width="50%">
```

---

## Common Patterns

### 1. Centered Content

```typescript
<Box
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  height={20}
>
  <Text>Perfectly Centered!</Text>
</Box>
```

### 2. Header/Content/Footer

```typescript
<Box flexDirection="column" height="100%">
  {/* Header - fixed height */}
  <Box flexGrow={0} borderStyle="single">
    <Text>Header</Text>
  </Box>

  {/* Content - grows to fill */}
  <Box flexGrow={1}>
    <Text>Main Content</Text>
  </Box>

  {/* Footer - fixed height */}
  <Box flexGrow={0} borderStyle="single">
    <Text>Footer</Text>
  </Box>
</Box>
```

### 3. Sidebar Layout

```typescript
<Box flexDirection="row" height="100%">
  {/* Sidebar - fixed width */}
  <Box width={20} borderStyle="single">
    <Text>Navigation</Text>
  </Box>

  {/* Main content - grows */}
  <Box flexGrow={1}>
    <Text>Content</Text>
  </Box>
</Box>
```

### 4. Card Grid

```typescript
<Box flexDirection="column">
  <Box flexDirection="row">
    <Box flexGrow={1} marginX={1}>Card 1</Box>
    <Box flexGrow={1} marginX={1}>Card 2</Box>
    <Box flexGrow={1} marginX={1}>Card 3</Box>
  </Box>
  <Box flexDirection="row">
    <Box flexGrow={1} marginX={1}>Card 4</Box>
    <Box flexGrow={1} marginX={1}>Card 5</Box>
    <Box flexGrow={1} marginX={1}>Card 6</Box>
  </Box>
</Box>
```

### 5. Form Layout

```typescript
<Box flexDirection="column">
  <Box flexDirection="row" marginY={1}>
    <Box width={15}>
      <Text>Name:</Text>
    </Box>
    <Box flexGrow={1} borderStyle="single">
      <Text>John Doe</Text>
    </Box>
  </Box>

  <Box flexDirection="row" marginY={1}>
    <Box width={15}>
      <Text>Email:</Text>
    </Box>
    <Box flexGrow={1} borderStyle="single">
      <Text>john@example.com</Text>
    </Box>
  </Box>
</Box>
```

---

## Best Practices

### 1. Start with flexDirection

Always decide on flexDirection first:
```typescript
// Good
<Box flexDirection="row">
  {/* Then add other properties */}
</Box>

// Confusing
<Box justifyContent="center" alignItems="flex-end">
  {/* What direction is this? */}
</Box>
```

### 2. Use flexGrow for Responsive Layouts

```typescript
// Good - adapts to terminal size
<Box flexDirection="row">
  <Box width={20}>Sidebar</Box>
  <Box flexGrow={1}>Content</Box>
</Box>

// Bad - might overflow or underutilize space
<Box flexDirection="row">
  <Box width={20}>Sidebar</Box>
  <Box width={80}>Content</Box>
</Box>
```

### 3. Add Padding Before Margin

```typescript
// Good - padding creates internal space first
<Box borderStyle="single" padding={2} marginY={1}>
  <Text>Content</Text>
</Box>
```

### 4. Use Descriptive Component Names

```typescript
// Good
const Sidebar = () => (
  <Box width={20}>...</Box>
);

const MainContent = () => (
  <Box flexGrow={1}>...</Box>
);

// Bad
const Box1 = () => ...
const Box2 = () => ...
```

### 5. Extract Repeated Layouts

```typescript
// Good
const Card = ({ children }) => (
  <Box
    borderStyle="round"
    padding={2}
    marginX={1}
    flexGrow={1}
  >
    {children}
  </Box>
);

// Then use it
<Card>Content 1</Card>
<Card>Content 2</Card>
```

---

## Troubleshooting

### Content Not Centering?

**Problem:**
```typescript
<Box justifyContent="center">
  <Text>Why am I not centered?</Text>
</Box>
```

**Solution:** Set a height and use both properties:
```typescript
<Box 
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  height={20}
>
  <Text>Now I'm centered!</Text>
</Box>
```

### Content Overflowing?

**Problem:**
```typescript
<Box width={20}>
  <Text>This is a very long text that will overflow</Text>
</Box>
```

**Solution:** Text doesn't auto-wrap. Use maxWidth instead:
```typescript
<Box maxWidth={20}>
  <Text>This text will wrap correctly</Text>
</Box>
```

### flexGrow Not Working?

**Problem:**
```typescript
<Box flexDirection="row">
  <Box flexGrow={1}>Why am I not growing?</Box>
</Box>
```

**Solution:** Parent needs a defined size:
```typescript
<Box flexDirection="row" width={60}>
  <Box flexGrow={1}>Now I grow!</Box>
</Box>
```

### Margin Not Visible?

**Problem:**
```typescript
<Box margin={5}>
  <Text>Where's my margin?</Text>
</Box>
```

**Solution:** Add a border or check the parent container:
```typescript
<Box borderStyle="double" borderColor="red">
  <Box margin={5} borderStyle="single">
    <Text>Now you can see the margin!</Text>
  </Box>
</Box>
```

---

## Next Steps

1. **Run the learning platform** - `npm run dev`
2. **Complete all lessons** - Work through each interactive lesson
3. **Experiment in playground** - Try different property combinations
4. **Build something** - Create your own CLI tool
5. **Read Ink docs** - Explore advanced features
6. **Study examples** - Look at open-source Ink projects

Remember: The best way to learn is by doing! 🚀
