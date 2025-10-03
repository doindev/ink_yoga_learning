/**
 * LESSON 3: Alignment & Justification
 * 
 * Teaches how to position content within containers:
 * - justifyContent: Position along main axis
 * - alignItems: Position along cross axis
 * - Understanding axes in flexbox
 */

import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

interface LessonProps {
  onBack: () => void;
}

type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
type AlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch';

const AlignmentLesson: React.FC<LessonProps> = ({ onBack }) => {
  const [justifyContent, setJustifyContent] = useState<JustifyContent>('flex-start');
  const [alignItems, setAlignItems] = useState<AlignItems>('flex-start');
  const [flexDirection, setFlexDirection] = useState<'row' | 'column'>('row');

  useInput((input) => {
    // Cycle through justifyContent values
    if (input === 'j') {
      const values: JustifyContent[] = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'];
      const currentIndex = values.indexOf(justifyContent);
      setJustifyContent(values[(currentIndex + 1) % values.length]);
    }

    // Cycle through alignItems values
    if (input === 'a') {
      const values: AlignItems[] = ['flex-start', 'center', 'flex-end', 'stretch'];
      const currentIndex = values.indexOf(alignItems);
      setAlignItems(values[(currentIndex + 1) % values.length]);
    }

    // Toggle direction
    if (input === 'd') {
      setFlexDirection(prev => prev === 'row' ? 'column' : 'row');
    }
  });

  return (
    <Box flexDirection="column" padding={1}>
      {/* LESSON HEADER */}
      <Box borderStyle="double" borderColor="magenta" padding={1} marginBottom={1}>
        <Text bold color="magenta">
          ⚖️ LESSON 3: Alignment & Justification
        </Text>
      </Box>

      {/* THEORY SECTION */}
      <Box flexDirection="column" borderStyle="round" borderColor="cyan" padding={2} marginBottom={1}>
        <Text bold color="cyan">📚 Understanding Axes</Text>
        <Text>
          {'\n'}
          Flexbox has two axes:
          {'\n'}
          • <Text color="yellow" bold>Main Axis</Text>: Direction of flexDirection (row = horizontal, column = vertical)
          {'\n'}
          • <Text color="green" bold>Cross Axis</Text>: Perpendicular to main axis
          {'\n\n'}
          <Text color="yellow">justifyContent</Text>: Positions items along the <Text bold>MAIN</Text> axis
          {'\n'}
          <Text color="green">alignItems</Text>: Positions items along the <Text bold>CROSS</Text> axis
        </Text>
      </Box>

      {/* CURRENT STATE */}
      <Box flexDirection="column" borderStyle="single" padding={1} marginBottom={1}>
        <Text>
          Direction: <Text bold color="blue">{flexDirection}</Text>
          {' | '}
          justifyContent: <Text bold color="yellow">{justifyContent}</Text>
          {' | '}
          alignItems: <Text bold color="green">{alignItems}</Text>
        </Text>
        <Text dimColor>
          Press <Text color="blue">D</Text> to toggle direction, 
          <Text color="yellow"> J</Text> to cycle justify, 
          <Text color="green"> A</Text> to cycle align
        </Text>
      </Box>

      {/* VISUAL AXIS GUIDE */}
      <Box flexDirection="column" borderStyle="single" borderColor="gray" padding={1} marginBottom={1}>
        <Text bold>Current Axes (for flexDirection="{flexDirection}"):</Text>
        <Box marginTop={1} flexDirection="column">
          {flexDirection === 'row' ? (
            <>
              <Text color="yellow">Main Axis →→→ (horizontal)</Text>
              <Text color="green">Cross Axis ↓ (vertical)</Text>
            </>
          ) : (
            <>
              <Text color="yellow">Main Axis ↓↓↓ (vertical)</Text>
              <Text color="green">Cross Axis → (horizontal)</Text>
            </>
          )}
        </Box>
      </Box>

      {/* INTERACTIVE DEMO */}
      <Box flexDirection="column" borderStyle="double" borderColor="cyan" padding={2} marginBottom={1}>
        <Text bold color="cyan">🎮 Interactive Playground:</Text>
        
        {/* The Demo Container */}
        <Box 
          marginTop={1}
          borderStyle="round" 
          borderColor="magenta"
          padding={1}
          /**
           * 🔑 KEY PROPERTIES IN ACTION:
           * 
           * flexDirection: {flexDirection}
           *   - Defines which direction is the main axis
           * 
           * justifyContent: {justifyContent}
           *   - Controls spacing along MAIN axis
           * 
           * alignItems: {alignItems}
           *   - Controls alignment along CROSS axis
           * 
           * Watch how the boxes move as you change these values!
           */
          flexDirection={flexDirection}
          justifyContent={justifyContent}
          alignItems={alignItems}
          height={10}  // Fixed height to see vertical alignment
          width={60}   // Fixed width to see horizontal alignment
        >
          <Box borderStyle="single" borderColor="red" padding={1}>
            <Text color="red">A</Text>
          </Box>
          <Box borderStyle="single" borderColor="yellow" padding={1}>
            <Text color="yellow">B</Text>
          </Box>
          <Box borderStyle="single" borderColor="green" padding={1}>
            <Text color="green">C</Text>
          </Box>
        </Box>

        <Box marginTop={1}>
          <Text dimColor italic>
            {flexDirection === 'row' 
              ? `Items arranged horizontally. justifyContent controls left/right, alignItems controls top/bottom.`
              : `Items arranged vertically. justifyContent controls top/bottom, alignItems controls left/right.`
            }
          </Text>
        </Box>
      </Box>

      {/* JUSTIFY CONTENT VALUES */}
      <Box flexDirection="column" borderStyle="single" borderColor="yellow" padding={2} marginBottom={1}>
        <Text bold color="yellow">📏 justifyContent Values (Main Axis):</Text>
        
        <Box marginTop={1} flexDirection="column">
          <Text>
            <Text color={justifyContent === 'flex-start' ? 'cyan' : 'white'} bold>
              flex-start
            </Text>
            {' '}(default) - Pack items at the start
          </Text>
          
          <Text>
            <Text color={justifyContent === 'center' ? 'cyan' : 'white'} bold>
              center
            </Text>
            {' '}- Pack items in the center
          </Text>
          
          <Text>
            <Text color={justifyContent === 'flex-end' ? 'cyan' : 'white'} bold>
              flex-end
            </Text>
            {' '}- Pack items at the end
          </Text>
          
          <Text>
            <Text color={justifyContent === 'space-between' ? 'cyan' : 'white'} bold>
              space-between
            </Text>
            {' '}- Distribute with space between items
          </Text>
          
          <Text>
            <Text color={justifyContent === 'space-around' ? 'cyan' : 'white'} bold>
              space-around
            </Text>
            {' '}- Distribute with space around items
          </Text>
        </Box>
      </Box>

      {/* ALIGN ITEMS VALUES */}
      <Box flexDirection="column" borderStyle="single" borderColor="green" padding={2} marginBottom={1}>
        <Text bold color="green">📐 alignItems Values (Cross Axis):</Text>
        
        <Box marginTop={1} flexDirection="column">
          <Text>
            <Text color={alignItems === 'flex-start' ? 'cyan' : 'white'} bold>
              flex-start
            </Text>
            {' '}(default) - Align at the start of cross axis
          </Text>
          
          <Text>
            <Text color={alignItems === 'center' ? 'cyan' : 'white'} bold>
              center
            </Text>
            {' '}- Center items along cross axis
          </Text>
          
          <Text>
            <Text color={alignItems === 'flex-end' ? 'cyan' : 'white'} bold>
              flex-end
            </Text>
            {' '}- Align at the end of cross axis
          </Text>
          
          <Text>
            <Text color={alignItems === 'stretch' ? 'cyan' : 'white'} bold>
              stretch
            </Text>
            {' '}- Stretch to fill container (default for items)
          </Text>
        </Box>
      </Box>

      {/* COMMON PATTERNS */}
      <Box flexDirection="column" borderStyle="double" borderColor="blue" padding={2} marginBottom={1}>
        <Text bold color="blue">🎯 Common Patterns:</Text>
        
        <Box marginTop={1} flexDirection="column">
          <Text bold>Centering (most common use case!):</Text>
          <Box borderStyle="single" padding={1} marginTop={1}>
            <Box 
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height={5}
              width={40}
              borderStyle="round"
              borderColor="cyan"
            >
              <Text color="cyan" bold>Perfectly Centered!</Text>
            </Box>
          </Box>
          <Box marginLeft={2} marginTop={1}>
            <Text dimColor>{'justifyContent="center" + alignItems="center"'}</Text>
          </Box>

          <Text bold marginTop={1}>Space Between (great for headers):</Text>
          <Box borderStyle="single" padding={1} marginTop={1}>
            <Box 
              flexDirection="row"
              justifyContent="space-between"
              width={40}
            >
              <Text color="cyan">Logo</Text>
              <Text>Menu</Text>
            </Box>
          </Box>
          <Box marginLeft={2} marginTop={1}>
            <Text dimColor>{'flexDirection="row" + justifyContent="space-between"'}</Text>
          </Box>
        </Box>
      </Box>

      {/* NAVIGATION */}
      <Box marginTop={1} borderStyle="single" padding={1}>
        <Text dimColor>
          <Text color="blue">D</Text> Direction  
          <Text color="yellow"> J</Text> Justify  
          <Text color="green"> A</Text> Align  
          <Text color="white"> M</Text> Menu
        </Text>
      </Box>

      {/* KEY TAKEAWAY */}
      <Box marginTop={1} borderStyle="double" borderColor="green" padding={1}>
        <Text bold color="green">
          ✅ Remember: justifyContent = main axis, alignItems = cross axis. Master these for perfect layouts!
        </Text>
      </Box>
    </Box>
  );
};

export default AlignmentLesson;
