# 📚 Code Snippets Library

Ready-to-use code snippets for common Ink + Yoga patterns. Copy, paste, and customize!

---

## Table of Contents

1. [Basic Components](#basic-components)
2. [Layout Patterns](#layout-patterns)
3. [Interactive Elements](#interactive-elements)
4. [Common UI Components](#common-ui-components)
5. [Hooks Usage](#hooks-usage)
6. [Styling Patterns](#styling-patterns)

---

## Basic Components

### Simple Box with Text
```typescript
import { Box, Text } from 'ink';

<Box>
  <Text>Hello, Terminal!</Text>
</Box>
```

### Colored and Styled Text
```typescript
<Box>
  <Text color="cyan" bold>Important Message</Text>
  <Text color="yellow" italic>Warning</Text>
  <Text color="green" underline>Success</Text>
  <Text dimColor>Helper text</Text>
</Box>
```

### Box with Border
```typescript
<Box borderStyle="round" borderColor="cyan" padding={2}>
  <Text>Content inside a nice box</Text>
</Box>
```

---

## Layout Patterns

### Horizontal Layout (Row)
```typescript
<Box flexDirection="row">
  <Text>First</Text>
  <Text> | </Text>
  <Text>Second</Text>
  <Text> | </Text>
  <Text>Third</Text>
</Box>
```

### Vertical Layout (Column)
```typescript
<Box flexDirection="column">
  <Text>First</Text>
  <Text>Second</Text>
  <Text>Third</Text>
</Box>
```

### Centered Content
```typescript
<Box 
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  height={20}
  width={60}
>
  <Text>Perfectly Centered!</Text>
</Box>
```

### Header + Content + Footer
```typescript
<Box flexDirection="column" height={30}>
  {/* Header */}
  <Box flexGrow={0} borderStyle="single" padding={1}>
    <Text bold>Header</Text>
  </Box>
  
  {/* Content */}
  <Box flexGrow={1} padding={2}>
    <Text>Main content area that grows</Text>
  </Box>
  
  {/* Footer */}
  <Box flexGrow={0} borderStyle="single" padding={1}>
    <Text dimColor>Footer info</Text>
  </Box>
</Box>
```

### Sidebar + Main Content
```typescript
<Box flexDirection="row" height={25}>
  {/* Sidebar */}
  <Box width={20} borderStyle="single" padding={1}>
    <Text bold>Navigation</Text>
  </Box>
  
  {/* Main Content */}
  <Box flexGrow={1} padding={2}>
    <Text>Main content area</Text>
  </Box>
</Box>
```

### Three Equal Columns
```typescript
<Box flexDirection="row">
  <Box flexGrow={1} marginX={1}>
    <Text>Column 1</Text>
  </Box>
  <Box flexGrow={1} marginX={1}>
    <Text>Column 2</Text>
  </Box>
  <Box flexGrow={1} marginX={1}>
    <Text>Column 3</Text>
  </Box>
</Box>
```

### Space Between Items
```typescript
<Box flexDirection="row" justifyContent="space-between" width={60}>
  <Text>Left Side</Text>
  <Text>Right Side</Text>
</Box>
```

---

## Interactive Elements

### Navigable Menu
```typescript
import { useState } from 'react';
import { Box, Text, useInput } from 'ink';

const Menu = () => {
  const items = ['Option 1', 'Option 2', 'Option 3'];
  const [selected, setSelected] = useState(0);

  useInput((input, key) => {
    if (key.upArrow) {
      setSelected(prev => Math.max(0, prev - 1));
    }
    if (key.downArrow) {
      setSelected(prev => Math.min(items.length - 1, prev + 1));
    }
  });

  return (
    <Box flexDirection="column">
      {items.map((item, index) => (
        <Text key={item} color={index === selected ? 'cyan' : 'white'}>
          {index === selected ? '▶ ' : '  '}
          {item}
        </Text>
      ))}
    </Box>
  );
};
```

### Toggle Button
```typescript
import { useState } from 'react';
import { Box, Text, useInput } from 'ink';

const Toggle = () => {
  const [enabled, setEnabled] = useState(false);

  useInput((input) => {
    if (input === ' ') {
      setEnabled(prev => !prev);
    }
  });

  return (
    <Box>
      <Text>
        [{enabled ? '✓' : ' '}] Feature {enabled ? 'ON' : 'OFF'}
      </Text>
      <Text dimColor> (Press SPACE to toggle)</Text>
    </Box>
  );
};
```

### Counter
```typescript
import { useState } from 'react';
import { Box, Text, useInput } from 'ink';

const Counter = () => {
  const [count, setCount] = useState(0);

  useInput((input) => {
    if (input === '+') setCount(prev => prev + 1);
    if (input === '-') setCount(prev => Math.max(0, prev - 1));
  });

  return (
    <Box>
      <Text>Count: <Text bold color="cyan">{count}</Text></Text>
      <Text dimColor> (Press + or -)</Text>
    </Box>
  );
};
```

---

## Common UI Components

### Card Component
```typescript
const Card = ({ title, children, color = 'cyan' }) => (
  <Box 
    borderStyle="round" 
    borderColor={color}
    padding={2}
    flexDirection="column"
  >
    <Text bold color={color}>{title}</Text>
    <Box marginTop={1}>{children}</Box>
  </Box>
);

// Usage:
<Card title="User Info" color="green">
  <Text>Name: John Doe</Text>
  <Text>Email: john@example.com</Text>
</Card>
```

### Button Component
```typescript
const Button = ({ label, onClick, variant = 'primary' }) => {
  const colors = {
    primary: 'cyan',
    success: 'green',
    danger: 'red',
    default: 'white'
  };

  return (
    <Box 
      borderStyle="round" 
      borderColor={colors[variant]}
      paddingX={2}
    >
      <Text color={colors[variant]} bold>{label}</Text>
    </Box>
  );
};

// Usage:
<Box flexDirection="row">
  <Button label="Save" variant="success" />
  <Box marginLeft={2}>
    <Button label="Cancel" variant="default" />
  </Box>
</Box>
```

### Status Badge
```typescript
const StatusBadge = ({ status }) => {
  const config = {
    success: { color: 'green', icon: '✓', text: 'Success' },
    error: { color: 'red', icon: '✗', text: 'Error' },
    warning: { color: 'yellow', icon: '⚠', text: 'Warning' },
    info: { color: 'cyan', icon: 'ℹ', text: 'Info' }
  };

  const { color, icon, text } = config[status];

  return (
    <Box borderStyle="round" borderColor={color} paddingX={1}>
      <Text color={color}>{icon} {text}</Text>
    </Box>
  );
};

// Usage:
<StatusBadge status="success" />
```

### Progress Bar
```typescript
const ProgressBar = ({ progress, width = 40 }) => {
  const filled = Math.floor((progress / 100) * width);
  const empty = width - filled;

  const getColor = () => {
    if (progress < 33) return 'red';
    if (progress < 66) return 'yellow';
    return 'green';
  };

  return (
    <Box flexDirection="column">
      <Box borderStyle="single">
        <Box flexDirection="row" width={width}>
          <Text backgroundColor={getColor()}>
            {' '.repeat(filled)}
          </Text>
          <Text backgroundColor="gray">
            {' '.repeat(empty)}
          </Text>
        </Box>
      </Box>
      <Text color={getColor()}>{progress}%</Text>
    </Box>
  );
};

// Usage:
<ProgressBar progress={75} width={50} />
```

### List Component
```typescript
const List = ({ items, title }) => (
  <Box flexDirection="column">
    {title && <Text bold marginBottom={1}>{title}</Text>}
    {items.map((item, index) => (
      <Box key={index}>
        <Text>• {item}</Text>
      </Box>
    ))}
  </Box>
);

// Usage:
<List 
  title="Todo Items"
  items={['Buy groceries', 'Write code', 'Deploy app']}
/>
```

### Table Row
```typescript
const TableRow = ({ columns, isHeader = false }) => (
  <Box flexDirection="row" borderStyle="single" paddingY={1}>
    {columns.map((col, index) => (
      <Box key={index} width={col.width || 20} paddingX={1}>
        <Text bold={isHeader}>{col.text}</Text>
      </Box>
    ))}
  </Box>
);

// Usage:
<Box flexDirection="column">
  <TableRow 
    isHeader 
    columns={[
      { text: 'Name', width: 20 },
      { text: 'Email', width: 30 },
      { text: 'Status', width: 15 }
    ]} 
  />
  <TableRow 
    columns={[
      { text: 'John Doe', width: 20 },
      { text: 'john@example.com', width: 30 },
      { text: 'Active', width: 15 }
    ]} 
  />
</Box>
```

---

## Hooks Usage

### useInput - Keyboard Handling
```typescript
import { useInput } from 'ink';

useInput((input, key) => {
  // Regular character keys
  if (input === 'q') {
    // Quit
  }
  
  // Arrow keys
  if (key.upArrow) { }
  if (key.downArrow) { }
  if (key.leftArrow) { }
  if (key.rightArrow) { }
  
  // Special keys
  if (key.return) { }      // Enter
  if (key.escape) { }      // Esc
  if (key.tab) { }
  if (key.backspace) { }
  if (key.delete) { }
  
  // Modifiers
  if (key.ctrl && input === 'c') {
    // Ctrl+C
  }
});
```

### useApp - Application Control
```typescript
import { useApp } from 'ink';

const MyComponent = () => {
  const { exit } = useApp();
  
  const handleQuit = () => {
    exit(); // Exit the application
  };
  
  return <Box>...</Box>;
};
```

### useState - State Management
```typescript
import { useState } from 'react';

const [value, setValue] = useState(initialValue);

// Update state
setValue(newValue);
setValue(prev => prev + 1);
```

### useEffect - Side Effects
```typescript
import { useEffect } from 'react';

// Run once on mount
useEffect(() => {
  console.log('Component mounted');
  
  return () => {
    console.log('Component unmounted');
  };
}, []);

// Run when dependencies change
useEffect(() => {
  console.log('Value changed:', value);
}, [value]);

// Auto-update timer
useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);
  
  return () => clearInterval(timer);
}, []);
```

---

## Styling Patterns

### Conditional Styling
```typescript
<Text color={isError ? 'red' : 'green'}>
  {message}
</Text>

<Box 
  borderColor={isActive ? 'cyan' : 'gray'}
  borderStyle={isActive ? 'double' : 'single'}
>
  Content
</Box>
```

### Dynamic Colors
```typescript
const getStatusColor = (status) => {
  switch (status) {
    case 'success': return 'green';
    case 'error': return 'red';
    case 'warning': return 'yellow';
    default: return 'white';
  }
};

<Text color={getStatusColor(status)}>
  {message}
</Text>
```

### Themed Components
```typescript
const theme = {
  colors: {
    primary: 'cyan',
    success: 'green',
    danger: 'red',
    warning: 'yellow'
  },
  borders: {
    default: 'single',
    emphasis: 'double',
    subtle: 'round'
  }
};

<Box 
  borderStyle={theme.borders.emphasis}
  borderColor={theme.colors.primary}
>
  <Text color={theme.colors.primary}>Themed Content</Text>
</Box>
```

### Responsive Width
```typescript
// Full width container
<Box width="100%">
  Content fills terminal width
</Box>

// Percentage width
<Box width="50%">
  Content takes half width
</Box>

// Fixed width
<Box width={60}>
  Content is exactly 60 characters
</Box>
```

---

## Complete Component Examples

### Login Form
```typescript
import { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import TextInput from 'ink-text-input';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeField, setActiveField] = useState('username');

  useInput((input, key) => {
    if (key.tab) {
      setActiveField(prev => 
        prev === 'username' ? 'password' : 'username'
      );
    }
  });

  return (
    <Box 
      flexDirection="column" 
      borderStyle="round" 
      borderColor="cyan"
      padding={2}
    >
      <Text bold color="cyan" marginBottom={1}>Login</Text>
      
      <Box flexDirection="row" marginY={1}>
        <Box width={12}>
          <Text>Username:</Text>
        </Box>
        {activeField === 'username' ? (
          <TextInput value={username} onChange={setUsername} />
        ) : (
          <Text>{username || '...'}</Text>
        )}
      </Box>
      
      <Box flexDirection="row" marginY={1}>
        <Box width={12}>
          <Text>Password:</Text>
        </Box>
        {activeField === 'password' ? (
          <TextInput 
            value={password} 
            onChange={setPassword}
            mask="*"
          />
        ) : (
          <Text>{'*'.repeat(password.length) || '...'}</Text>
        )}
      </Box>
      
      <Box marginTop={2} justifyContent="flex-end">
        <Box borderStyle="round" borderColor="green" paddingX={2}>
          <Text color="green" bold>Login</Text>
        </Box>
      </Box>
    </Box>
  );
};
```

### Dashboard Layout
```typescript
const Dashboard = () => (
  <Box flexDirection="column" height={30}>
    {/* Header */}
    <Box 
      flexGrow={0}
      borderStyle="single"
      paddingX={2}
      paddingY={1}
      flexDirection="row"
      justifyContent="space-between"
    >
      <Text bold color="cyan">📊 Dashboard</Text>
      <Text>User: John Doe</Text>
    </Box>
    
    {/* Main Area */}
    <Box flexDirection="row" flexGrow={1}>
      {/* Sidebar */}
      <Box 
        width={20}
        borderStyle="single"
        padding={1}
        flexDirection="column"
      >
        <Text bold marginBottom={1}>Menu</Text>
        <Text color="cyan">▶ Home</Text>
        <Text>  Analytics</Text>
        <Text>  Settings</Text>
      </Box>
      
      {/* Content */}
      <Box flexGrow={1} padding={2} flexDirection="column">
        <Text bold marginBottom={1}>Overview</Text>
        
        {/* Stats */}
        <Box flexDirection="row">
          <Box 
            flexGrow={1} 
            borderStyle="round" 
            borderColor="green"
            padding={1}
            marginX={1}
          >
            <Text color="green" bold>Active: 150</Text>
          </Box>
          <Box 
            flexGrow={1} 
            borderStyle="round" 
            borderColor="yellow"
            padding={1}
            marginX={1}
          >
            <Text color="yellow" bold>Pending: 23</Text>
          </Box>
        </Box>
      </Box>
    </Box>
    
    {/* Footer */}
    <Box 
      flexGrow={0}
      borderStyle="single"
      paddingX={2}
      paddingY={1}
    >
      <Text dimColor>Last updated: Just now</Text>
    </Box>
  </Box>
);
```

---

## Tips for Using Snippets

1. **Copy and Customize** - These are starting points, adjust to your needs
2. **Combine Patterns** - Mix snippets to create complex layouts
3. **Test Incrementally** - Add one piece at a time and test
4. **Add Types** - Use TypeScript interfaces for props
5. **Extract Components** - Reuse common patterns

Happy coding! 🚀
