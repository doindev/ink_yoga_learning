/**
 * LESSON 2: Flex Direction
 * 
 * Teaches how to control the direction of layout:
 * - flexDirection="column" for vertical stacking
 * - flexDirection="row" for horizontal arrangement
 * - Real-world use cases for each
 */

import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

interface LessonProps {
  onBack: () => void;
}

const FlexDirectionLesson: React.FC<LessonProps> = ({ onBack }) => {
  const [currentDemo, setCurrentDemo] = useState<'column' | 'row'>('column');

  useInput((input) => {
    if (input === 'c') {
      setCurrentDemo('column');
    }
    if (input === 'r') {
      setCurrentDemo('row');
    }
  });

  return (
    <Box flexDirection="column" padding={1}>
      {/* LESSON HEADER */}
      <Box borderStyle="double" borderColor="blue" padding={1} marginBottom={1}>
        <Text bold color="blue">
          ↔️ LESSON 2: Flex Direction - Row vs Column
        </Text>
      </Box>

      {/* THEORY SECTION */}
      <Box flexDirection="column" borderStyle="round" borderColor="cyan" padding={2} marginBottom={1}>
        <Text bold color="cyan">📚 Theory: The Main Axis</Text>
        <Text>
          {'\n'}
          <Text color="yellow">flexDirection</Text> defines the main axis - the direction children flow.
          {'\n\n'}
          <Text bold>Two values:</Text>
          {'\n'}
          • <Text color="green">"column"</Text> (default) - Vertical stack (top to bottom)
          {'\n'}
          • <Text color="blue">"row"</Text> - Horizontal line (left to right)
        </Text>
      </Box>

      {/* INTERACTIVE TOGGLE */}
      <Box marginBottom={1}>
        <Text>
          Current mode: <Text bold color={currentDemo === 'column' ? 'green' : 'blue'}>
            {currentDemo}
          </Text>
          {' '}
          <Text dimColor>(Press <Text color="green">C</Text> for column, <Text color="blue">R</Text> for row)</Text>
        </Text>
      </Box>

      {/* LIVE DEMONSTRATION */}
      <Box flexDirection="column" borderStyle="single" padding={2} marginBottom={1}>
        <Text bold>Live Demo - Same components, different flexDirection:</Text>
        
        <Box marginTop={1}>
          <Text dimColor>
            flexDirection="{currentDemo}"
          </Text>
        </Box>

        {/* THE DEMO BOX - Changes based on selection */}
        <Box 
          marginTop={1}
          borderStyle="round" 
          borderColor={currentDemo === 'column' ? 'green' : 'blue'}
          padding={1}
          /**
           * 🔑 KEY PROPERTY: flexDirection
           * 
           * This single property changes the entire layout!
           * Watch how the colored boxes rearrange when you toggle.
           */
          flexDirection={currentDemo}
        >
          <Box borderStyle="single" borderColor="red" padding={1}>
            <Text color="red">Box 1</Text>
          </Box>
          <Box borderStyle="single" borderColor="yellow" padding={1}>
            <Text color="yellow">Box 2</Text>
          </Box>
          <Box borderStyle="single" borderColor="green" padding={1}>
            <Text color="green">Box 3</Text>
          </Box>
        </Box>

        <Box marginTop={1}>
          <Text dimColor italic>
            {currentDemo === 'column' 
              ? '↓ Boxes stack vertically because flexDirection="column"'
              : '→ Boxes line up horizontally because flexDirection="row"'
            }
          </Text>
        </Box>
      </Box>

      {/* CODE COMPARISON */}
      <Box flexDirection="column" borderStyle="single" borderColor="magenta" padding={2} marginBottom={1}>
        <Text bold color="magenta">💻 The Code:</Text>
        
        <Box marginTop={1} flexDirection="column">
          <Text color="green">Column Layout (Vertical):</Text>
          <Box marginLeft={2} flexDirection="column">
            <Text dimColor>{'<Box flexDirection="column">'}</Text>
            <Text dimColor>{'  <Box>Item 1</Box>'}</Text>
            <Text dimColor>{'  <Box>Item 2</Box>'}</Text>
            <Text dimColor>{'  <Box>Item 3</Box>'}</Text>
            <Text dimColor>{'</Box>'}</Text>
          </Box>

          <Text marginTop={1} color="blue">Row Layout (Horizontal):</Text>
          <Box marginLeft={2} flexDirection="column">
            <Text dimColor>{'<Box flexDirection="row">'}</Text>
            <Text dimColor>{'  <Box>Item 1</Box>'}</Text>
            <Text dimColor>{'  <Box>Item 2</Box>'}</Text>
            <Text dimColor>{'  <Box>Item 3</Box>'}</Text>
            <Text dimColor>{'</Box>'}</Text>
          </Box>
        </Box>
      </Box>

      {/* REAL WORLD EXAMPLES */}
      <Box flexDirection="column" borderStyle="single" borderColor="yellow" padding={2} marginBottom={1}>
        <Text bold color="yellow">🌍 When to Use Each:</Text>
        
        <Box marginTop={1} flexDirection="column">
          <Text>
            <Text color="green" bold>Column</Text> (Vertical) is great for:
          </Text>
          <Box marginLeft={2} flexDirection="column">
            <Text>• Lists and menus</Text>
            <Text>• Forms (fields stacked)</Text>
            <Text>• Chat messages</Text>
            <Text>• Article content</Text>
          </Box>

          <Text marginTop={1}>
            <Text color="blue" bold>Row</Text> (Horizontal) is great for:
          </Text>
          <Box marginLeft={2} flexDirection="column">
            <Text>• Navigation bars</Text>
            <Text>• Button groups</Text>
            <Text>• Status indicators</Text>
            <Text>• Side-by-side content</Text>
          </Box>
        </Box>
      </Box>

      {/* PRACTICAL EXAMPLES */}
      <Box flexDirection="column" borderStyle="double" borderColor="cyan" padding={2}>
        <Text bold color="cyan">🎨 Practical Examples:</Text>
        
        {/* Example 1: Navigation Bar */}
        <Box marginTop={1} flexDirection="column">
          <Text dimColor>Example 1: Navigation Bar (flexDirection="row")</Text>
          <Box borderStyle="single" padding={1} marginTop={1}>
            <Box flexDirection="row">
              <Text color="cyan" bold>[Home]</Text>
              <Text> </Text>
              <Text>[About]</Text>
              <Text> </Text>
              <Text>[Contact]</Text>
              <Box flexGrow={1} />
              <Text>[Logout]</Text>
            </Box>
          </Box>
        </Box>

        {/* Example 2: Menu List */}
        <Box marginTop={1} flexDirection="column">
          <Text dimColor>Example 2: Menu List (flexDirection="column")</Text>
          <Box borderStyle="single" padding={1} marginTop={1}>
            <Box flexDirection="column">
              <Text color="cyan" bold>▶ Option 1</Text>
              <Text>  Option 2</Text>
              <Text>  Option 3</Text>
            </Box>
          </Box>
        </Box>

        {/* Example 3: Mixed Layout */}
        <Box marginTop={1} flexDirection="column">
          <Text dimColor>Example 3: Mixed (Column contains Rows)</Text>
          <Box borderStyle="single" padding={1} marginTop={1}>
            <Box flexDirection="column">
              <Text bold>User Profile:</Text>
              <Box flexDirection="row" marginTop={1}>
                <Text>Name: </Text>
                <Text color="cyan">John Doe</Text>
              </Box>
              <Box flexDirection="row">
                <Text>Status: </Text>
                <Text color="green">Online</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* NAVIGATION */}
      <Box marginTop={1} borderStyle="single" padding={1}>
        <Text dimColor>
          <Text color="green">C</Text> Column mode  
          <Text color="blue"> R</Text> Row mode  
          <Text color="yellow"> M</Text> Menu
        </Text>
      </Box>

      {/* KEY TAKEAWAY */}
      <Box marginTop={1} borderStyle="double" borderColor="green" padding={1}>
        <Text bold color="green">
          ✅ Key Takeaway: flexDirection is your first decision when building layouts!
        </Text>
      </Box>
    </Box>
  );
};

export default FlexDirectionLesson;
