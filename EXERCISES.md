# 🏋️ Practice Exercises

Put your Ink and Yoga skills to the test with these hands-on exercises!

---

## How to Use This File

1. **Read the challenge** - Understand what you need to build
2. **Try it yourself** - Write the code without looking at the solution
3. **Test it** - Create a new file and render your component
4. **Compare** - Check your solution against the provided answer
5. **Experiment** - Modify the solution and see what happens

---

## Beginner Exercises

### Exercise 1: Simple Menu

**Challenge:** Create a vertical menu with 3 items. The second item should be highlighted in cyan with a ▶ symbol.

**Requirements:**
- Use Box with flexDirection="column"
- First item: "Home" (white)
- Second item: "▶ About" (cyan, bold)
- Third item: "Contact" (white)
- Add padding of 1 around the whole menu

<details>
<summary>💡 Hint</summary>

Use conditional rendering or just hardcode which item is selected.
</details>

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Menu = () => {
  const selectedIndex = 1; // Second item

  return (
    <Box flexDirection="column" padding={1}>
      <Text color={selectedIndex === 0 ? 'cyan' : 'white'} bold={selectedIndex === 0}>
        {selectedIndex === 0 ? '▶ ' : '  '}Home
      </Text>
      <Text color={selectedIndex === 1 ? 'cyan' : 'white'} bold={selectedIndex === 1}>
        {selectedIndex === 1 ? '▶ ' : '  '}About
      </Text>
      <Text color={selectedIndex === 2 ? 'cyan' : 'white'} bold={selectedIndex === 2}>
        {selectedIndex === 2 ? '▶ ' : '  '}Contact
      </Text>
    </Box>
  );
};

export default Menu;
```
</details>

---

### Exercise 2: Horizontal Button Row

**Challenge:** Create 3 buttons in a horizontal row with space between them.

**Requirements:**
- Use flexDirection="row"
- Use justifyContent="space-between"
- Each button should have a border
- Buttons: "Cancel" (gray), "Save" (green), "Submit" (blue)
- Container width of 60

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const ButtonRow = () => {
  return (
    <Box flexDirection="row" justifyContent="space-between" width={60}>
      <Box borderStyle="round" borderColor="gray" paddingX={2}>
        <Text>Cancel</Text>
      </Box>
      <Box borderStyle="round" borderColor="green" paddingX={2}>
        <Text color="green">Save</Text>
      </Box>
      <Box borderStyle="round" borderColor="blue" paddingX={2}>
        <Text color="blue">Submit</Text>
      </Box>
    </Box>
  );
};

export default ButtonRow;
```
</details>

---

### Exercise 3: Centered Welcome Screen

**Challenge:** Create a centered welcome message.

**Requirements:**
- Center both horizontally and vertically
- Container height of 20
- Display "Welcome!" in bold cyan
- Display "Press any key to continue" below in dimColor

<details>
<summary>💡 Hint</summary>

Use both justifyContent="center" and alignItems="center" with flexDirection="column".
</details>

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const WelcomeScreen = () => {
  return (
    <Box
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height={20}
    >
      <Text bold color="cyan">
        Welcome!
      </Text>
      <Text dimColor>
        Press any key to continue
      </Text>
    </Box>
  );
};

export default WelcomeScreen;
```
</details>

---

## Intermediate Exercises

### Exercise 4: Card Grid

**Challenge:** Create a 2x2 grid of cards.

**Requirements:**
- 4 cards total in 2 rows
- Each card should have equal width (use flexGrow)
- Cards should have rounded borders
- Add margin between cards
- Each card displays a title and a number

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Card = ({ title, value, color }) => (
  <Box
    flexGrow={1}
    borderStyle="round"
    borderColor={color}
    padding={1}
    marginX={1}
    flexDirection="column"
  >
    <Text bold color={color}>
      {title}
    </Text>
    <Text>{value}</Text>
  </Box>
);

const CardGrid = () => {
  return (
    <Box flexDirection="column">
      <Box flexDirection="row" marginY={1}>
        <Card title="Users" value="1,234" color="cyan" />
        <Card title="Revenue" value="$45.6K" color="green" />
      </Box>
      <Box flexDirection="row" marginY={1}>
        <Card title="Orders" value="567" color="yellow" />
        <Card title="Visitors" value="8,901" color="magenta" />
      </Box>
    </Box>
  );
};

export default CardGrid;
```
</details>

---

### Exercise 5: Form Layout

**Challenge:** Create a form with 3 fields.

**Requirements:**
- Labels on the left (fixed width of 12)
- Input fields on the right (grow to fill space)
- Fields: Name, Email, Password
- Add vertical spacing between fields
- Add Submit and Cancel buttons at the bottom (right-aligned)

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const FormField = ({ label, value }) => (
  <Box flexDirection="row" marginY={1}>
    <Box width={12}>
      <Text>{label}:</Text>
    </Box>
    <Box borderStyle="single" paddingX={1} flexGrow={1}>
      <Text dimColor>{value}</Text>
    </Box>
  </Box>
);

const Form = () => {
  return (
    <Box flexDirection="column" padding={2}>
      <Text bold color="green">
        User Registration
      </Text>

      <FormField label="Name" value="John Doe" />
      <FormField label="Email" value="john@example.com" />
      <FormField label="Password" value="••••••••" />

      <Box flexDirection="row" justifyContent="flex-end" marginTop={2}>
        <Box borderStyle="round" paddingX={2} marginRight={2}>
          <Text>Cancel</Text>
        </Box>
        <Box borderStyle="round" borderColor="green" paddingX={2}>
          <Text color="green" bold>
            Submit
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
```
</details>

---

### Exercise 6: Header with Navigation

**Challenge:** Create an app header with logo and navigation.

**Requirements:**
- Logo on the left (fixed position)
- Navigation items on the right
- Use space-between to separate them
- Logo: "🏠 MyApp" (cyan, bold)
- Nav items: Home, About, Settings (in brackets)
- Add a border around the entire header

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Header = () => {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      borderStyle="single"
      borderColor="cyan"
      padding={1}
    >
      <Text bold color="cyan">
        🏠 MyApp
      </Text>

      <Box flexDirection="row">
        <Text>[Home]</Text>
        <Text> </Text>
        <Text>[About]</Text>
        <Text> </Text>
        <Text>[Settings]</Text>
      </Box>
    </Box>
  );
};

export default Header;
```
</details>

---

## Advanced Exercises

### Exercise 7: Dashboard Layout

**Challenge:** Create a complete dashboard layout.

**Requirements:**
- Header at top (fixed height)
- Sidebar on left (fixed width of 20)
- Main content area (grows to fill space)
- Footer at bottom (fixed height)
- Stats row in main content (3 equal cards)
- Activity list below stats

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const StatCard = ({ label, value, color }) => (
  <Box
    flexGrow={1}
    borderStyle="round"
    borderColor={color}
    padding={1}
    marginX={1}
  >
    <Box flexDirection="column">
      <Text bold color={color}>
        {label}
      </Text>
      <Text>{value}</Text>
    </Box>
  </Box>
);

const Dashboard = () => {
  return (
    <Box flexDirection="column" height={25}>
      {/* Header */}
      <Box borderStyle="single" padding={1} flexGrow={0}>
        <Box flexDirection="row" justifyContent="space-between">
          <Text bold color="cyan">
            📊 Dashboard
          </Text>
          <Text>[Profile] [Logout]</Text>
        </Box>
      </Box>

      {/* Main Area */}
      <Box flexDirection="row" flexGrow={1}>
        {/* Sidebar */}
        <Box width={20} borderStyle="single" padding={1} flexShrink={0}>
          <Box flexDirection="column">
            <Text bold>Menu</Text>
            <Text color="cyan">▶ Home</Text>
            <Text>  Analytics</Text>
            <Text>  Reports</Text>
            <Text>  Settings</Text>
          </Box>
        </Box>

        {/* Content */}
        <Box flexDirection="column" flexGrow={1} padding={1}>
          {/* Stats Row */}
          <Box flexDirection="row">
            <StatCard label="Users" value="1,234" color="green" />
            <StatCard label="Orders" value="567" color="yellow" />
            <StatCard label="Revenue" value="$45.6K" color="cyan" />
          </Box>

          {/* Activity */}
          <Box
            marginTop={1}
            borderStyle="single"
            padding={1}
            flexGrow={1}
          >
            <Box flexDirection="column">
              <Text bold>Recent Activity</Text>
              <Text dimColor>• User signup: john@example.com</Text>
              <Text dimColor>• Order #1234 completed</Text>
              <Text dimColor>• Payment received: $99.99</Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box borderStyle="single" padding={1} flexGrow={0}>
        <Text dimColor>
          Last updated: Just now | Status: All systems operational
        </Text>
      </Box>
    </Box>
  );
};

export default Dashboard;
```
</details>

---

### Exercise 8: Interactive List with Keyboard Navigation

**Challenge:** Create a navigable list.

**Requirements:**
- Array of items
- Use useState to track selected index
- Use useInput to handle up/down arrows
- Selected item should be highlighted
- Show ▶ symbol for selected item
- Press Enter to "select" an item (show message)

<details>
<summary>✅ Solution</summary>

```typescript
import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

const InteractiveList = () => {
  const items = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [message, setMessage] = useState('');

  useInput((input, key) => {
    if (key.upArrow) {
      setSelectedIndex(Math.max(0, selectedIndex - 1));
    }

    if (key.downArrow) {
      setSelectedIndex(Math.min(items.length - 1, selectedIndex + 1));
    }

    if (key.return) {
      setMessage(`Selected: ${items[selectedIndex]}`);
    }
  });

  return (
    <Box flexDirection="column" padding={2}>
      <Text bold color="cyan">
        Interactive List
      </Text>

      <Box flexDirection="column" marginY={1}>
        {items.map((item, index) => {
          const isSelected = index === selectedIndex;
          return (
            <Text
              key={index}
              color={isSelected ? 'cyan' : 'white'}
              bold={isSelected}
            >
              {isSelected ? '▶ ' : '  '}
              {item}
            </Text>
          );
        })}
      </Box>

      {message && (
        <Box borderStyle="single" borderColor="green" padding={1}>
          <Text color="green">{message}</Text>
        </Box>
      )}

      <Box marginTop={1}>
        <Text dimColor>Use ↑↓ to navigate, ENTER to select</Text>
      </Box>
    </Box>
  );
};

export default InteractiveList;
```
</details>

---

### Exercise 9: Modal Dialog

**Challenge:** Create a centered modal confirmation dialog.

**Requirements:**
- Center the modal on screen
- Modal should have warning colors (red/yellow)
- Display title: "⚠️ Confirm Delete"
- Display message asking for confirmation
- Show two buttons: Cancel and Delete
- Buttons should be right-aligned
- Container height of 20

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const ModalDialog = () => {
  return (
    <Box
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height={20}
    >
      <Box
        borderStyle="double"
        borderColor="red"
        padding={2}
        minWidth={45}
        flexDirection="column"
      >
        <Text bold color="red">
          ⚠️  Confirm Delete
        </Text>

        <Box marginTop={1} marginBottom={2} flexDirection="column">
          <Text>Are you sure you want to delete this item?</Text>
          <Text dimColor>This action cannot be undone.</Text>
        </Box>

        <Box flexDirection="row" justifyContent="flex-end">
          <Box borderStyle="round" paddingX={2} marginRight={2}>
            <Text>Cancel</Text>
          </Box>
          <Box borderStyle="round" borderColor="red" paddingX={2}>
            <Text color="red" bold>
              Delete
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ModalDialog;
```
</details>

---

### Exercise 10: Progress Tracker

**Challenge:** Create a multi-step progress indicator.

**Requirements:**
- Show 4 steps horizontally
- Use flexDirection="row" with space-between
- Steps: "Start" → "Process" → "Review" → "Complete"
- Current step (2nd) should be highlighted in cyan
- Completed steps (1st) should be green with ✓
- Future steps (3rd, 4th) should be gray
- Show arrows (→) between steps

<details>
<summary>✅ Solution</summary>

```typescript
import React from 'react';
import { Box, Text } from 'ink';

const Step = ({ label, status }) => {
  const getColor = () => {
    if (status === 'complete') return 'green';
    if (status === 'current') return 'cyan';
    return 'gray';
  };

  const getIcon = () => {
    if (status === 'complete') return '✓';
    if (status === 'current') return '●';
    return '○';
  };

  return (
    <Box flexDirection="column" alignItems="center">
      <Text bold color={getColor()}>
        {getIcon()}
      </Text>
      <Text color={getColor()}>{label}</Text>
    </Box>
  );
};

const ProgressTracker = () => {
  const currentStep = 1; // 0-indexed

  const steps = [
    { label: 'Start', status: currentStep > 0 ? 'complete' : currentStep === 0 ? 'current' : 'pending' },
    { label: 'Process', status: currentStep > 1 ? 'complete' : currentStep === 1 ? 'current' : 'pending' },
    { label: 'Review', status: currentStep > 2 ? 'complete' : currentStep === 2 ? 'current' : 'pending' },
    { label: 'Complete', status: currentStep > 3 ? 'complete' : currentStep === 3 ? 'current' : 'pending' }
  ];

  return (
    <Box flexDirection="column" padding={2}>
      <Text bold color="cyan">
        Progress Tracker
      </Text>

      <Box flexDirection="row" justifyContent="space-between" marginTop={2} width={60}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Step label={step.label} status={step.status} />
            {index < steps.length - 1 && (
              <Box justifyContent="center" alignItems="center" marginX={2}>
                <Text color="gray">→</Text>
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default ProgressTracker;
```
</details>

---

## Challenge: Build Your Own

### Mini Project Ideas

Try building these complete applications:

1. **Todo List Manager**
   - Add/remove todos
   - Mark as complete
   - Filter by status
   - Save to file

2. **System Monitor**
   - Display CPU usage
   - Show memory stats
   - List running processes
   - Update in real-time

3. **CLI Quiz App**
   - Multiple choice questions
   - Track score
   - Show results
   - Timer

4. **File Explorer**
   - Browse directories
   - Show file info
   - Search files
   - Open/delete files

5. **Chat Interface**
   - Message list
   - Input area
   - User list sidebar
   - Timestamps

---

## Tips for Practice

1. **Start small** - Get each piece working before combining
2. **Use borders** - They help visualize layout during development
3. **Test incrementally** - Add one feature at a time
4. **Refer to lessons** - Review concepts as needed
5. **Experiment** - Try different values and approaches
6. **Build real tools** - Apply skills to actual problems

---

## Next Steps

After completing these exercises:

1. ✅ Review your solutions against the provided answers
2. ✅ Modify solutions to explore variations
3. ✅ Combine multiple patterns into larger apps
4. ✅ Build a project from scratch
5. ✅ Share your creation!

**Ready for more?** Check out:
- TUTORIAL.md for in-depth explanations
- REFERENCE.md for quick lookups
- The lesson source code for more examples

Happy coding! 🚀
