# 📋 Ink + Yoga Quick Reference

A cheat sheet for building terminal UIs. Keep this handy while coding!

---

## Essential Imports

```typescript
import React, { useState, useEffect } from 'react';
import { render, Box, Text, useInput, useApp } from 'ink';
```

---

## Core Components

### Box - Layout Container

```typescript
<Box
  // Layout direction
  flexDirection="row" | "column"           // Default: "column"
  
  // Main axis alignment
  justifyContent="flex-start"              // Default
                 "center"
                 "flex-end"
                 "space-between"
                 "space-around"
  
  // Cross axis alignment
  alignItems="flex-start"                  // Default
            "center"
            "flex-end"
            "stretch"
  
  // Flexible sizing
  flexGrow={number}                        // Default: 0
  flexShrink={number}                      // Default: 1
  flexBasis={number | string}              // Default: "auto"
  
  // Fixed dimensions
  width={number | string}
  height={number | string}
  minWidth={number}
  minHeight={number}
  maxWidth={number}
  maxHeight={number}
  
  // Spacing - All sides
  padding={number}
  margin={number}
  
  // Spacing - Directional
  paddingX={number}                        // Horizontal
  paddingY={number}                        // Vertical
  paddingTop={number}
  paddingBottom={number}
  paddingLeft={number}
  paddingRight={number}
  
  marginX={number}
  marginY={number}
  marginTop={number}
  marginBottom={number}
  marginLeft={number}
  marginRight={number}
  
  // Visual
  borderStyle="single" | "double" | "round" | "bold" | "classic"
  borderColor="black" | "red" | "green" | "yellow" | "blue"
              "magenta" | "cyan" | "white" | "gray"
  
  // Display
  display="flex" | "none"
>
  {children}
</Box>
```

### Text - Text Content

```typescript
<Text
  // Colors
  color="black" | "red" | "green" | "yellow" | "blue"
        "magenta" | "cyan" | "white" | "gray"
  
  backgroundColor="same as color"
  
  // Styles
  bold={boolean}
  italic={boolean}
  underline={boolean}
  strikethrough={boolean}
  inverse={boolean}                        // Swap fg/bg colors
  dimColor={boolean}                       // Dim color
  
  // Wrapping
  wrap="wrap" | "truncate" | "truncate-end" | "truncate-middle" | "truncate-start"
>
  Text content here
</Text>
```

### Newline - Line Break

```typescript
<Text>
  First line
  <Newline />
  Second line
</Text>
```

---

## Essential Hooks

### useInput - Keyboard Input

```typescript
import { useInput } from 'ink';

useInput((input, key) => {
  // input: string - The character typed
  // key: object - Special keys
  
  // Regular characters
  if (input === 'q') {
    // Handle 'q' key
  }
  
  // Arrow keys
  if (key.upArrow) { }
  if (key.downArrow) { }
  if (key.leftArrow) { }
  if (key.rightArrow) { }
  
  // Special keys
  if (key.return) { }          // Enter
  if (key.escape) { }          // Esc
  if (key.ctrl) { }            // Ctrl pressed
  if (key.shift) { }           // Shift pressed
  if (key.tab) { }             // Tab
  if (key.backspace) { }       // Backspace
  if (key.delete) { }          // Delete
  if (key.pageUp) { }          // Page Up
  if (key.pageDown) { }        // Page Down
});
```

### useApp - Application Control

```typescript
import { useApp } from 'ink';

const { exit } = useApp();

// Exit the application
exit();
```

### useState - State Management

```typescript
import { useState } from 'react';

const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [items, setItems] = useState<Item[]>([]);
```

### useEffect - Side Effects

```typescript
import { useEffect } from 'react';

useEffect(() => {
  // Runs after render
  
  return () => {
    // Cleanup function
  };
}, [dependencies]);
```

---

## Common Patterns

### Centered Content

```typescript
<Box
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  height={process.stdout.rows}
>
  <Text>Centered!</Text>
</Box>
```

### Header + Content + Footer

```typescript
<Box flexDirection="column" height={process.stdout.rows}>
  <Box flexGrow={0}>{/* Header */}</Box>
  <Box flexGrow={1}>{/* Content */}</Box>
  <Box flexGrow={0}>{/* Footer */}</Box>
</Box>
```

### Sidebar + Main

```typescript
<Box flexDirection="row" height={process.stdout.rows}>
  <Box width={20}>{/* Sidebar */}</Box>
  <Box flexGrow={1}>{/* Main */}</Box>
</Box>
```

### Grid Layout

```typescript
<Box flexDirection="column">
  <Box flexDirection="row">
    <Box flexGrow={1} marginX={1}>{/* Cell */}</Box>
    <Box flexGrow={1} marginX={1}>{/* Cell */}</Box>
    <Box flexGrow={1} marginX={1}>{/* Cell */}</Box>
  </Box>
</Box>
```

### List with Selection

```typescript
const [selected, setSelected] = useState(0);

useInput((input, key) => {
  if (key.upArrow) setSelected(Math.max(0, selected - 1));
  if (key.downArrow) setSelected(Math.min(items.length - 1, selected + 1));
});

return (
  <Box flexDirection="column">
    {items.map((item, i) => (
      <Text key={i} color={i === selected ? 'cyan' : 'white'}>
        {i === selected ? '▶ ' : '  '}{item}
      </Text>
    ))}
  </Box>
);
```

### Modal / Dialog

```typescript
<Box
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  height={process.stdout.rows}
>
  <Box
    borderStyle="double"
    borderColor="yellow"
    padding={2}
    minWidth={40}
  >
    <Text>Modal Content</Text>
  </Box>
</Box>
```

### Loading Spinner

```typescript
import Spinner from 'ink-spinner';

<Box>
  <Text>
    <Spinner type="dots" /> Loading...
  </Text>
</Box>
```

### Text Input

```typescript
import TextInput from 'ink-text-input';

const [value, setValue] = useState('');

<Box>
  <Text>Name: </Text>
  <TextInput
    value={value}
    onChange={setValue}
    onSubmit={handleSubmit}
  />
</Box>
```

### Select Input

```typescript
import SelectInput from 'ink-select-input';

const items = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' }
];

<SelectInput
  items={items}
  onSelect={handleSelect}
/>
```

---

## Flexbox Cheat Sheet

### Main Axis vs Cross Axis

```
flexDirection="row"
┌─────────────────────┐
│ Main Axis →         │
│      ↓              │
│   Cross Axis        │
└─────────────────────┘

flexDirection="column"
┌─────────────────────┐
│ Main Axis           │
│    ↓                │
│    ↓   → Cross Axis │
└─────────────────────┘
```

### justifyContent (Main Axis)

```typescript
"flex-start"      [A][B][C]              
"center"                 [A][B][C]       
"flex-end"                      [A][B][C]
"space-between"   [A]      [B]      [C]  
"space-around"      [A]    [B]    [C]    
```

### alignItems (Cross Axis)

```typescript
"flex-start"      [A]
                  [B]
                  [C]

"center"            [A]
                    [B]
                    [C]

"flex-end"                   [A]
                             [B]
                             [C]
```

### flexGrow Distribution

```typescript
// All equal (flexGrow=1)
<Box flexGrow={1}>[==A==]</Box>
<Box flexGrow={1}>[==B==]</Box>
<Box flexGrow={1}>[==C==]</Box>

// A gets double (flexGrow=2)
<Box flexGrow={2}>[====A====]</Box>
<Box flexGrow={1}>[==B==]</Box>
<Box flexGrow={1}>[==C==]</Box>

// Only A grows (others flexGrow=0)
<Box flexGrow={1}>[========A========]</Box>
<Box flexGrow={0}>[B]</Box>
<Box flexGrow={0}>[C]</Box>
```

---

## Color Reference

### Text Colors

```typescript
<Text color="black">Black</Text>
<Text color="red">Red</Text>
<Text color="green">Green</Text>
<Text color="yellow">Yellow</Text>
<Text color="blue">Blue</Text>
<Text color="magenta">Magenta</Text>
<Text color="cyan">Cyan</Text>
<Text color="white">White</Text>
<Text color="gray">Gray</Text>
```

### Border Styles

```typescript
borderStyle="single"     ┌─────┐
                         │     │
                         └─────┘

borderStyle="double"     ╔═════╗
                         ║     ║
                         ╚═════╝

borderStyle="round"      ╭─────╮
                         │     │
                         ╰─────╯

borderStyle="bold"       ┏━━━━━┓
                         ┃     ┃
                         ┗━━━━━┛

borderStyle="classic"    +-----+
                         |     |
                         +-----+
```

---

## Terminal Info

### Get Terminal Size

```typescript
const width = process.stdout.columns;
const height = process.stdout.rows;

<Box width={width} height={height}>
  {/* Full screen */}
</Box>
```

### Exit Codes

```typescript
process.exit(0);  // Success
process.exit(1);  // Error
```

---

## Debugging Tips

### Add Borders to See Layout

```typescript
// Temporarily add borders to understand layout
<Box borderStyle="single" borderColor="red">
  <Box borderStyle="single" borderColor="blue">
    <Text>Content</Text>
  </Box>
</Box>
```

### Log to stderr (not stdout)

```typescript
// Don't use console.log - it interferes with Ink
console.error('Debug info');  // Goes to stderr
```

### Use Ink DevTools

```typescript
// In development
import { render } from 'ink';

const { waitUntilExit } = render(<App />);
await waitUntilExit();
```

---

## Common Pitfalls

### ❌ Text doesn't wrap automatically

```typescript
// Bad - text will overflow
<Box width={20}>
  <Text>Very long text that goes beyond width</Text>
</Box>

// Good - use maxWidth instead
<Box maxWidth={20}>
  <Text>Very long text will wrap</Text>
</Box>
```

### ❌ flexGrow without container size

```typescript
// Bad - no size to grow into
<Box flexDirection="row">
  <Box flexGrow={1}>Won't grow</Box>
</Box>

// Good - container has size
<Box flexDirection="row" width={60}>
  <Box flexGrow={1}>Will grow</Box>
</Box>
```

### ❌ Wrong axis for justifyContent

```typescript
// Bad - trying to center horizontally with column
<Box flexDirection="column" justifyContent="center">
  <Text>Not centered horizontally!</Text>
</Box>

// Good - use alignItems for cross axis
<Box flexDirection="column" alignItems="center">
  <Text>Centered horizontally!</Text>
</Box>
```

---

## Performance Tips

1. **Minimize re-renders** - Use React.memo for static components
2. **Avoid inline functions** - Define handlers outside render
3. **Use keys in lists** - Help React identify changes
4. **Lazy load components** - Don't render everything at once

---

## Useful Packages

```bash
# Text input
npm install ink-text-input

# Select input
npm install ink-select-input

# Spinner
npm install ink-spinner

# Progress bar
npm install ink-progress-bar

# Table
npm install ink-table

# Gradient text
npm install ink-gradient

# Big text
npm install ink-big-text

# Link (clickable URLs)
npm install ink-link
```

---

**Keep this reference handy while building!** 🚀

For more details, see:
- TUTORIAL.md - Complete guide
- README.md - Project overview
- Source code - All lessons are heavily commented
