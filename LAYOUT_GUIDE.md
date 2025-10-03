# Understanding Ink + Yoga Layout

## What is Yoga?

Yoga is a cross-platform layout engine that implements Flexbox. It was developed by Facebook (now Meta) and is used by React Native, Ink, and other frameworks. Ink uses Yoga under the hood to calculate layouts in the terminal.

## Flexbox in the Terminal

Just like in web development, Ink uses Flexbox properties for layout:

### Container Properties

```tsx
<Box
  flexDirection="row"          // or "column" (default)
  justifyContent="flex-start"  // or "flex-end", "center", "space-between", "space-around"
  alignItems="stretch"         // or "flex-start", "flex-end", "center"
  flexWrap="nowrap"            // or "wrap"
>
  {children}
</Box>
```

### Item Properties

```tsx
<Box
  flexGrow={1}        // How much the item should grow
  flexShrink={1}      // How much the item should shrink
  flexBasis="auto"    // Initial size of the item
>
  Content
</Box>
```

### Spacing

```tsx
<Box
  margin={1}          // All sides
  marginX={2}         // Horizontal (left and right)
  marginY={1}         // Vertical (top and bottom)
  marginTop={1}
  marginBottom={1}
  marginLeft={2}
  marginRight={2}
  
  padding={1}         // Same pattern as margin
  paddingX={2}
  paddingY={1}
  // etc...
>
  Content
</Box>
```

### Sizing

```tsx
<Box
  width={50}          // Fixed width
  height={10}         // Fixed height
  minWidth={20}       // Minimum width
  minHeight={5}       // Minimum height
  maxWidth={100}      // Maximum width
  maxHeight={20}      // Maximum height
>
  Content
</Box>
```

## Layout Examples

### Horizontal Layout (Row)

```tsx
<Box flexDirection="row">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Box>
```

Result: `[Item 1][Item 2][Item 3]`

### Vertical Layout (Column)

```tsx
<Box flexDirection="column">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Box>
```

Result:
```
Item 1
Item 2
Item 3
```

### Centered Content

```tsx
<Box 
  flexDirection="column" 
  justifyContent="center" 
  alignItems="center"
  height={10}
>
  <Text>Centered!</Text>
</Box>
```

### Space Between Items

```tsx
<Box flexDirection="row" justifyContent="space-between">
  <Text>Left</Text>
  <Text>Right</Text>
</Box>
```

### Flexible Growing

```tsx
<Box flexDirection="row">
  <Box flexGrow={1}>
    <Text>This takes up remaining space</Text>
  </Box>
  <Box>
    <Text>Fixed width</Text>
  </Box>
</Box>
```

## How Yoga Calculates Layouts

1. **Measure Phase**: Yoga calculates the intrinsic size of each element
2. **Layout Phase**: Yoga determines the final position and size based on Flexbox rules
3. **Render Phase**: Ink renders the layout to the terminal

## Performance Tips

1. **Avoid unnecessary re-renders**: Use React.memo for components that don't change often
2. **Minimize nesting**: Deep component trees can impact performance
3. **Use flexGrow wisely**: Only use it when you need dynamic sizing
4. **Fixed dimensions**: When possible, use fixed dimensions for better performance

## Common Patterns

### Sidebar Layout

```tsx
<Box flexDirection="row" height="100%">
  <Box width={20} borderStyle="single">
    {/* Sidebar */}
  </Box>
  <Box flexGrow={1}>
    {/* Main content */}
  </Box>
</Box>
```

### Header/Content/Footer

```tsx
<Box flexDirection="column" height="100%">
  <Box>
    {/* Header */}
  </Box>
  <Box flexGrow={1}>
    {/* Scrollable content */}
  </Box>
  <Box>
    {/* Footer */}
  </Box>
</Box>
```

### Grid Layout

```tsx
<Box flexDirection="column">
  <Box flexDirection="row">
    <Box flex={1}>Cell 1</Box>
    <Box flex={1}>Cell 2</Box>
    <Box flex={1}>Cell 3</Box>
  </Box>
  <Box flexDirection="row">
    <Box flex={1}>Cell 4</Box>
    <Box flex={1}>Cell 5</Box>
    <Box flex={1}>Cell 6</Box>
  </Box>
</Box>
```

## Debugging Layouts

To debug layouts, you can:

1. Add borders to see boundaries:
```tsx
<Box borderStyle="single" borderColor="red">
  Content
</Box>
```

2. Use background colors (in terminals that support it)

3. Log dimensions and positions during development

## Resources

- [Ink Documentation](https://github.com/vadimdemedes/ink)
- [Yoga Playground](https://yogalayout.com/playground)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
