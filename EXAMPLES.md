# 📚 Code Examples Library

Copy-paste ready code snippets for common Ink + Yoga patterns.

---

## Table of Contents

1. [Basic Setup](#basic-setup)
2. [Layout Patterns](#layout-patterns)
3. [Navigation Components](#navigation-components)
4. [Form Components](#form-components)
5. [Data Display](#data-display)
6. [Interactive Components](#interactive-components)
7. [Utility Components](#utility-components)

---

## Basic Setup

### Minimal App Template

```typescript
#!/usr/bin/env node
import React from 'react';
import { render, Box, Text } from 'ink';

const App = () => {
  return (
    <Box padding={1}>
      <Text>Hello from Ink!</Text>
    </Box>
  );
};

render(<App />);
```

### App with State

```typescript
import React, { useState } from 'react';
import { Box, Text } from 'ink';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Box flexDirection="column" padding={1}>
      <Text>Count: {count}</Text>
      <Text dimColor>Press + to increment</Text>
    </Box>
  );
};

export default App;
```

### App with Input Handling

```typescript
import React, { useState } from 'react';
import { Box, Text, useInput, useApp } from 'ink';

const App = () => {
  const { exit } = useApp();
  const [message, setMessage] = useState('');

  useInput((input, key) => {
    if (input === 'q') {
      exit();
    }
    if (input === 'h') {
      setMessage('Hello!');
    }
  });

  return (
    <Box flexDirection="column" padding={1}>
      <Text>{message || 'Press h for hello, q to quit'}</Text>
    </Box>
  );
};

export default App;
```

---

## Layout Patterns

### Full Screen Layout

```typescript
const FullScreenApp = () => {
  return (
    <Box
      flexDirection="column"
      width={process.stdout.columns}
      height={process.stdout.rows}
    >
      <Text>Full screen content</Text>
    </Box>
  );
};
```

### Header + Content + Footer

```typescript
const AppLayout = () => {
  return (
    <Box flexDirection="column" height={process.stdout.rows}>
      {/* Header */}
      <Box borderStyle="single" padding={1} flexGrow={0}>
        <Text bold color="cyan">My App</Text>
      </Box>

      {/* Main Content */}
      <Box flexGrow={1} padding={1}>
        <Text>Main content goes here</Text>
      </Box>

      {/* Footer */}
      <Box borderStyle="single" padding={1} flexGrow={0}>
        <Text dimColor>Press Q to quit</Text>
      </Box>
    </Box>
  );
};
```

### Sidebar Layout

```typescript
const SidebarLayout = () => {
  return (
    <Box flexDirection="row" height={process.stdout.rows}>
      {/* Sidebar */}
      <Box width={20} borderStyle="single" padding={1} flexShrink={0}>
        <Box flexDirection="column">
          <Text bold>Navigation</Text>
          <Text>• Home</Text>
          <Text>• Settings</Text>
          <Text>• About</Text>
        </Box>
      </Box>

      {/* Main Content */}
      <Box flexGrow={1} padding={1}>
        <Text>Main content area</Text>
      </Box>
    </Box>
  );
};
```

### Two Column Layout

```typescript
const TwoColumnLayout = () => {
  return (
    <Box flexDirection="row" padding={1}>
      {/* Left Column */}
      <Box flexGrow={1} borderStyle="single" padding={1} marginRight={1}>
        <Text>Left Column</Text>
      </Box>

      {/* Right Column */}
      <Box flexGrow={1} borderStyle="single" padding={1}>
        <Text>Right Column</Text>
      </Box>
    </Box>
  );
};
```

### Three Column Layout

```typescript
const ThreeColumnLayout = () => {
  return (
    <Box flexDirection="row" padding={1}>
      <Box flexGrow={1} borderStyle="single" padding={1} marginX={1}>
        <Text>Column 1</Text>
      </Box>
      <Box flexGrow={1} borderStyle="single" padding={1} marginX={1}>
        <Text>Column 2</Text>
      </Box>
      <Box flexGrow={1} borderStyle="single" padding={1} marginX={1}>
        <Text>Column 3</Text>
      </Box>
    </Box>
  );
};
```

### Centered Modal

```typescript
const CenteredModal = ({ children }) => {
  return (
    <Box
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height={process.stdout.rows}
    >
      <Box
        borderStyle="double"
        borderColor="cyan"
        padding={2}
        minWidth={40}
      >
        {children}
      </Box>
    </Box>
  );
};

// Usage
<CenteredModal>
  <Text>Modal content here</Text>
</CenteredModal>
```

---

## Navigation Components

### Vertical Menu

```typescript
const VerticalMenu = ({ items, selectedIndex, onSelect }) => {
  useInput((input, key) => {
    if (key.upArrow && selectedIndex > 0) {
      onSelect(selectedIndex - 1);
    }
    if (key.downArrow && selectedIndex < items.length - 1) {
      onSelect(selectedIndex + 1);
    }
  });

  return (
    <Box flexDirection="column" padding={1}>
      {items.map((item, index) => (
        <Text
          key={index}
          color={index === selectedIndex ? 'cyan' : 'white'}
          bold={index === selectedIndex}
        >
          {index === selectedIndex ? '▶ ' : '  '}
          {item}
        </Text>
      ))}
    </Box>
  );
};

// Usage
const [selected, setSelected] = useState(0);
const items = ['Home', 'About', 'Contact'];
<VerticalMenu items={items} selectedIndex={selected} onSelect={setSelected} />
```

### Horizontal Tab Bar

```typescript
const TabBar = ({ tabs, activeTab, onTabChange }) => {
  return (
    <Box flexDirection="row" borderStyle="single" padding={1}>
      {tabs.map((tab, index) => (
        <Box key={index} marginX={1}>
          <Text
            bold={activeTab === index}
            color={activeTab === index ? 'cyan' : 'white'}
            underline={activeTab === index}
          >
            {tab}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

// Usage
const [activeTab, setActiveTab] = useState(0);
<TabBar tabs={['Overview', 'Details', 'Settings']} activeTab={activeTab} onTabChange={setActiveTab} />
```

### Breadcrumb Navigation

```typescript
const Breadcrumb = ({ path }) => {
  return (
    <Box flexDirection="row" padding={1}>
      {path.map((item, index) => (
        <React.Fragment key={index}>
          <Text color={index === path.length - 1 ? 'cyan' : 'gray'}>
            {item}
          </Text>
          {index < path.length - 1 && (
            <Text color="gray"> / </Text>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

// Usage
<Breadcrumb path={['Home', 'Products', 'Electronics']} />
```

---

## Form Components

### Text Input Field

```typescript
import TextInput from 'ink-text-input';

const InputField = ({ label, value, onChange, onSubmit }) => {
  return (
    <Box flexDirection="row" marginY={1}>
      <Box width={15}>
        <Text>{label}:</Text>
      </Box>
      <TextInput
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </Box>
  );
};

// Usage
const [name, setName] = useState('');
<InputField
  label="Name"
  value={name}
  onChange={setName}
  onSubmit={() => console.log('Submitted:', name)}
/>
```

### Complete Form

```typescript
import TextInput from 'ink-text-input';

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeField, setActiveField] = useState('username');

  const handleSubmit = () => {
    onSubmit({ username, password });
  };

  return (
    <Box flexDirection="column" padding={2} borderStyle="round">
      <Text bold color="green">Login</Text>

      <Box flexDirection="row" marginY={1}>
        <Box width={12}>
          <Text color={activeField === 'username' ? 'cyan' : 'white'}>
            Username:
          </Text>
        </Box>
        <TextInput
          value={username}
          onChange={setUsername}
          onSubmit={() => setActiveField('password')}
        />
      </Box>

      <Box flexDirection="row" marginY={1}>
        <Box width={12}>
          <Text color={activeField === 'password' ? 'cyan' : 'white'}>
            Password:
          </Text>
        </Box>
        <TextInput
          value={password}
          onChange={setPassword}
          onSubmit={handleSubmit}
          mask="*"
        />
      </Box>

      <Box flexDirection="row" justifyContent="flex-end" marginTop={1}>
        <Box borderStyle="round" paddingX={2}>
          <Text color="green" bold>Login</Text>
        </Box>
      </Box>
    </Box>
  );
};
```

### Checkbox List

```typescript
const CheckboxList = ({ items, selected, onToggle }) => {
  return (
    <Box flexDirection="column" padding={1}>
      {items.map((item, index) => (
        <Text key={index}>
          [{selected.includes(index) ? '✓' : ' '}] {item}
        </Text>
      ))}
    </Box>
  );
};

// Usage
const [selected, setSelected] = useState([0, 2]);
const items = ['Option 1', 'Option 2', 'Option 3'];
<CheckboxList items={items} selected={selected} onToggle={setSelected} />
```

---

## Data Display

### Stats Cards

```typescript
const StatCard = ({ label, value, icon, color }) => {
  return (
    <Box
      borderStyle="round"
      borderColor={color}
      padding={1}
      flexGrow={1}
      marginX={1}
      flexDirection="column"
      alignItems="center"
    >
      <Text fontSize={20}>{icon}</Text>
      <Text bold color={color}>{value}</Text>
      <Text dimColor>{label}</Text>
    </Box>
  );
};

// Usage
<Box flexDirection="row">
  <StatCard label="Users" value="1,234" icon="👥" color="cyan" />
  <StatCard label="Revenue" value="$45K" icon="💰" color="green" />
  <StatCard label="Orders" value="567" icon="📦" color="yellow" />
</Box>
```

### Data Table

```typescript
const Table = ({ headers, rows }) => {
  const columnWidths = headers.map(h => h.length + 2);

  return (
    <Box flexDirection="column" borderStyle="single" padding={1}>
      {/* Headers */}
      <Box flexDirection="row">
        {headers.map((header, i) => (
          <Box key={i} width={columnWidths[i]} marginRight={1}>
            <Text bold color="cyan">{header}</Text>
          </Box>
        ))}
      </Box>

      {/* Separator */}
      <Text dimColor>{'─'.repeat(columnWidths.reduce((a, b) => a + b, 0))}</Text>

      {/* Rows */}
      {rows.map((row, rowIndex) => (
        <Box key={rowIndex} flexDirection="row">
          {row.map((cell, cellIndex) => (
            <Box key={cellIndex} width={columnWidths[cellIndex]} marginRight={1}>
              <Text>{cell}</Text>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

// Usage
<Table
  headers={['Name', 'Age', 'City']}
  rows={[
    ['John', '25', 'NYC'],
    ['Jane', '30', 'LA'],
    ['Bob', '35', 'Chicago']
  ]}
/>
```

### Progress Bar

```typescript
const ProgressBar = ({ current, total, width = 40 }) => {
  const percentage = (current / total) * 100;
  const filled = Math.floor((width * current) / total);
  const empty = width - filled;

  return (
    <Box flexDirection="column">
      <Box flexDirection="row">
        <Text color="green">{'█'.repeat(filled)}</Text>
        <Text dimColor>{'░'.repeat(empty)}</Text>
      </Box>
      <Text>
        {current} / {total} ({percentage.toFixed(0)}%)
      </Text>
    </Box>
  );
};

// Usage
<ProgressBar current={75} total={100} width={50} />
```

### List with Items

```typescript
const ItemList = ({ items, title }) => {
  return (
    <Box flexDirection="column" borderStyle="single" padding={1}>
      {title && (
        <Text bold color="cyan" marginBottom={1}>
          {title}
        </Text>
      )}
      {items.map((item, index) => (
        <Text key={index}>
          • {item}
        </Text>
      ))}
    </Box>
  );
};

// Usage
<ItemList
  title="Todo Items"
  items={['Buy groceries', 'Call mom', 'Finish project']}
/>
```

---

## Interactive Components

### Spinner with Loading

```typescript
import Spinner from 'ink-spinner';

const LoadingSpinner = ({ text = 'Loading...' }) => {
  return (
    <Box>
      <Text color="cyan">
        <Spinner type="dots" />
      </Text>
      <Text> {text}</Text>
    </Box>
  );
};

// Usage
<LoadingSpinner text="Fetching data..." />
```

### Confirmation Dialog

```typescript
const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
  useInput((input) => {
    if (input === 'y') onConfirm();
    if (input === 'n') onCancel();
  });

  return (
    <Box
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height={10}
    >
      <Box
        borderStyle="double"
        borderColor="yellow"
        padding={2}
        flexDirection="column"
      >
        <Text color="yellow">⚠️  {message}</Text>
        <Box marginTop={1}>
          <Text>Press <Text color="green" bold>Y</Text> to confirm, <Text color="red" bold>N</Text> to cancel</Text>
        </Box>
      </Box>
    </Box>
  );
};

// Usage
<ConfirmDialog
  message="Delete this item?"
  onConfirm={() => console.log('Confirmed')}
  onCancel={() => console.log('Cancelled')}
/>
```

### Toast Notification

```typescript
const Toast = ({ message, type = 'info', onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 3000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  const colors = {
    info: 'cyan',
    success: 'green',
    warning: 'yellow',
    error: 'red'
  };

  return (
    <Box
      borderStyle="round"
      borderColor={colors[type]}
      padding={1}
      marginY={1}
    >
      <Text color={colors[type]}>{message}</Text>
    </Box>
  );
};

// Usage
const [showToast, setShowToast] = useState(true);
{showToast && (
  <Toast
    message="Item saved successfully!"
    type="success"
    onDismiss={() => setShowToast(false)}
  />
)}
```

---

## Utility Components

### Box with Title

```typescript
const TitledBox = ({ title, children, color = 'cyan' }) => {
  return (
    <Box flexDirection="column">
      <Text bold color={color}>
        {title}
      </Text>
      <Box borderStyle="single" padding={1} marginTop={1}>
        {children}
      </Box>
    </Box>
  );
};

// Usage
<TitledBox title="User Information" color="green">
  <Text>Name: John Doe</Text>
  <Text>Email: john@example.com</Text>
</TitledBox>
```

### Spacer Component

```typescript
const Spacer = ({ size = 1 }) => {
  return <Box height={size} />;
};

// Usage
<Text>First section</Text>
<Spacer size={2} />
<Text>Second section</Text>
```

### Divider

```typescript
const Divider = ({ char = '─', color = 'gray' }) => {
  const width = process.stdout.columns - 4;
  return (
    <Box marginY={1}>
      <Text color={color}>{char.repeat(width)}</Text>
    </Box>
  );
};

// Usage
<Divider />
<Divider char="=" color="cyan" />
```

### Badge

```typescript
const Badge = ({ text, color = 'cyan' }) => {
  return (
    <Box borderStyle="round" borderColor={color} paddingX={1}>
      <Text color={color}>{text}</Text>
    </Box>
  );
};

// Usage
<Badge text="New" color="green" />
<Badge text="Beta" color="yellow" />
```

---

## Complete Example Apps

### Simple Todo App

```typescript
import React, { useState } from 'react';
import { Box, Text, useInput, useApp } from 'ink';
import TextInput from 'ink-text-input';

const TodoApp = () => {
  const { exit } = useApp();
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn Ink', done: false },
    { id: 2, text: 'Build CLI app', done: false }
  ]);
  const [mode, setMode] = useState('view'); // 'view' or 'add'
  const [newTodo, setNewTodo] = useState('');
  const [selected, setSelected] = useState(0);

  useInput((input, key) => {
    if (mode === 'view') {
      if (input === 'q') exit();
      if (input === 'a') setMode('add');
      if (key.upArrow) setSelected(Math.max(0, selected - 1));
      if (key.downArrow) setSelected(Math.min(todos.length - 1, selected + 1));
      if (input === ' ') {
        setTodos(todos.map((t, i) =>
          i === selected ? { ...t, done: !t.done } : t
        ));
      }
    }
    if (key.escape) setMode('view');
  });

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, done: false }]);
      setNewTodo('');
      setMode('view');
    }
  };

  return (
    <Box flexDirection="column" padding={1}>
      <Text bold color="cyan">Todo List</Text>

      {mode === 'view' ? (
        <Box flexDirection="column" marginY={1}>
          {todos.map((todo, i) => (
            <Text key={todo.id} color={i === selected ? 'cyan' : 'white'}>
              {i === selected ? '▶ ' : '  '}
              [{todo.done ? '✓' : ' '}] {todo.text}
            </Text>
          ))}
        </Box>
      ) : (
        <Box marginY={1}>
          <Text>New todo: </Text>
          <TextInput value={newTodo} onChange={setNewTodo} onSubmit={addTodo} />
        </Box>
      )}

      <Box borderStyle="single" padding={1}>
        <Text dimColor>
          {mode === 'view'
            ? 'A: Add | Space: Toggle | Q: Quit'
            : 'Enter: Save | ESC: Cancel'}
        </Text>
      </Box>
    </Box>
  );
};

export default TodoApp;
```

---

**Copy any of these examples and modify them for your needs!** 🚀

For more examples, check out:
- The lesson source code in `src/components/lessons/`
- EXERCISES.md for practice challenges
- TUTORIAL.md for detailed explanations
