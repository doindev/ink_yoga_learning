# 📖 Ink + Yoga Glossary

Complete definitions of all terms, concepts, and components.

---

## Core Concepts

### Ink
**Definition:** A React renderer for building command-line interface applications.  
**What it does:** Converts React components into terminal output using ANSI escape codes.  
**Analogy:** Like ReactDOM for browsers, but for terminals.  
**Example:** `render(<App />)` displays your React components in the terminal.

### Yoga
**Definition:** A cross-platform layout engine that implements CSS Flexbox.  
**What it does:** Calculates the position and size of every element based on flexbox rules.  
**Used by:** React Native, Ink, and other frameworks.  
**Why it matters:** Makes terminal layouts as easy as web layouts.

### ANSI Escape Codes
**Definition:** Special character sequences that control terminal formatting.  
**What they do:** Move cursor, change colors, clear screen, etc.  
**Example:** `\x1b[31m` makes text red.  
**Ink's role:** You don't write these directly; Ink generates them for you.

### Terminal / CLI
**Terminal:** The application window that runs command-line programs.  
**CLI (Command-Line Interface):** A text-based user interface.  
**Examples:** Terminal.app (Mac), Command Prompt (Windows), GNOME Terminal (Linux).

### TUI (Text User Interface)
**Definition:** A visual interface built with text characters in the terminal.  
**Difference from CLI:** TUI is visual and interactive (like Ink apps), CLI is typically line-by-line commands.  
**Examples:** htop, vim, midnight commander.

---

## Components

### Box
**Type:** Component  
**Purpose:** Primary layout container, like `<div>` in HTML.  
**Key Properties:** flexDirection, justifyContent, alignItems, padding, margin, width, height  
**Default Behavior:** Invisible container with flexDirection="column"  
**Example:**
```typescript
<Box flexDirection="row" padding={2}>
  <Text>Content</Text>
</Box>
```

### Text
**Type:** Component  
**Purpose:** Display text content, like `<span>` in HTML.  
**Key Properties:** color, backgroundColor, bold, italic, dimColor  
**Cannot Contain:** Box components (only strings and other Text components)  
**Example:**
```typescript
<Text color="cyan" bold>Hello</Text>
```

### Newline
**Type:** Component  
**Purpose:** Insert line breaks.  
**Usage:** `<Newline />` or `<Newline count={3} />`  
**Alternative:** Use `\n` in Text content  
**Example:**
```typescript
<Text>Line 1<Newline />Line 2</Text>
```

### Spacer
**Type:** Component  
**Purpose:** Flexible space that grows to fill available space.  
**Usage:** `<Spacer />`  
**Common Use:** Pushing elements to opposite ends  
**Example:**
```typescript
<Box flexDirection="row">
  <Text>Left</Text>
  <Spacer />
  <Text>Right</Text>
</Box>
```

---

## Layout Properties

### flexDirection
**Type:** Property  
**Values:** "row" | "column"  
**Default:** "column"  
**What it controls:** Direction children are arranged  
**row:** Horizontal (left to right) →  
**column:** Vertical (top to bottom) ↓

### justifyContent
**Type:** Property  
**Values:** "flex-start" | "center" | "flex-end" | "space-between" | "space-around"  
**Default:** "flex-start"  
**What it controls:** Alignment along the main axis  
**Main axis:** Direction of flexDirection  
**Example:** In a row, controls left-to-right positioning

### alignItems
**Type:** Property  
**Values:** "flex-start" | "center" | "flex-end" | "stretch"  
**Default:** "flex-start"  
**What it controls:** Alignment along the cross axis  
**Cross axis:** Perpendicular to flexDirection  
**Example:** In a row, controls top-to-bottom positioning

### flexGrow
**Type:** Property  
**Values:** number (typically 0-3)  
**Default:** 0 (don't grow)  
**What it controls:** How much item grows to fill space  
**Relative:** Values are relative to siblings  
**Example:** flexGrow={2} takes twice as much space as flexGrow={1}

### flexShrink
**Type:** Property  
**Values:** number  
**Default:** 1 (can shrink)  
**What it controls:** How much item shrinks when space is limited  
**Example:** flexShrink={0} prevents shrinking (stays at original size)

### flexBasis
**Type:** Property  
**Values:** number | "auto"  
**Default:** "auto"  
**What it controls:** Initial size before growing/shrinking  
**Example:** flexBasis={20} starts at 20 characters, then grows if flexGrow is set

### padding
**Type:** Property  
**Values:** number  
**What it is:** Space INSIDE the component, between border and content  
**Directional:** paddingTop, paddingBottom, paddingLeft, paddingRight, paddingX, paddingY  
**Visual:** Pushes content away from borders

### margin
**Type:** Property  
**Values:** number  
**What it is:** Space OUTSIDE the component, between it and other components  
**Directional:** marginTop, marginBottom, marginLeft, marginRight, marginX, marginY  
**Visual:** Pushes other components away

### width / height
**Type:** Property  
**Values:** number | string  
**What they do:** Set fixed dimensions  
**Units:** Characters (width) and lines (height)  
**Percentage:** Use string like "50%" for percentage-based sizing

### minWidth / minHeight / maxWidth / maxHeight
**Type:** Property  
**Values:** number  
**What they do:** Set size constraints  
**Usage:** Responsive layouts that adapt but have limits

---

## Visual Properties

### borderStyle
**Type:** Property  
**Values:** "single" | "double" | "round" | "bold" | "classic" | undefined  
**What it does:** Adds a border around the Box  
**Examples:**
- single: ┌─┐
- double: ╔═╗
- round: ╭─╮
- bold: ┏━┓

### borderColor
**Type:** Property  
**Values:** "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray" | "black"  
**What it does:** Sets the color of the border  
**Requires:** borderStyle must be set

### color
**Type:** Property (Text component)  
**Values:** Color names (same as borderColor)  
**What it does:** Sets text foreground color

### backgroundColor
**Type:** Property  
**Values:** Color names  
**What it does:** Sets background color  
**Usage:** Useful for highlighting or creating filled areas

---

## Hooks

### useInput
**Type:** Hook  
**Purpose:** Capture keyboard input  
**Returns:** Nothing (uses callback)  
**Signature:** `useInput((input: string, key: Key) => void)`  
**input:** The character pressed ('a', '1', etc.)  
**key:** Object with special keys (arrows, enter, escape)

### useApp
**Type:** Hook  
**Purpose:** Access application lifecycle methods  
**Returns:** `{ exit: () => void }`  
**Usage:** Call `exit()` to quit the application

### useStdout
**Type:** Hook  
**Purpose:** Access stdout and terminal info  
**Returns:** `{ stdout, write }`  
**stdout:** Has properties like columns (width) and rows (height)

### useStdin
**Type:** Hook  
**Purpose:** Access stdin and control input mode  
**Returns:** `{ stdin, isRawModeSupported, setRawMode }`  
**Raw mode:** Character-by-character input vs line-by-line

### useFocus
**Type:** Hook  
**Purpose:** Manage focus for interactive components  
**Returns:** `{ isFocused: boolean }`  
**Usage:** Know if component currently has focus

### useFocusManager
**Type:** Hook  
**Purpose:** Control focus programmatically  
**Returns:** `{ focus, focusNext, focusPrevious }`  
**Usage:** Navigate between focusable components

---

## Concepts

### Main Axis
**Definition:** The axis along which flex items are laid out  
**Direction:** Determined by flexDirection  
**row:** Horizontal (left to right)  
**column:** Vertical (top to bottom)  
**Controlled by:** justifyContent

### Cross Axis
**Definition:** The axis perpendicular to the main axis  
**Direction:** Opposite of main axis  
**row:** Vertical (top to bottom)  
**column:** Horizontal (left to right)  
**Controlled by:** alignItems

### Flexbox
**Definition:** A CSS layout module for arranging items in one dimension  
**One dimension:** Either row OR column (not both at once like grid)  
**Features:** Flexible sizing, alignment, distribution  
**Yoga's role:** Implements flexbox for Ink

### Box Model
**Definition:** The structure of spacing around elements  
**Order (inside to out):** Content → Padding → Border → Margin  
**Content:** Your Text or child Boxes  
**Padding:** Space inside border  
**Border:** Visual boundary  
**Margin:** Space outside border

### Render
**Definition:** The process of converting React components to terminal output  
**Initial render:** First display of the app  
**Re-render:** Update when state changes  
**Efficient:** React only updates what changed

### State
**Definition:** Data that can change over time  
**Hook:** `useState(initialValue)`  
**Returns:** `[value, setValue]`  
**Triggers:** Changing state causes re-render

### Props
**Definition:** Properties passed from parent to child component  
**Purpose:** Configure and customize components  
**Read-only:** Component cannot modify its own props  
**Type-safe:** Define with TypeScript interfaces

### Component
**Definition:** A reusable piece of UI  
**Function component:** JavaScript function that returns JSX  
**Props:** Accepts props as parameter  
**State:** Can use hooks for local state

### JSX
**Definition:** JavaScript syntax extension that looks like HTML  
**What it is:** `<Box><Text>Hi</Text></Box>`  
**Compiles to:** `React.createElement(Box, null, React.createElement(Text, null, "Hi"))`  
**Why use it:** More readable than createElement calls

---

## Terminal Concepts

### Character Width
**Definition:** Horizontal space in terminal measured in characters  
**Standard:** Monospace font means each character is same width  
**Usage:** width={50} = 50 characters wide

### Line Height
**Definition:** Vertical space in terminal measured in lines  
**Usage:** height={10} = 10 lines tall

### Cursor
**Definition:** Blinking indicator showing current position  
**Ink's handling:** Ink manages cursor automatically  
**Raw mode:** Full control over cursor position

### Terminal Dimensions
**Columns:** Width of terminal in characters  
**Rows:** Height of terminal in lines  
**Access:** `const { stdout } = useStdout(); stdout.columns`  
**Responsive:** Can change when user resizes terminal

### Color Support
**Definition:** Terminal's ability to display colors  
**Levels:** No color, 16 colors, 256 colors, true color  
**Check:** `chalk.supportsColor`  
**Fallback:** Ink handles gracefully if colors not supported

---

## Common Patterns

### Centering
**Horizontal:** alignItems="center" (when column) or justifyContent="center" (when row)  
**Vertical:** justifyContent="center" (when column) or alignItems="center" (when row)  
**Both:** Use both properties with appropriate flexDirection

### Sidebar
**Pattern:** Fixed-width sidebar + flexible main content  
**Implementation:** width={20} on sidebar, flexGrow={1} on main content

### Header/Footer
**Pattern:** Fixed header/footer + flexible main content  
**Implementation:** flexGrow={0} on header/footer, flexGrow={1} on main

### Grid
**Pattern:** Equal-width columns  
**Implementation:** Each child has flexGrow={1} with marginX for spacing

### Modal
**Pattern:** Centered overlay  
**Implementation:** Outer container with justifyContent="center" and alignItems="center"

---

## Best Practices

### Semantic Component Names
**Good:** `<Sidebar>`, `<Header>`, `<Card>`  
**Bad:** `<Box1>`, `<Container>`, `<Div>`

### Extract Repeated Layouts
**Principle:** DRY (Don't Repeat Yourself)  
**Method:** Create reusable components for common patterns

### Use TypeScript
**Benefits:** Catch errors early, better autocomplete, self-documenting code  
**Interfaces:** Define prop types for components

### Optimize Re-renders
**Methods:** React.memo, useMemo, useCallback  
**When:** For expensive calculations or large lists

---

## Troubleshooting Terms

### Overflow
**Problem:** Content extends beyond container  
**Solution:** Use maxWidth, check parent dimensions

### Layout Shift
**Problem:** Elements jumping around on updates  
**Solution:** Use fixed dimensions or consistent flexGrow values

### Flicker
**Problem:** UI flashing on updates  
**Solution:** Optimize re-renders, batch state updates

### Z-Index
**Note:** Not available in Ink  
**Alternative:** Use rendering order (last rendered appears "on top")

---

## Resources

- **Ink Repo:** github.com/vadimdemedes/ink
- **Yoga Docs:** yogalayout.com/docs
- **React Docs:** react.dev
- **Flexbox Guide:** css-tricks.com/snippets/css/a-guide-to-flexbox/

---

**💡 Pro Tip:** Bookmark this glossary and refer to it while coding!
