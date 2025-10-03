# 📋 Ink + Yoga Quick Reference Cheat Sheet

Your go-to reference for all Ink and Yoga properties.

---

## 🎨 Box Component Properties

### Layout Direction

```typescript
flexDirection="row"     // Horizontal →
flexDirection="column"  // Vertical ↓ (default)
```

### Main Axis Alignment (justifyContent)

```typescript
justifyContent="flex-start"    // ◀────────────
justifyContent="center"        // ────▶◀────
justifyContent="flex-end"      // ────────────▶
justifyContent="space-between" // ◀──────▶──────▶
justifyContent="space-around"  // ──◀────▶────▶──
```

### Cross Axis Alignment (alignItems)

```typescript
alignItems="flex-start"  // Align to start
alignItems="center"      // Center align
alignItems="flex-end"    // Align to end
alignItems="stretch"     // Stretch to fill
```

### Flexible Sizing

```typescript
flexGrow={0}     // Don't grow (default)
flexGrow={1}     // Grow proportionally
flexGrow={2}     // Grow 2x compared to flexGrow={1}

flexShrink={0}   // Don't shrink
flexShrink={1}   // Can shrink (default)

flexBasis={20}   // Initial size before growing/shrinking
flexBasis="auto" // Use content size (default)
```

### Spacing

```typescript
// Padding (space inside)
padding={1}           // All sides
paddingX={2}          // Horizontal (left + right)
paddingY={1}          // Vertical (top + bottom)
paddingTop={1}
paddingBottom={1}
paddingLeft={2}
paddingRight={2}

// Margin (space outside)
margin={1}            // All sides
marginX={2}           // Horizontal
marginY={1}           // Vertical
marginTop={1}
marginBottom={1}
marginLeft={2}
marginRight={2}
```

### Dimensions

```typescript
width={50}        // Fixed width (characters)
height={10}       // Fixed height (lines)
minWidth={20}     // Minimum width
minHeight={5}     // Minimum height
maxWidth={100}    // Maximum width
maxHeight={20}    // Maximum height
```

### Visual Style

```typescript
// Borders
borderStyle="single"  // ┌─┐
borderStyle="double"  // ╔═╗
borderStyle="round"   // ╭─╮
borderStyle="bold"    // ┏━┓
borderStyle="classic" // +-+

// Border Colors
borderColor="red"
borderColor="green"
borderColor="yellow"
borderColor="blue"
borderColor="magenta"
borderColor="cyan"
borderColor="white"
borderColor="gray"
borderColor="black"

// Display
display="flex"  // Visible (default)
display="none"  // Hidden
```

---

## 📝 Text Component Properties

```typescript
<Text
  color="cyan"           // Text color
  backgroundColor="blue" // Background color
  bold                   // Bold text
  italic                 // Italic text
  underline              // Underlined text
  strikethrough          // Strikethrough text
  inverse                // Invert colors
  dimColor               // Dimmed appearance
  wrap="wrap"           // Text wrapping ("wrap", "truncate", "truncate-end")
>
  Content
</Text>
```

### Available Colors

```
black, red, green, yellow, blue, magenta, cyan, white, gray
```

---

## 🎣 Ink Hooks

### useInput

```typescript
import { useInput } from 'ink';

useInput((input, key) => {
  // input: The character typed ('a', '1', etc.)
  // key: Object with special keys
  
  if (input === 'q') {
    // Handle 'q' key
  }
  
  if (key.upArrow) {
    // Handle up arrow
  }
  
  if (key.return) {
    // Handle enter/return
  }
  
  if (key.escape) {
    // Handle escape
  }
});
```

#### Key Object Properties

```typescript
key.upArrow      // ↑
key.downArrow    // ↓
key.leftArrow    // ←
key.rightArrow   // →
key.return       // Enter
key.escape       // Esc
key.ctrl         // Ctrl key held
key.shift        // Shift key held
key.tab          // Tab
key.backspace    // Backspace
key.delete       // Delete
key.pageDown     // Page Down
key.pageUp       // Page Up
key.meta         // Meta/Command key
```

### useApp

```typescript
import { useApp } from 'ink';

const { exit } = useApp();

// Exit the application
exit();

// Exit with error
exit(new Error('Something went wrong'));
```

### useStdout

```typescript
import { useStdout } from 'ink';

const { stdout, write } = useStdout();

// Get terminal dimensions
const { columns, rows } = stdout;

// Write directly to stdout
write('Direct output');
```

### useStdin

```typescript
import { useStdin } from 'ink';

const { stdin, isRawModeSupported, setRawMode } = useStdin();

// Enable raw mode for custom input handling
if (isRawModeSupported) {
  setRawMode(true);
}
```

### useFocus & useFocusManager

```typescript
import { useFocus, useFocusManager } from 'ink';

// In a component
const { isFocused } = useFocus();

// Manage focus
const { focus, focusNext, focusPrevious } = useFocusManager();
focus('component-id');
focusNext();
focusPrevious();
```

---

## 🎯 Common Patterns Cheat Sheet

### Center Content

```typescript
<Box
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  height={20}
>
  <Text>Centered!</Text>
</Box>
```

### Full-Width Header

```typescript
<Box
  borderStyle="double"
  borderColor="cyan"
  padding={1}
>
  <Box flexDirection="row" justifyContent="space-between">
    <Text bold>App Name</Text>
    <Text>Menu Items</Text>
  </Box>
</Box>
```

### Sidebar + Content

```typescript
<Box flexDirection="row" height="100%">
  <Box width={20} borderStyle="single">
    <Text>Sidebar</Text>
  </Box>
  <Box flexGrow={1}>
    <Text>Main Content</Text>
  </Box>
</Box>
```

### Equal Columns

```typescript
<Box flexDirection="row">
  <Box flexGrow={1} marginX={1}>Col 1</Box>
  <Box flexGrow={1} marginX={1}>Col 2</Box>
  <Box flexGrow={1} marginX={1}>Col 3</Box>
</Box>
```

### Proportional Columns

```typescript
<Box flexDirection="row">
  <Box flexGrow={2}>Large (2x)</Box>
  <Box flexGrow={1}>Small (1x)</Box>
  <Box flexGrow={1}>Small (1x)</Box>
</Box>
```

### Stacked Cards

```typescript
<Box flexDirection="column">
  <Box borderStyle="round" padding={2} marginY={1}>
    Card 1
  </Box>
  <Box borderStyle="round" padding={2} marginY={1}>
    Card 2
  </Box>
</Box>
```

### Modal Dialog

```typescript
<Box
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  height="100%"
>
  <Box
    borderStyle="double"
    borderColor="red"
    padding={2}
    minWidth={40}
  >
    <Text>Modal Content</Text>
  </Box>
</Box>
```

### Progress Bar

```typescript
<Box flexDirection="row" width={50}>
  <Box flexGrow={3} backgroundColor="green">
    <Text> </Text>
  </Box>
  <Box flexGrow={1} backgroundColor="gray">
    <Text> </Text>
  </Box>
</Box>
```

### List with Selection

```typescript
{items.map((item, index) => (
  <Box key={item.id}>
    <Text color={index === selected ? 'cyan' : 'white'}>
      {index === selected ? '▶ ' : '  '}
      {item.title}
    </Text>
  </Box>
))}
```

### Form Field

```typescript
<Box flexDirection="row" marginY={1}>
  <Box width={15}>
    <Text>Label:</Text>
  </Box>
  <Box flexGrow={1} borderStyle="single" paddingX={1}>
    <Text>{value}</Text>
  </Box>
</Box>
```

---

## 🔧 Debugging Tips

### Add Visible Borders

```typescript
// Temporarily add borders to see layout boundaries
<Box borderStyle="single" borderColor="red">
  <Text>Debug me</Text>
</Box>
```

### Check Dimensions

```typescript
import { useStdout } from 'ink';

const { stdout } = useStdout();
console.log(`Terminal: ${stdout.columns}x${stdout.rows}`);
```

### Log Layout Properties

```typescript
<Box
  onRender={(dimensions) => {
    console.log('Box dimensions:', dimensions);
  }}
>
  Content
</Box>
```

---

## ⚡ Performance Tips

### Use React.memo

```typescript
import React from 'react';

const MyComponent = React.memo(({ data }) => {
  return <Box>{data}</Box>;
});
```

### Avoid Inline Functions

```typescript
// Bad
<Box onClick={() => doSomething()}>

// Good
const handleClick = () => doSomething();
<Box onClick={handleClick}>
```

### Use Keys in Lists

```typescript
// Always provide keys
{items.map(item => (
  <Box key={item.id}>
    {item.name}
  </Box>
))}
```

---

## 📦 Useful Packages

### Official Ink Components

```bash
npm install ink-text-input      # Text input
npm install ink-select-input    # Select menu
npm install ink-spinner         # Loading spinner
npm install ink-progress-bar    # Progress bar
npm install ink-link            # Clickable links
npm install ink-gradient        # Gradient text
npm install ink-big-text        # Large ASCII text
```

### Community Packages

```bash
npm install ink-table           # Tables
npm install ink-divider         # Dividers
npm install ink-confirm-input   # Yes/No prompt
npm install ink-multi-select    # Multi-select menu
npm install pastel              # Ink framework
```

---

## 🎓 Learning Path

1. ✅ Understand Box and Text components
2. ✅ Master flexDirection
3. ✅ Learn justifyContent and alignItems
4. ✅ Practice with padding and margin
5. ✅ Use flexGrow for responsive layouts
6. ✅ Study real-world patterns
7. ✅ Build your own CLI app
8. ✅ Add interactivity with useInput
9. ✅ Handle state with React hooks
10. ✅ Publish to npm!

---

## 💡 Quick Problem Solvers

**Content not centering?**
→ Add `height` and use both `justifyContent="center"` and `alignItems="center"`

**Text overflowing?**
→ Use `maxWidth` instead of `width`, or set `wrap="wrap"` on Text

**flexGrow not working?**
→ Parent container needs a defined size

**Spacing looks wrong?**
→ Check if you meant `padding` (inside) or `margin` (outside)

**Layout breaking on resize?**
→ Use `flexGrow` instead of fixed widths

**Colors not showing?**
→ Check terminal color support with `chalk.supportsColor`

---

## 🚀 Quick Start Template

```typescript
#!/usr/bin/env node
import React, { useState } from 'react';
import { render, Box, Text, useInput, useApp } from 'ink';

const App = () => {
  const { exit } = useApp();
  const [count, setCount] = useState(0);

  useInput((input) => {
    if (input === 'q') exit();
    if (input === '+') setCount(c => c + 1);
    if (input === '-') setCount(c => c - 1);
  });

  return (
    <Box flexDirection="column" padding={1}>
      <Box borderStyle="round" padding={1}>
        <Text>Count: {count}</Text>
      </Box>
      <Box marginTop={1}>
        <Text dimColor>
          Press + or - to change, q to quit
        </Text>
      </Box>
    </Box>
  );
};

render(<App />);
```

---

## 📚 Additional Resources

- **Ink Docs:** https://github.com/vadimdemedes/ink
- **Yoga Docs:** https://yogalayout.com/docs
- **Flexbox Guide:** https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **React Docs:** https://react.dev

---

**💾 Save this file for quick reference while coding!**
