# 🏋️ Ink + Yoga Practice Exercises

Hands-on exercises to reinforce your learning. Try to complete each exercise before looking at the solution!

---

## Exercise 1: Basic Layout

**Difficulty:** Beginner  
**Estimated Time:** 5 minutes

### Challenge
Create a simple box with:
- A cyan border
- 2 units of padding
- Text that says "Hello, Ink!"

### Your Code Here
```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Exercise1 = () => {
  return (
    // Your code here
  );
};
```

<details>
<summary>💡 Hint</summary>

You'll need to use `borderStyle`, `borderColor`, and `padding` properties on a Box component.
</details>

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Exercise1 = () => {
  return (
    <Box borderStyle="round" borderColor="cyan" padding={2}>
      <Text>Hello, Ink!</Text>
    </Box>
  );
};
```
</details>

---

## Exercise 2: Horizontal Navigation

**Difficulty:** Beginner  
**Estimated Time:** 10 minutes

### Challenge
Create a navigation bar with three menu items arranged horizontally:
- "Home" (in cyan)
- "About"
- "Contact"
- All items should have equal spacing between them

### Your Code Here
```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Exercise2 = () => {
  return (
    // Your code here
  );
};
```

<details>
<summary>💡 Hint</summary>

Use `flexDirection="row"` and `justifyContent` to space items. Consider using "space-between" or "space-around".
</details>

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Exercise2 = () => {
  return (
    <Box 
      flexDirection="row" 
      justifyContent="space-around"
      borderStyle="single"
      padding={1}
    >
      <Text color="cyan">Home</Text>
      <Text>About</Text>
      <Text>Contact</Text>
    </Box>
  );
};
```
</details>

---

## Exercise 3: Centered Modal

**Difficulty:** Intermediate  
**Estimated Time:** 15 minutes

### Challenge
Create a centered modal dialog that:
- Is centered both horizontally and vertically
- Has a double border in red
- Contains a title "Warning" and a message "Are you sure?"
- Has a minimum width of 40 characters
- Is inside a container that's 30 lines tall

### Your Code Here
```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Exercise3 = () => {
  return (
    // Your code here
  );
};
```

<details>
<summary>💡 Hint</summary>

You'll need two Boxes: an outer container with `justifyContent="center"` and `alignItems="center"`, and an inner modal box with the styling.
</details>

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Exercise3 = () => {
  return (
    <Box 
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height={30}
    >
      <Box
        borderStyle="double"
        borderColor="red"
        padding={2}
        minWidth={40}
      >
        <Box flexDirection="column">
          <Text bold color="red">Warning</Text>
          <Text marginTop={1}>Are you sure?</Text>
        </Box>
      </Box>
    </Box>
  );
};
```
</details>

---

## Exercise 4: Sidebar Layout

**Difficulty:** Intermediate  
**Estimated Time:** 20 minutes

### Challenge
Create a sidebar layout with:
- A left sidebar that's 20 characters wide (fixed)
- Contains a vertical menu with 4 items
- A main content area that takes up remaining space
- The first menu item should be highlighted in cyan
- Total height of 20 lines

### Your Code Here
```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Exercise4 = () => {
  const menuItems = ['Dashboard', 'Users', 'Settings', 'Logout'];
  
  return (
    // Your code here
  );
};
```

<details>
<summary>💡 Hint</summary>

Use `flexDirection="row"` for the outer container. The sidebar should have `width={20}` and `flexShrink={0}`. The content area should have `flexGrow={1}`.
</details>

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Exercise4 = () => {
  const menuItems = ['Dashboard', 'Users', 'Settings', 'Logout'];
  
  return (
    <Box flexDirection="row" height={20}>
      {/* Sidebar */}
      <Box 
        width={20} 
        flexShrink={0}
        borderStyle="single"
        padding={1}
      >
        <Box flexDirection="column">
          <Text bold marginBottom={1}>Menu</Text>
          {menuItems.map((item, index) => (
            <Text 
              key={item}
              color={index === 0 ? 'cyan' : 'white'}
            >
              {index === 0 ? '▶ ' : '  '}{item}
            </Text>
          ))}
        </Box>
      </Box>
      
      {/* Main Content */}
      <Box 
        flexGrow={1}
        borderStyle="single"
        padding={2}
      >
        <Text>Main Content Area</Text>
      </Box>
    </Box>
  );
};
```
</details>

---

## Exercise 5: Card Grid

**Difficulty:** Intermediate  
**Estimated Time:** 20 minutes

### Challenge
Create a responsive grid of 6 cards:
- 3 cards per row
- Each card should be equal width
- Cards should have rounded borders
- Each card contains an emoji icon and a label
- Use these cards:
  - 📊 Analytics
  - 👥 Users  
  - 💰 Revenue
  - 📈 Growth
  - 🎯 Goals
  - ⭐ Rating

### Your Code Here
```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Exercise5 = () => {
  const cards = [
    { icon: '📊', label: 'Analytics' },
    { icon: '👥', label: 'Users' },
    { icon: '💰', label: 'Revenue' },
    { icon: '📈', label: 'Growth' },
    { icon: '🎯', label: 'Goals' },
    { icon: '⭐', label: 'Rating' },
  ];
  
  return (
    // Your code here
  );
};
```

<details>
<summary>💡 Hint</summary>

Create two rows with `flexDirection="row"`. Each card should have `flexGrow={1}` and `marginX={1}` for spacing.
</details>

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Exercise5 = () => {
  const cards = [
    { icon: '📊', label: 'Analytics' },
    { icon: '👥', label: 'Users' },
    { icon: '💰', label: 'Revenue' },
    { icon: '📈', label: 'Growth' },
    { icon: '🎯', label: 'Goals' },
    { icon: '⭐', label: 'Rating' },
  ];
  
  return (
    <Box flexDirection="column" padding={1}>
      {/* Row 1 */}
      <Box flexDirection="row" marginY={1}>
        {cards.slice(0, 3).map(card => (
          <Box
            key={card.label}
            borderStyle="round"
            borderColor="cyan"
            padding={1}
            flexGrow={1}
            marginX={1}
          >
            <Box flexDirection="column" alignItems="center">
              <Text>{card.icon}</Text>
              <Text>{card.label}</Text>
            </Box>
          </Box>
        ))}
      </Box>
      
      {/* Row 2 */}
      <Box flexDirection="row" marginY={1}>
        {cards.slice(3, 6).map(card => (
          <Box
            key={card.label}
            borderStyle="round"
            borderColor="cyan"
            padding={1}
            flexGrow={1}
            marginX={1}
          >
            <Box flexDirection="column" alignItems="center">
              <Text>{card.icon}</Text>
              <Text>{card.label}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
```
</details>

---

## Exercise 6: Interactive Counter

**Difficulty:** Intermediate  
**Estimated Time:** 25 minutes

### Challenge
Create an interactive counter that:
- Displays the current count in the center
- Shows controls at the bottom
- Press '+' to increment
- Press '-' to decrement
- Press 'r' to reset to 0
- Press 'q' to quit
- The count should be displayed in green if positive, red if negative, white if zero

### Your Code Here
```typescript
import React, { useState } from 'react';
import { Box, Text, useInput, useApp } from 'ink';

const Exercise6 = () => {
  // Your code here
};
```

<details>
<summary>💡 Hint</summary>

Use `useState` for the count. Use `useInput` to handle keyboard events. Use conditional logic to determine the color based on count value.
</details>

<details>
<summary>✅ Solution</summary>

```typescript
import React, { useState } from 'react';
import { Box, Text, useInput, useApp } from 'ink';

const Exercise6 = () => {
  const { exit } = useApp();
  const [count, setCount] = useState(0);

  useInput((input) => {
    if (input === '+') setCount(c => c + 1);
    if (input === '-') setCount(c => c - 1);
    if (input === 'r') setCount(0);
    if (input === 'q') exit();
  });

  const countColor = count > 0 ? 'green' : count < 0 ? 'red' : 'white';

  return (
    <Box flexDirection="column" height={15}>
      {/* Counter Display */}
      <Box 
        flexGrow={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text bold color={countColor} fontSize={24}>
          {count}
        </Text>
      </Box>

      {/* Controls */}
      <Box 
        borderStyle="single"
        padding={1}
      >
        <Text dimColor>
          <Text color="green">+</Text> Increment  
          <Text color="red"> -</Text> Decrement  
          <Text color="yellow"> R</Text> Reset  
          <Text color="white"> Q</Text> Quit
        </Text>
      </Box>
    </Box>
  );
};
```
</details>

---

## Exercise 7: Form Layout

**Difficulty:** Advanced  
**Estimated Time:** 30 minutes

### Challenge
Create a registration form with:
- Title "User Registration"
- Three fields: Name, Email, Password
- Labels should be 12 characters wide
- Input fields should grow to fill remaining space
- Each field should have a border
- Submit and Cancel buttons at the bottom (right-aligned)
- All wrapped in a centered container

### Your Code Here
```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Exercise7 = () => {
  return (
    // Your code here
  );
};
```

<details>
<summary>💡 Hint</summary>

Use `flexDirection="row"` for each field row. Use `width={12}` for labels and `flexGrow={1}` for inputs. Buttons should be in a row with `justifyContent="flex-end"`.
</details>

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Exercise7 = () => {
  return (
    <Box
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height={25}
    >
      <Box
        borderStyle="double"
        borderColor="cyan"
        padding={2}
        minWidth={50}
      >
        <Box flexDirection="column">
          {/* Title */}
          <Text bold color="cyan">User Registration</Text>
          
          {/* Name Field */}
          <Box flexDirection="row" marginTop={2}>
            <Box width={12}>
              <Text>Name:</Text>
            </Box>
            <Box 
              flexGrow={1}
              borderStyle="single"
              paddingX={1}
            >
              <Text dimColor>John Doe</Text>
            </Box>
          </Box>

          {/* Email Field */}
          <Box flexDirection="row" marginTop={1}>
            <Box width={12}>
              <Text>Email:</Text>
            </Box>
            <Box 
              flexGrow={1}
              borderStyle="single"
              paddingX={1}
            >
              <Text dimColor>john@example.com</Text>
            </Box>
          </Box>

          {/* Password Field */}
          <Box flexDirection="row" marginTop={1}>
            <Box width={12}>
              <Text>Password:</Text>
            </Box>
            <Box 
              flexGrow={1}
              borderStyle="single"
              paddingX={1}
            >
              <Text dimColor>••••••••</Text>
            </Box>
          </Box>

          {/* Buttons */}
          <Box 
            flexDirection="row" 
            justifyContent="flex-end"
            marginTop={2}
          >
            <Box 
              borderStyle="round"
              paddingX={2}
              marginRight={2}
            >
              <Text>Cancel</Text>
            </Box>
            <Box 
              borderStyle="round"
              borderColor="green"
              paddingX={2}
            >
              <Text color="green" bold>Submit</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
```
</details>

---

## Exercise 8: Dashboard Layout

**Difficulty:** Advanced  
**Estimated Time:** 45 minutes

### Challenge
Create a complete dashboard with:
- Header with logo and navigation
- Sidebar with menu (20 chars wide)
- Main content area with:
  - 3 stat cards in a row
  - Recent activity section below
- Footer with status info

### Your Code Here
```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Exercise8 = () => {
  return (
    // Your code here
  );
};
```

<details>
<summary>💡 Hint</summary>

This combines multiple patterns: header/footer (vertical), sidebar (horizontal), and card grid. Work on each section separately, then combine them.
</details>

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Exercise8 = () => {
  return (
    <Box flexDirection="column" height={30}>
      {/* Header */}
      <Box 
        borderStyle="single"
        padding={1}
        flexGrow={0}
      >
        <Box flexDirection="row" justifyContent="space-between">
          <Text bold color="cyan">📊 Dashboard</Text>
          <Text>[Home] [Reports] [Settings]</Text>
        </Box>
      </Box>

      {/* Main Area */}
      <Box flexDirection="row" flexGrow={1}>
        {/* Sidebar */}
        <Box
          width={20}
          flexShrink={0}
          borderStyle="single"
          padding={1}
        >
          <Box flexDirection="column">
            <Text bold>Menu</Text>
            <Text color="cyan" marginTop={1}>▶ Overview</Text>
            <Text>  Analytics</Text>
            <Text>  Users</Text>
            <Text>  Settings</Text>
          </Box>
        </Box>

        {/* Content */}
        <Box flexDirection="column" flexGrow={1} padding={1}>
          {/* Stats Row */}
          <Box flexDirection="row">
            <Box
              borderStyle="round"
              borderColor="green"
              padding={1}
              flexGrow={1}
              marginX={1}
            >
              <Box flexDirection="column" alignItems="center">
                <Text color="green" bold>150</Text>
                <Text dimColor>Active</Text>
              </Box>
            </Box>
            <Box
              borderStyle="round"
              borderColor="yellow"
              padding={1}
              flexGrow={1}
              marginX={1}
            >
              <Box flexDirection="column" alignItems="center">
                <Text color="yellow" bold>23</Text>
                <Text dimColor>Pending</Text>
              </Box>
            </Box>
            <Box
              borderStyle="round"
              borderColor="red"
              padding={1}
              flexGrow={1}
              marginX={1}
            >
              <Box flexDirection="column" alignItems="center">
                <Text color="red" bold>7</Text>
                <Text dimColor>Issues</Text>
              </Box>
            </Box>
          </Box>

          {/* Activity Section */}
          <Box
            marginTop={1}
            borderStyle="single"
            padding={1}
            flexGrow={1}
          >
            <Box flexDirection="column">
              <Text bold>Recent Activity</Text>
              <Text marginTop={1} dimColor>• User John logged in</Text>
              <Text dimColor>• Report generated</Text>
              <Text dimColor>• Settings updated</Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        borderStyle="single"
        padding={1}
        flexGrow={0}
      >
        <Text dimColor>
          Status: <Text color="green">Online</Text> | Last updated: Just now
        </Text>
      </Box>
    </Box>
  );
};
```
</details>

---

## 🎯 Challenge Projects

Once you've completed the exercises, try these full projects:

### 1. Todo List CLI
Build a full todo list application with add, toggle, delete, and filter functionality.

### 2. System Monitor
Create a real-time system monitor showing CPU, memory, and disk usage.

### 3. File Browser
Build an interactive file browser with navigation and file operations.

### 4. Quiz App
Create an interactive quiz application with scoring and progress tracking.

### 5. Package Manager UI
Build a TUI for managing npm packages with search and install features.

---

## 📝 Tips for Success

1. **Start Simple** - Begin with basic layouts before adding complexity
2. **Test Incrementally** - Run your code after each change
3. **Use Borders** - Add borders to see component boundaries while developing
4. **Read Error Messages** - TypeScript errors are your friend!
5. **Experiment** - Try different property values to see what happens
6. **Review Solutions** - Even if you solve it, check the solution for best practices

---

## 🚀 Next Steps

After completing these exercises:
1. Build your own CLI tool
2. Contribute to an open-source Ink project
3. Share your creation with the community
4. Teach others what you've learned

**Happy Coding!** 💪
