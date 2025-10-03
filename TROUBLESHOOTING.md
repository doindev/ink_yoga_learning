# 🔧 Troubleshooting Guide - Common Issues & Solutions

A comprehensive guide to solving common problems when building with Ink and Yoga.

---

## Table of Contents

1. [Layout Issues](#layout-issues)
2. [Rendering Problems](#rendering-problems)
3. [Input Handling](#input-handling)
4. [Performance Issues](#performance-issues)
5. [TypeScript Errors](#typescript-errors)
6. [Terminal Compatibility](#terminal-compatibility)

---

## Layout Issues

### Problem: Content Not Centering

**Symptoms:**
```typescript
<Box justifyContent="center">
  <Text>This isn't centered!</Text>
</Box>
```

**Why it happens:**  
The container needs a defined size for centering to work. Without dimensions, the Box shrinks to fit its content.

**Solutions:**

**✅ Solution 1: Add height and use both alignment properties**
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

**✅ Solution 2: Use parent dimensions**
```typescript
<Box flexDirection="column" height="100%">
  <Box 
    flexGrow={1}
    justifyContent="center"
    alignItems="center"
  >
    <Text>Centered!</Text>
  </Box>
</Box>
```

---

### Problem: flexGrow Not Working

**Symptoms:**
```typescript
<Box flexDirection="row">
  <Box flexGrow={1}>
    <Text>Why am I not growing?</Text>
  </Box>
</Box>
```

**Why it happens:**  
flexGrow only works when there's extra space to grow into. The parent must have a defined size.

**Solutions:**

**✅ Solution: Give parent a width**
```typescript
<Box flexDirection="row" width={60}>
  <Box flexGrow={1}>
    <Text>Now I grow to fill the width!</Text>
  </Box>
</Box>
```

**✅ Alternative: Make parent fill terminal**
```typescript
import { useStdout } from 'ink';

const { stdout } = useStdout();

<Box flexDirection="row" width={stdout.columns}>
  <Box flexGrow={1}>
    <Text>Responsive!</Text>
  </Box>
</Box>
```

---

### Problem: Text Overflowing Container

**Symptoms:**
```typescript
<Box width={20}>
  <Text>This is a very long text that goes beyond 20 characters</Text>
</Box>
```

**Why it happens:**  
Text doesn't automatically wrap or truncate in Ink. It will extend beyond the container.

**Solutions:**

**✅ Solution 1: Use maxWidth instead of width**
```typescript
<Box maxWidth={20}>
  <Text>This text will wrap at 20 characters</Text>
</Box>
```

**✅ Solution 2: Set wrap on Text**
```typescript
<Box width={20}>
  <Text wrap="wrap">
    This text will wrap properly
  </Text>
</Box>
```

**✅ Solution 3: Truncate text**
```typescript
<Box width={20}>
  <Text wrap="truncate">
    This text will be cut off...
  </Text>
</Box>
```

---

### Problem: Margin Not Visible

**Symptoms:**
```typescript
<Box margin={5}>
  <Text>Where's my margin?</Text>
</Box>
```

**Why it happens:**  
Margin is transparent space outside the component. Without a border or background, it's invisible.

**Solutions:**

**✅ Solution 1: Add borders to visualize**
```typescript
<Box borderStyle="double" borderColor="red">
  <Box margin={5} borderStyle="single">
    <Text>Now you can see the margin!</Text>
  </Box>
</Box>
```

**✅ Solution 2: Check parent container**
```typescript
// Make sure parent has enough space
<Box minHeight={20} borderStyle="single">
  <Box margin={5}>
    <Text>Margin is now visible</Text>
  </Box>
</Box>
```

---

### Problem: Uneven Column Widths

**Symptoms:**
```typescript
<Box flexDirection="row">
  <Box flexGrow={1}>Column 1</Box>
  <Box flexGrow={1}>Column 2</Box>
  <Box flexGrow={1}>Column 3</Box>
</Box>
// Columns aren't actually equal!
```

**Why it happens:**  
Content inside can affect size. If one column has more text, it might start larger.

**Solutions:**

**✅ Solution 1: Use flexBasis**
```typescript
<Box flexDirection="row">
  <Box flexGrow={1} flexBasis={0}>Column 1</Box>
  <Box flexGrow={1} flexBasis={0}>Column 2</Box>
  <Box flexGrow={1} flexBasis={0}>Column 3</Box>
</Box>
```

**✅ Solution 2: Set equal widths**
```typescript
import { useStdout } from 'ink';

const { stdout } = useStdout();
const columnWidth = Math.floor(stdout.columns / 3);

<Box flexDirection="row">
  <Box width={columnWidth}>Column 1</Box>
  <Box width={columnWidth}>Column 2</Box>
  <Box width={columnWidth}>Column 3</Box>
</Box>
```

---

## Rendering Problems

### Problem: Component Not Updating

**Symptoms:**
```typescript
const MyComponent = () => {
  let count = 0;
  
  useInput((input) => {
    if (input === '+') {
      count++; // This doesn't trigger re-render!
    }
  });
  
  return <Text>{count}</Text>;
};
```

**Why it happens:**  
Regular variables don't trigger re-renders. You must use React state.

**Solutions:**

**✅ Solution: Use useState**
```typescript
const MyComponent = () => {
  const [count, setCount] = useState(0);
  
  useInput((input) => {
    if (input === '+') {
      setCount(c => c + 1); // Triggers re-render
    }
  });
  
  return <Text>{count}</Text>;
};
```

---

### Problem: Flickering UI

**Symptoms:**  
The interface flashes or flickers rapidly during updates.

**Why it happens:**  
Too many re-renders or expensive recalculations on every render.

**Solutions:**

**✅ Solution 1: Use React.memo**
```typescript
const ExpensiveComponent = React.memo(({ data }) => {
  // Only re-renders when data changes
  return <Box>{data}</Box>;
});
```

**✅ Solution 2: Optimize with useMemo**
```typescript
const MyComponent = ({ items }) => {
  const sortedItems = useMemo(
    () => items.sort((a, b) => a.name.localeCompare(b.name)),
    [items]
  );
  
  return <Box>{/* render sortedItems */}</Box>;
};
```

**✅ Solution 3: Batch state updates**
```typescript
// Bad - multiple re-renders
setState1(value1);
setState2(value2);
setState3(value3);

// Good - single re-render with unstable_batchedUpdates
import { unstable_batchedUpdates } from 'react';

unstable_batchedUpdates(() => {
  setState1(value1);
  setState2(value2);
  setState3(value3);
});
```

---

### Problem: Content Cut Off at Bottom

**Symptoms:**  
When rendering long lists or content, the bottom is cut off and not visible.

**Why it happens:**  
Terminal has limited height. Content exceeds visible area.

**Solutions:**

**✅ Solution 1: Use scrolling logic**
```typescript
const [scrollOffset, setScrollOffset] = useState(0);
const { stdout } = useStdout();
const visibleItems = items.slice(scrollOffset, scrollOffset + stdout.rows - 5);

useInput((input, key) => {
  if (key.downArrow) {
    setScrollOffset(Math.min(scrollOffset + 1, items.length - 1));
  }
  if (key.upArrow) {
    setScrollOffset(Math.max(0, scrollOffset - 1));
  }
});

return (
  <Box flexDirection="column">
    {visibleItems.map(item => <Text key={item.id}>{item.name}</Text>)}
  </Box>
);
```

**✅ Solution 2: Use ink-select-input for lists**
```typescript
import SelectInput from 'ink-select-input';

const items = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  // ... many more items
];

<SelectInput items={items} onSelect={handleSelect} />
// Automatically handles scrolling!
```

---

## Input Handling

### Problem: Input Not Being Captured

**Symptoms:**
```typescript
useInput((input) => {
  console.log('This never runs!');
});
```

**Why it happens:**  
Either stdin is not in raw mode, or another component is capturing input first.

**Solutions:**

**✅ Solution 1: Check stdin mode**
```typescript
import { useStdin } from 'ink';

const { isRawModeSupported, setRawMode } = useStdin();

useEffect(() => {
  if (isRawModeSupported) {
    setRawMode(true);
  }
}, []);
```

**✅ Solution 2: Check component hierarchy**
```typescript
// Input captured by first matching component
// Put most specific handlers in child components

// Parent (less specific)
const Parent = () => {
  useInput((input) => {
    if (input === 'q') exit();
  });
  
  return <Child />;
};

// Child (more specific)
const Child = () => {
  useInput((input) => {
    // This runs first for Child component
    if (input === 'a') doSomething();
  });
  
  return <Box>Content</Box>;
};
```

---

### Problem: Special Keys Not Working

**Symptoms:**
```typescript
useInput((input, key) => {
  if (key.upArrow) {
    // This never fires!
  }
});
```

**Why it happens:**  
Terminal or OS might be intercepting special keys.

**Solutions:**

**✅ Solution: Provide alternative key bindings**
```typescript
useInput((input, key) => {
  // Support both arrow keys and letter alternatives
  if (key.upArrow || input === 'k') {
    moveUp();
  }
  if (key.downArrow || input === 'j') {
    moveDown();
  }
});
```

---

### Problem: Ctrl+C Not Exiting

**Symptoms:**  
Pressing Ctrl+C doesn't quit the application.

**Why it happens:**  
Ink captures Ctrl+C by default, but you might be blocking it.

**Solutions:**

**✅ Solution: Let Ink handle it (default behavior)**
```typescript
// Don't override Ctrl+C behavior
useInput((input, key) => {
  // Don't add: if (key.ctrl && input === 'c') ...
  // Let Ink handle Ctrl+C by default
});
```

**✅ Alternative: Implement your own**
```typescript
const { exit } = useApp();

useInput((input, key) => {
  if (key.ctrl && input === 'c') {
    // Do cleanup
    cleanupResources();
    exit();
  }
});
```

---

## Performance Issues

### Problem: Slow Rendering with Large Lists

**Symptoms:**  
Application becomes sluggish when rendering many items.

**Why it happens:**  
Rendering too many components at once.

**Solutions:**

**✅ Solution 1: Virtualize list**
```typescript
// Only render visible items
const { stdout } = useStdout();
const visibleCount = stdout.rows - 4; // Leave room for header/footer
const visibleItems = items.slice(startIndex, startIndex + visibleCount);

return (
  <Box flexDirection="column">
    {visibleItems.map(item => (
      <Text key={item.id}>{item.name}</Text>
    ))}
  </Box>
);
```

**✅ Solution 2: Use React.memo for list items**
```typescript
const ListItem = React.memo(({ item, isSelected }) => {
  return (
    <Box>
      <Text color={isSelected ? 'cyan' : 'white'}>
        {item.name}
      </Text>
    </Box>
  );
});

// In parent
{items.map(item => (
  <ListItem key={item.id} item={item} isSelected={item.id === selectedId} />
))}
```

---

### Problem: High CPU Usage

**Symptoms:**  
Application uses significant CPU even when idle.

**Why it happens:**  
Continuous re-rendering or polling in useEffect without cleanup.

**Solutions:**

**✅ Solution 1: Clean up intervals**
```typescript
useEffect(() => {
  const interval = setInterval(() => {
    updateData();
  }, 1000);
  
  // IMPORTANT: Clean up!
  return () => clearInterval(interval);
}, []);
```

**✅ Solution 2: Avoid unnecessary re-renders**
```typescript
// Bad - re-renders on every parent update
const Child = ({ data }) => {
  const processedData = expensiveCalculation(data);
  return <Box>{processedData}</Box>;
};

// Good - only recalculates when data changes
const Child = ({ data }) => {
  const processedData = useMemo(
    () => expensiveCalculation(data),
    [data]
  );
  return <Box>{processedData}</Box>;
};
```

---

## TypeScript Errors

### Problem: Type 'X' is not assignable to type 'Y'

**Symptoms:**
```typescript
<Box flexDirection="horizontal"> // Error!
```

**Why it happens:**  
TypeScript enforces valid property values.

**Solutions:**

**✅ Solution: Use correct values**
```typescript
// Correct values
<Box flexDirection="row">    // ✅
<Box flexDirection="column"> // ✅
```

**✅ Check documentation for valid values**
- flexDirection: "row" | "column"
- justifyContent: "flex-start" | "center" | "flex-end" | "space-between" | "space-around"
- alignItems: "flex-start" | "center" | "flex-end" | "stretch"

---

### Problem: Property does not exist on type

**Symptoms:**
```typescript
<Box myCustomProp="value"> // Error!
```

**Why it happens:**  
Box only accepts defined Ink/Yoga properties.

**Solutions:**

**✅ Solution 1: Use valid properties**
```typescript
// Check Box properties in documentation
<Box padding={2} margin={1}>
```

**✅ Solution 2: Create custom component**
```typescript
interface MyBoxProps {
  myCustomProp: string;
  children: React.ReactNode;
}

const MyBox: React.FC<MyBoxProps> = ({ myCustomProp, children }) => {
  // Use myCustomProp in your logic
  return <Box>{children}</Box>;
};
```

---

## Terminal Compatibility

### Problem: Colors Not Showing

**Symptoms:**  
All text appears in default terminal color, no colors visible.

**Why it happens:**  
Terminal doesn't support colors, or color support isn't detected.

**Solutions:**

**✅ Solution 1: Check color support**
```typescript
import chalk from 'chalk';

if (chalk.supportsColor) {
  // Use colors
  <Text color="cyan">Colored text</Text>
} else {
  // Fallback to no colors
  <Text>Plain text</Text>
}
```

**✅ Solution 2: Force color mode**
```bash
# Run with forced color support
FORCE_COLOR=1 node dist/index.js
```

---

### Problem: Unicode Characters Not Displaying

**Symptoms:**  
Emoji or special characters show as � or boxes.

**Why it happens:**  
Terminal doesn't support Unicode or encoding is wrong.

**Solutions:**

**✅ Solution 1: Check terminal encoding**
```bash
# Set terminal to UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
```

**✅ Solution 2: Provide fallbacks**
```typescript
const checkmark = process.platform === 'win32' ? '√' : '✓';
const arrow = process.platform === 'win32' ? '>' : '▶';

<Text>{checkmark} Done</Text>
```

---

### Problem: Box Drawing Characters Incorrect

**Symptoms:**  
Borders look broken or wrong characters appear.

**Why it happens:**  
Terminal font doesn't support box drawing characters.

**Solutions:**

**✅ Solution: Use compatible border styles**
```typescript
// 'single' and 'double' are most compatible
<Box borderStyle="single">  // Works everywhere
<Box borderStyle="double">  // Works everywhere

// These might have issues:
<Box borderStyle="round">   // Requires Unicode support
<Box borderStyle="bold">    // Requires Unicode support
```

---

## Debug Tips

### Enable Verbose Logging

```typescript
// Add this to see what's happening
useEffect(() => {
  console.log('Component rendered');
  console.log('Props:', props);
  console.log('State:', state);
}, [props, state]);
```

### Visualize Layout Boundaries

```typescript
// Temporarily add borders to all boxes
<Box borderStyle="single" borderColor="red"> // Parent
  <Box borderStyle="single" borderColor="blue"> // Child
    <Text>Content</Text>
  </Box>
</Box>
```

### Check Terminal Dimensions

```typescript
import { useStdout } from 'ink';

const { stdout } = useStdout();
console.log(`Terminal: ${stdout.columns}x${stdout.rows}`);
```

### Inspect Component Tree

```typescript
// Use React DevTools (if available in your terminal setup)
// Or add debug output:
console.log('Rendering:', componentName, { props, state });
```

---

## Getting Help

If you're still stuck:

1. **Check the documentation**
   - [Ink Repo](https://github.com/vadimdemedes/ink)
   - [Yoga Docs](https://yogalayout.com/docs)

2. **Search existing issues**
   - GitHub Issues on Ink repo

3. **Create a minimal reproduction**
   - Isolate the problem
   - Remove unrelated code
   - Share on GitHub Discussions

4. **Ask the community**
   - Stack Overflow (tag: ink, terminal)
   - Reddit r/reactjs
   - Discord/Slack communities

---

**Remember:** Most issues are layout-related. Add borders, check dimensions, and verify parent containers have appropriate sizes!
