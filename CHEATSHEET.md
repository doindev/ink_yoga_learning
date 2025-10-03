# 📋 Ink + Yoga Cheat Sheet

Quick reference for all Ink and Yoga properties. Print this out or keep it handy!

---

## 🎨 Box Component Properties

### Layout Direction
```typescript
flexDirection="row"        // Horizontal (→)
flexDirection="column"     // Vertical (↓) [DEFAULT]
```

### Main Axis Alignment (justifyContent)
```typescript
justifyContent="flex-start"     // ╠══════    [DEFAULT]
justifyContent="center"         //    ═══    
justifyContent="flex-end"       //       ═══╣
justifyContent="space-between"  // ═   ═   ═
justifyContent="space-around"   //  ═  ═  ═ 
```

### Cross Axis Alignment (alignItems)
```typescript
alignItems="flex-start"    // Align to start [DEFAULT]
alignItems="center"        // Center alignment
alignItems="flex-end"      // Align to end
alignItems="stretch"       // Stretch to fill
```

### Flexible Sizing
```typescript
flexGrow={0}      // Don't grow [DEFAULT]
flexGrow={1}      // Grow to fill space
flexGrow={2}      // Grow 2x relative to flexGrow={1}

flexShrink={0}    // Don't shrink
flexShrink={1}    // Can shrink [DEFAULT]

flexBasis={20}    // Initial size before grow/shrink
flexBasis="auto"  // Use content size [DEFAULT]
```

### Spacing
```typescript
// Padding (inside)
padding={1}           // All sides
paddingX={1}          // Left + Right
paddingY={1}          // Top + Bottom
paddingTop={1}
paddingBottom={1}
paddingLeft={1}
paddingRight={1}

// Margin (outside)
margin={1}            // All sides
marginX={1}           // Left + Right
marginY={1}           // Top + Bottom
marginTop={1}
marginBottom={1}
marginLeft={1}
marginRight={1}
```

### Dimensions
```typescript
width={50}            // Fixed width
height={20}           // Fixed height
minWidth={30}         // Minimum width
maxWidth={100}        // Maximum width
minHeight={10}        // Minimum height
maxHeight={50}        // Maximum height
```

### Display
```typescript
display="flex"        // Show [DEFAULT]
display="none"        // Hide
```

---

## 🎨 Visual Properties

### Borders
```typescript
borderStyle="single"   // ┌─────┐
borderStyle="double"   // ╔═════╗
borderStyle="round"    // ╭─────╮
borderStyle="bold"     // ┏━━━━━┓
borderStyle="classic"  // +-----+
```

### Border Colors
```typescript
borderColor="black"
borderColor="red"
borderColor="green"
borderColor="yellow"
borderColor="blue"
borderColor="magenta"
borderColor="cyan"
borderColor="white"
borderColor="gray"
```

---

## 📝 Text Component Properties

### Basic Usage
```typescript
<Text>Normal text</Text>
<Text color="cyan">Colored text</Text>
<Text bold>Bold text</Text>
<Text italic>Italic text</Text>
<Text underline>Underlined text</Text>
<Text strikethrough>Strikethrough text</Text>
<Text dimColor>Dimmed text</Text>
```

### Colors
```typescript
color="black"      backgroundColor="black"
color="red"        backgroundColor="red"
color="green"      backgroundColor="green"
color="yellow"     backgroundColor="yellow"
color="blue"       backgroundColor="blue"
color="magenta"    backgroundColor="magenta"
color="cyan"       backgroundColor="cyan"
color="white"      backgroundColor="white"
color="gray"       backgroundColor="gray"
```

---

## 🎯 Common Patterns

### Center Everything
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

### Header/Content/Footer
```typescript
<Box flexDirection="column" height="100%">
  <Box flexGrow={0}>Header</Box>
  <Box flexGrow={1}>Content</Box>
  <Box flexGrow={0}>Footer</Box>
</Box>
```

### Sidebar + Main
```typescript
<Box flexDirection="row">
  <Box width={20}>Sidebar</Box>
  <Box flexGrow={1}>Main</Box>
</Box>
```

### Space Between Items
```typescript
<Box flexDirection="row" justifyContent="space-between">
  <Text>Left</Text>
  <Text>Right</Text>
</Box>
```

### Equal Columns
```typescript
<Box flexDirection="row">
  <Box flexGrow={1}>Col 1</Box>
  <Box flexGrow={1}>Col 2</Box>
  <Box flexGrow={1}>Col 3</Box>
</Box>
```

### Card Layout
```typescript
<Box 
  borderStyle="round" 
  borderColor="cyan"
  padding={2}
  marginX={1}
>
  <Text>Card Content</Text>
</Box>
```

---

## 🪝 Essential Hooks

### useInput - Keyboard Input
```typescript
import { useInput } from 'ink';

useInput((input, key) => {
  // Regular keys
  if (input === 'q') {
    // User pressed 'q'
  }
  
  // Special keys
  if (key.upArrow) { }
  if (key.downArrow) { }
  if (key.leftArrow) { }
  if (key.rightArrow) { }
  if (key.return) { }      // Enter
  if (key.escape) { }
  if (key.tab) { }
  if (key.backspace) { }
  if (key.delete) { }
});
```

### useApp - App Control
```typescript
import { useApp } from 'ink';

const { exit } = useApp();

// Exit the app
exit();

// Exit with error code
exit(new Error('Something went wrong'));
```

### useState - State Management
```typescript
import { useState } from 'react';

const [count, setCount] = useState(0);

// Update state
setCount(count + 1);
setCount(prev => prev + 1);
```

### useEffect - Side Effects
```typescript
import { useEffect } from 'react';

useEffect(() => {
  // Run on mount
  const timer = setInterval(() => {
    // Do something
  }, 1000);
  
  // Cleanup on unmount
  return () => clearInterval(timer);
}, []); // Empty deps = run once
```

---

## 🎮 Keyboard Input Reference

### Special Keys Object
```typescript
key.upArrow       // ↑
key.downArrow     // ↓
key.leftArrow     // ←
key.rightArrow    // →
key.pageUp        // Page Up
key.pageDown      // Page Down
key.return        // Enter
key.escape        // Esc
key.ctrl          // Ctrl pressed
key.shift         // Shift pressed
key.tab           // Tab
key.backspace     // Backspace
key.delete        // Delete
key.meta          // Cmd/Win key
```

### Input Examples
```typescript
useInput((input, key) => {
  // Letter keys
  if (input === 'a') { }
  if (input === 'A') { } // Shift+A
  
  // Numbers
  if (input === '1') { }
  
  // Symbols
  if (input === '+') { }
  if (input === ' ') { } // Space
  
  // Ctrl combinations
  if (key.ctrl && input === 'c') {
    // Ctrl+C
  }
});
```

---

## 🎨 Layout Decision Tree

```
START: Need to layout components?
│
├─ Which direction?
│  ├─ Horizontal → flexDirection="row"
│  └─ Vertical   → flexDirection="column" [default]
│
├─ How to space on MAIN axis?
│  ├─ Start       → justifyContent="flex-start" [default]
│  ├─ Center      → justifyContent="center"
│  ├─ End         → justifyContent="flex-end"
│  ├─ Spread      → justifyContent="space-between"
│  └─ Distribute  → justifyContent="space-around"
│
├─ How to align on CROSS axis?
│  ├─ Start   → alignItems="flex-start" [default]
│  ├─ Center  → alignItems="center"
│  ├─ End     → alignItems="flex-end"
│  └─ Stretch → alignItems="stretch"
│
├─ Should it grow?
│  ├─ No  → flexGrow={0} [default]
│  └─ Yes → flexGrow={1} or higher
│
└─ Need spacing?
   ├─ Inside  → padding={n}
   └─ Outside → margin={n}
```

---

## 🐛 Debugging Tips

### Add Borders to See Layout
```typescript
// Temporarily add borders to debug
<Box borderStyle="single" borderColor="red">
  <Box borderStyle="single" borderColor="blue">
    <Text>Content</Text>
  </Box>
</Box>
```

### Check Parent Container
```typescript
// If flexGrow not working, check parent has size
<Box width={100}> {/* Parent needs width! */}
  <Box flexGrow={1}> {/* Now this works */}
    Content
  </Box>
</Box>
```

### Verify flexDirection
```typescript
// Always know your direction!
<Box flexDirection="row"> {/* Horizontal */}
  {/* justifyContent = left/right */}
  {/* alignItems = top/bottom */}
</Box>
```

---

## 📊 Flex Math

### flexGrow Distribution

Total flexGrow = Sum of all children's flexGrow values

Each child gets: `(childFlexGrow / totalFlexGrow) × availableSpace`

**Example:**
```typescript
<Box width={100}>
  <Box flexGrow={1}>  // Gets 1/4 = 25%
  <Box flexGrow={2}>  // Gets 2/4 = 50%
  <Box flexGrow={1}>  // Gets 1/4 = 25%
</Box>

Total flexGrow = 1 + 2 + 1 = 4
Box 1: (1/4) × 100 = 25 chars
Box 2: (2/4) × 100 = 50 chars
Box 3: (1/4) × 100 = 25 chars
```

---

## 🎓 Quick Tips

1. **Always set flexDirection first** - it determines your axes
2. **Use flexGrow for responsive layouts** - adapts to terminal size
3. **Padding before margin** - internal space, then external
4. **Center with both properties** - justifyContent + alignItems
5. **Add borders when debugging** - makes layout visible
6. **Extract common patterns** - DRY your components
7. **Test different terminal sizes** - layouts should adapt

---

## 📚 Resources

- **Ink Docs:** https://github.com/vadimdemedes/ink
- **Yoga Playground:** https://yogalayout.com/playground
- **CSS Flexbox Guide:** https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **React Hooks:** https://react.dev/reference/react

---

## 💡 Remember

> "Yoga calculates, you just describe!"

Instead of calculating exact positions, describe your intent with flexbox properties and let Yoga do the heavy lifting.

Happy building! 🚀
