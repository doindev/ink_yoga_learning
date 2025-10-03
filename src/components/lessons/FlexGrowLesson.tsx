/**
 * LESSON 5: Flexible Sizing
 * 
 * Teaches how to create responsive, flexible layouts:
 * - flexGrow: How much to grow relative to siblings
 * - flexShrink: How much to shrink when space is limited
 * - flexBasis: Initial size before growing/shrinking
 */

import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

interface LessonProps {
  onBack: () => void;
}

const FlexGrowLesson: React.FC<LessonProps> = ({ onBack }) => {
  const [box1Grow, setBox1Grow] = useState(1);
  const [box2Grow, setBox2Grow] = useState(1);
  const [box3Grow, setBox3Grow] = useState(1);

  useInput((input) => {
    if (input === '1') {
      setBox1Grow(prev => (prev + 1) % 5);
    }
    if (input === '2') {
      setBox2Grow(prev => (prev + 1) % 5);
    }
    if (input === '3') {
      setBox3Grow(prev => (prev + 1) % 5);
    }
  });

  const totalGrow = box1Grow + box2Grow + box3Grow;

  return (
    <Box flexDirection="column" padding={1}>
      {/* LESSON HEADER */}
      <Box borderStyle="double" borderColor="green" padding={1} marginBottom={1}>
        <Text bold color="green">
          🔄 LESSON 5: Flexible Sizing with flexGrow
        </Text>
      </Box>

      {/* THEORY */}
      <Box flexDirection="column" borderStyle="round" borderColor="cyan" padding={2} marginBottom={1}>
        <Text bold color="cyan">📚 What is flexGrow?</Text>
        <Text>
          {'\n'}
          <Text color="yellow">flexGrow</Text> determines how much a component should grow 
          to fill available space, <Text bold>relative to its siblings</Text>.
          {'\n\n'}
          <Text bold>How it works:</Text>
          {'\n'}
          1. Yoga calculates leftover space in the container
          {'\n'}
          2. It divides that space based on flexGrow values
          {'\n'}
          3. Components with higher flexGrow get more space
          {'\n\n'}
          <Text color="magenta">Think of it like slicing a pie!</Text> 
          {' '}flexGrow values are the ratios.
        </Text>
      </Box>

      {/* CONTROLS */}
      <Box borderStyle="single" padding={1} marginBottom={1}>
        <Text>
          Box 1 grow: <Text bold color="red">{box1Grow}</Text>
          {' | '}
          Box 2 grow: <Text bold color="yellow">{box2Grow}</Text>
          {' | '}
          Box 3 grow: <Text bold color="green">{box3Grow}</Text>
        </Text>
        <Text dimColor>
          Press <Text color="red">1</Text>, <Text color="yellow">2</Text>, or <Text color="green">3</Text> to cycle their flexGrow values
        </Text>
      </Box>

      {/* CALCULATION EXPLANATION */}
      <Box flexDirection="column" borderStyle="single" borderColor="blue" padding={1} marginBottom={1}>
        <Text bold color="blue">📊 Current Distribution:</Text>
        {totalGrow > 0 ? (
          <Box marginTop={1} flexDirection="column">
            <Text>
              Box 1: {box1Grow}/{totalGrow} = <Text bold color="red">{Math.round(box1Grow / totalGrow * 100)}%</Text>
            </Text>
            <Text>
              Box 2: {box2Grow}/{totalGrow} = <Text bold color="yellow">{Math.round(box2Grow / totalGrow * 100)}%</Text>
            </Text>
            <Text>
              Box 3: {box3Grow}/{totalGrow} = <Text bold color="green">{Math.round(box3Grow / totalGrow * 100)}%</Text>
            </Text>
          </Box>
        ) : (
          <Text dimColor>All values are 0 - boxes use their natural size</Text>
        )}
      </Box>

      {/* INTERACTIVE DEMO */}
      <Box flexDirection="column" marginBottom={1}>
        <Text bold>🎮 Watch flexGrow in Action:</Text>
        
        <Box 
          marginTop={1}
          borderStyle="double" 
          borderColor="magenta"
          padding={1}
          /**
           * This container has a fixed width
           * The children will grow to fill this space based on their flexGrow values
           */
          width={60}
          flexDirection="row"
        >
          {/* BOX 1 - Red */}
          <Box 
            borderStyle="single" 
            borderColor="red"
            padding={1}
            /**
             * 🔑 KEY PROPERTY: flexGrow
             * 
             * flexGrow={box1Grow} 
             * 
             * This tells Yoga: "Take {box1Grow} parts of leftover space"
             * 
             * If box1Grow=2 and box2Grow=1:
             * - Box 1 gets 2/3 of leftover space
             * - Box 2 gets 1/3 of leftover space
             */
            flexGrow={box1Grow}
          >
            <Text color="red">
              Box 1{'\n'}
              grow:{box1Grow}
            </Text>
          </Box>

          {/* BOX 2 - Yellow */}
          <Box 
            borderStyle="single" 
            borderColor="yellow"
            padding={1}
            flexGrow={box2Grow}
          >
            <Text color="yellow">
              Box 2{'\n'}
              grow:{box2Grow}
            </Text>
          </Box>

          {/* BOX 3 - Green */}
          <Box 
            borderStyle="single" 
            borderColor="green"
            padding={1}
            flexGrow={box3Grow}
          >
            <Text color="green">
              Box 3{'\n'}
              grow:{box3Grow}
            </Text>
          </Box>
        </Box>

        <Text dimColor marginTop={1} italic>
          The boxes grow proportionally to fill the 60-character width
        </Text>
      </Box>

      {/* COMMON PATTERNS */}
      <Box flexDirection="column" borderStyle="single" borderColor="yellow" padding={2} marginBottom={1}>
        <Text bold color="yellow">🎯 Common flexGrow Patterns:</Text>
        
        <Box marginTop={1} flexDirection="column">
          {/* Pattern 1 */}
          <Text bold>1. Sidebar + Main Content (flexGrow 0 + 1):</Text>
          <Box marginTop={1} flexDirection="row" width={50}>
            <Box 
              borderStyle="single" 
              borderColor="cyan"
              padding={1}
              width={15}
              flexGrow={0}
            >
              <Text>Sidebar{'\n'}fixed</Text>
            </Box>
            <Box 
              borderStyle="single" 
              borderColor="green"
              padding={1}
              flexGrow={1}
            >
              <Text>Main content grows to fill space</Text>
            </Box>
          </Box>
          <Text dimColor marginLeft={2}>Sidebar stays fixed, content takes remaining space</Text>

          {/* Pattern 2 */}
          <Text bold marginTop={2}>2. Three Equal Columns (all flexGrow 1):</Text>
          <Box marginTop={1} flexDirection="row" width={50}>
            <Box borderStyle="single" borderColor="red" padding={1} flexGrow={1}>
              <Text>Col 1</Text>
            </Box>
            <Box borderStyle="single" borderColor="yellow" padding={1} flexGrow={1}>
              <Text>Col 2</Text>
            </Box>
            <Box borderStyle="single" borderColor="green" padding={1} flexGrow={1}>
              <Text>Col 3</Text>
            </Box>
          </Box>
          <Text dimColor marginLeft={2}>All columns get equal space</Text>

          {/* Pattern 3 */}
          <Text bold marginTop={2}>3. Emphasized Content (flexGrow 2 + 1 + 1):</Text>
          <Box marginTop={1} flexDirection="row" width={50}>
            <Box borderStyle="single" borderColor="cyan" padding={1} flexGrow={2}>
              <Text>Main (2x)</Text>
            </Box>
            <Box borderStyle="single" borderColor="gray" padding={1} flexGrow={1}>
              <Text>Side</Text>
            </Box>
            <Box borderStyle="single" borderColor="gray" padding={1} flexGrow={1}>
              <Text>Side</Text>
            </Box>
          </Box>
          <Text dimColor marginLeft={2}>Main content gets twice the space of sidebars</Text>
        </Box>
      </Box>

      {/* FLEXSHRINK & FLEXBASIS */}
      <Box flexDirection="column" borderStyle="single" borderColor="magenta" padding={2} marginBottom={1}>
        <Text bold color="magenta">🔍 Related Properties:</Text>
        
        <Box marginTop={1} flexDirection="column">
          <Text>
            <Text color="yellow" bold>flexShrink</Text>: How much to shrink when space is tight (default: 1)
          </Text>
          <Text dimColor marginLeft={2}>
            Higher values shrink more. Set to 0 to prevent shrinking.
          </Text>

          <Text marginTop={1}>
            <Text color="green" bold>flexBasis</Text>: Initial size before growing/shrinking
          </Text>
          <Text dimColor marginLeft={2}>
            Like a "preferred size" that flexGrow/flexShrink work from
          </Text>

          <Text marginTop={1} bold>Example:</Text>
          <Box marginLeft={2} marginTop={1} flexDirection="column">
            <Text dimColor>{'<Box flexBasis={20} flexGrow={1}>'}</Text>
            <Text dimColor>  Starts at 20 chars, then grows to fill space</Text>
            <Text dimColor>{'</Box>'}</Text>
          </Box>
        </Box>
      </Box>

      {/* REAL WORLD EXAMPLES */}
      <Box flexDirection="column" borderStyle="double" borderColor="blue" padding={2} marginBottom={1}>
        <Text bold color="blue">🌍 Real World Use Cases:</Text>
        
        <Box marginTop={1} flexDirection="column">
          <Text bold>Navigation Bar with Logo and Menu:</Text>
          <Box marginTop={1} borderStyle="single" padding={1} flexDirection="row">
            <Box borderStyle="round" borderColor="cyan" padding={1} flexGrow={0}>
              <Text>🏠 Logo</Text>
            </Box>
            <Box flexGrow={1} />
            <Box flexDirection="row">
              <Text>[Home] [About] [Contact]</Text>
            </Box>
          </Box>
          <Text dimColor marginLeft={2}>Logo fixed, spacer with flexGrow={'{1}'}, menu at end</Text>

          <Text bold marginTop={2}>Progress Bar:</Text>
          <Box marginTop={1} flexDirection="row" width={40}>
            <Box 
              backgroundColor="green" 
              flexGrow={3}
            >
              <Text color="black"> 75% </Text>
            </Box>
            <Box 
              backgroundColor="gray" 
              flexGrow={1}
            >
              <Text> </Text>
            </Box>
          </Box>
          <Text dimColor marginLeft={2}>Filled portion: flexGrow={'{3}'}, empty: flexGrow={'{1}'}</Text>

          <Text bold marginTop={2}>Dashboard Layout:</Text>
          <Box marginTop={1} flexDirection="row" height={8}>
            <Box 
              flexGrow={1} 
              borderStyle="single" 
              borderColor="cyan"
              padding={1}
            >
              <Text>Sidebar{'\n'}Navigation</Text>
            </Box>
            <Box 
              flexGrow={3} 
              borderStyle="single" 
              borderColor="green"
              padding={1}
              flexDirection="column"
            >
              <Text bold>Main Dashboard</Text>
              <Text>Content area gets most space</Text>
            </Box>
            <Box 
              flexGrow={1} 
              borderStyle="single" 
              borderColor="yellow"
              padding={1}
            >
              <Text>Details{'\n'}Panel</Text>
            </Box>
          </Box>
          <Text dimColor marginLeft={2}>Sidebar: 1x, Main: 3x, Details: 1x</Text>
        </Box>
      </Box>

      {/* NAVIGATION */}
      <Box marginTop={1} borderStyle="single" padding={1}>
        <Text dimColor>
          <Text color="red">1</Text><Text color="yellow"> 2</Text><Text color="green"> 3</Text> Cycle flexGrow  
          <Text color="white"> M</Text> Menu
        </Text>
      </Box>

      {/* KEY TAKEAWAY */}
      <Box marginTop={1} borderStyle="double" borderColor="green" padding={1}>
        <Text bold color="green">
          ✅ Master flexGrow to create fluid, responsive layouts that adapt to available space!
        </Text>
      </Box>
    </Box>
  );
};

export default FlexGrowLesson;
