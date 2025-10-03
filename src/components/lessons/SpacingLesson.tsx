/**
 * LESSON 4: Spacing & Sizing
 * 
 * Teaches how to control space and dimensions:
 * - padding: Space inside the component
 * - margin: Space outside the component
 * - width and height: Fixed dimensions
 * - minWidth, maxWidth, minHeight, maxHeight
 */

import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

interface LessonProps {
  onBack: () => void;
}

const SpacingLesson: React.FC<LessonProps> = ({ onBack }) => {
  const [paddingValue, setPaddingValue] = useState(1);
  const [marginValue, setMarginValue] = useState(1);

  useInput((input) => {
    if (input === '+' && paddingValue < 5) {
      setPaddingValue(prev => prev + 1);
    }
    if (input === '-' && paddingValue > 0) {
      setPaddingValue(prev => prev - 1);
    }
    if (input === ']' && marginValue < 5) {
      setMarginValue(prev => prev + 1);
    }
    if (input === '[' && marginValue > 0) {
      setMarginValue(prev => prev - 1);
    }
  });

  return (
    <Box flexDirection="column" padding={1}>
      {/* LESSON HEADER */}
      <Box borderStyle="double" borderColor="yellow" padding={1} marginBottom={1}>
        <Text bold color="yellow">
          📏 LESSON 4: Spacing & Sizing
        </Text>
      </Box>

      {/* THEORY */}
      <Box flexDirection="column" borderStyle="round" borderColor="cyan" padding={2} marginBottom={1}>
        <Text bold color="cyan">📚 The Box Model in Terminal</Text>
        <Text>
          {'\n'}
          Just like CSS, Ink uses a box model:
          {'\n\n'}
          <Text dimColor>
            ┌─────────────── margin ───────────────┐
            │  ┌─────────── border ─────────────┐  │
            │  │  ┌──────── padding ────────┐  │  │
            │  │  │                         │  │  │
            │  │  │   Content (Text/Box)    │  │  │
            │  │  │                         │  │  │
            │  │  └─────────────────────────┘  │  │
            │  └─────────────────────────────────┘  │
            └────────────────────────────────────────┘
          </Text>
          {'\n'}
          <Text color="yellow">margin</Text>: Space OUTSIDE (pushes other components away)
          {'\n'}
          <Text color="green">padding</Text>: Space INSIDE (pushes content away from border)
        </Text>
      </Box>

      {/* INTERACTIVE CONTROLS */}
      <Box borderStyle="single" padding={1} marginBottom={1}>
        <Text>
          Padding: <Text bold color="green">{paddingValue}</Text>
          {' '}(Press <Text color="green">+</Text> or <Text color="green">-</Text> to adjust)
          {'  '}
          Margin: <Text bold color="yellow">{marginValue}</Text>
          {' '}(Press <Text color="yellow">[</Text> or <Text color="yellow">]</Text> to adjust)
        </Text>
      </Box>

      {/* PADDING DEMO */}
      <Box flexDirection="column" marginBottom={1}>
        <Text bold color="green">🟢 Padding Demo (space INSIDE):</Text>
        <Text dimColor marginBottom={1}>
          Padding adds space between the border and content
        </Text>
        
        <Box borderStyle="single" borderColor="red">
          <Box 
            borderStyle="round" 
            borderColor="green"
            /**
             * 🔑 PADDING IN ACTION
             * 
             * padding={paddingValue} adds space on ALL sides
             * 
             * You can also use:
             * - paddingX: horizontal only (left + right)
             * - paddingY: vertical only (top + bottom)
             * - paddingTop, paddingBottom, paddingLeft, paddingRight
             */
            padding={paddingValue}
          >
            <Text>Content stays inside, border moves out</Text>
          </Box>
        </Box>
        
        <Box marginTop={1}>
          <Text dimColor>
            Current: <Text color="green">padding={paddingValue}</Text>
            {' '}
            {paddingValue === 0 && '(No space - content touches border)'}
            {paddingValue === 1 && '(1 space around content)'}
            {paddingValue > 1 && `(${paddingValue} spaces around content)`}
          </Text>
        </Box>
      </Box>

      {/* MARGIN DEMO */}
      <Box flexDirection="column" marginBottom={1}>
        <Text bold color="yellow">🟡 Margin Demo (space OUTSIDE):</Text>
        <Text dimColor marginBottom={1}>
          Margin adds space between components
        </Text>
        
        {/* Outer container to show margin effect */}
        <Box borderStyle="single" borderColor="red" padding={1}>
          <Text dimColor>Red container (outer boundary)</Text>
          
          <Box 
            borderStyle="round" 
            borderColor="yellow"
            padding={1}
            /**
             * 🔑 MARGIN IN ACTION
             * 
             * margin={marginValue} adds space on ALL sides
             * This creates distance from the red container
             * 
             * You can also use:
             * - marginX: horizontal only
             * - marginY: vertical only
             * - marginTop, marginBottom, marginLeft, marginRight
             */
            margin={marginValue}
          >
            <Text>Component pushed away from edges</Text>
          </Box>
        </Box>
        
        <Box marginTop={1}>
          <Text dimColor>
            Current: <Text color="yellow">margin={marginValue}</Text>
            {' '}
            {marginValue === 0 && '(No space - touches container)'}
            {marginValue === 1 && '(1 space from container)'}
            {marginValue > 1 && `(${marginValue} spaces from container)`}
          </Text>
        </Box>
      </Box>

      {/* DIRECTIONAL SPACING */}
      <Box flexDirection="column" borderStyle="single" borderColor="magenta" padding={2} marginBottom={1}>
        <Text bold color="magenta">📍 Directional Spacing:</Text>
        
        <Box marginTop={1} flexDirection="column">
          <Text>You can control each direction individually:</Text>
          
          <Box marginTop={1} marginLeft={2} flexDirection="column">
            <Text color="cyan">• paddingTop / marginTop</Text>
            <Text color="cyan">• paddingBottom / marginBottom</Text>
            <Text color="cyan">• paddingLeft / marginLeft</Text>
            <Text color="cyan">• paddingRight / marginRight</Text>
            <Text color="cyan">• paddingX / marginX (horizontal only)</Text>
            <Text color="cyan">• paddingY / marginY (vertical only)</Text>
          </Box>

          <Text marginTop={1} bold>Examples:</Text>
          <Box marginLeft={2} flexDirection="column" marginTop={1}>
            <Box borderStyle="single" borderColor="blue" paddingLeft={3}>
              <Text>paddingLeft={'{3}'}</Text>
            </Box>
            
            <Box borderStyle="single" borderColor="green" marginTop={2}>
              <Text>marginTop={'{2}'}</Text>
            </Box>
            
            <Box borderStyle="single" borderColor="yellow" paddingX={4} marginTop={1}>
              <Text>paddingX={'{4}'}</Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* SIZING */}
      <Box flexDirection="column" borderStyle="double" borderColor="blue" padding={2} marginBottom={1}>
        <Text bold color="blue">📐 Fixed Dimensions:</Text>
        
        <Box marginTop={1} flexDirection="column">
          <Text>Control exact sizes with width and height:</Text>
          
          <Box marginTop={1}>
            <Text dimColor>width={'{20}'} height={'{5}'}:</Text>
          </Box>
          <Box 
            marginTop={1}
            borderStyle="round" 
            borderColor="cyan"
            /**
             * 🔑 FIXED DIMENSIONS
             * 
             * width and height set exact sizes (in terminal characters)
             * Yoga will respect these unless flexGrow/flexShrink override them
             */
            width={20}
            height={5}
            padding={1}
          >
            <Text>Fixed size box</Text>
          </Box>

          <Box marginTop={2}>
            <Text dimColor>minWidth={'{30}'} (box grows if content is larger):</Text>
          </Box>
          <Box 
            marginTop={1}
            borderStyle="round" 
            borderColor="green"
            minWidth={30}
            padding={1}
          >
            <Text>This has a minimum width</Text>
          </Box>

          <Box marginTop={2}>
            <Text dimColor>maxWidth={'{25}'} (content wraps if too wide):</Text>
          </Box>
          <Box 
            marginTop={1}
            borderStyle="round" 
            borderColor="yellow"
            maxWidth={25}
            padding={1}
          >
            <Text>This has maximum width and might wrap</Text>
          </Box>
        </Box>
      </Box>

      {/* PRACTICAL PATTERNS */}
      <Box flexDirection="column" borderStyle="single" borderColor="green" padding={2} marginBottom={1}>
        <Text bold color="green">🎯 Common Patterns:</Text>
        
        <Box marginTop={1} flexDirection="column">
          <Text bold>1. Card with spacing:</Text>
          <Box 
            marginTop={1}
            marginX={2}
            borderStyle="round" 
            borderColor="cyan"
            padding={2}
          >
            <Text bold>Card Title</Text>
            <Text>Content with nice spacing</Text>
          </Box>
          <Text dimColor marginLeft={2}>marginX={'{2}'} padding={'{2}'}</Text>

          <Text bold marginTop={2}>2. Separated sections:</Text>
          <Box flexDirection="column">
            <Box borderStyle="single" padding={1}>
              <Text>Section 1</Text>
            </Box>
            <Box borderStyle="single" padding={1} marginTop={1}>
              <Text>Section 2</Text>
            </Box>
            <Box borderStyle="single" padding={1} marginTop={1}>
              <Text>Section 3</Text>
            </Box>
          </Box>
          <Text dimColor marginLeft={2}>marginTop={'{1}'} between sections</Text>

          <Text bold marginTop={2}>3. Indented content:</Text>
          <Box flexDirection="column">
            <Text>Parent Item</Text>
            <Box marginLeft={3}>
              <Text>Child item (indented)</Text>
            </Box>
            <Box marginLeft={3}>
              <Text>Another child</Text>
            </Box>
          </Box>
          <Text dimColor marginLeft={2}>marginLeft={'{3}'} for indentation</Text>
        </Box>
      </Box>

      {/* NAVIGATION */}
      <Box marginTop={1} borderStyle="single" padding={1}>
        <Text dimColor>
          <Text color="green">+ -</Text> Adjust padding  
          <Text color="yellow"> [ ]</Text> Adjust margin  
          <Text color="white"> M</Text> Menu
        </Text>
      </Box>

      {/* KEY TAKEAWAY */}
      <Box marginTop={1} borderStyle="double" borderColor="green" padding={1}>
        <Text bold color="green">
          ✅ Remember: padding = inside spacing, margin = outside spacing. Use them to create breathing room!
        </Text>
      </Box>
    </Box>
  );
};

export default SpacingLesson;
