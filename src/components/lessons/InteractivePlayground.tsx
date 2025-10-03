/**
 * LESSON 7: Interactive Playground
 * 
 * Hands-on experimentation with all Yoga layout properties.
 * Users can adjust values in real-time and see immediate results.
 */

import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

interface LessonProps {
  onBack: () => void;
}

type FlexDirection = 'row' | 'column';
type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
type AlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch';

const InteractivePlayground: React.FC<LessonProps> = ({ onBack }) => {
  // Container properties
  const [flexDirection, setFlexDirection] = useState<FlexDirection>('row');
  const [justifyContent, setJustifyContent] = useState<JustifyContent>('flex-start');
  const [alignItems, setAlignItems] = useState<AlignItems>('flex-start');
  const [padding, setPadding] = useState(1);
  
  // Child properties
  const [childFlexGrow, setChildFlexGrow] = useState(0);
  const [childPadding, setChildPadding] = useState(1);
  const [childMargin, setChildMargin] = useState(0);

  useInput((input) => {
    // Container controls
    if (input === 'd') {
      setFlexDirection(prev => prev === 'row' ? 'column' : 'row');
    }
    
    if (input === 'j') {
      const values: JustifyContent[] = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'];
      const index = values.indexOf(justifyContent);
      setJustifyContent(values[(index + 1) % values.length]);
    }
    
    if (input === 'a') {
      const values: AlignItems[] = ['flex-start', 'center', 'flex-end', 'stretch'];
      const index = values.indexOf(alignItems);
      setAlignItems(values[(index + 1) % values.length]);
    }
    
    if (input === 'p' && padding < 3) {
      setPadding(prev => prev + 1);
    }
    if (input === 'P' && padding > 0) {
      setPadding(prev => prev - 1);
    }

    // Child controls
    if (input === 'g') {
      setChildFlexGrow(prev => (prev + 1) % 4);
    }
    
    if (input === 'c' && childPadding < 3) {
      setChildPadding(prev => prev + 1);
    }
    if (input === 'C' && childPadding > 0) {
      setChildPadding(prev => prev - 1);
    }
    
    if (input === 'm' && childMargin < 3) {
      setChildMargin(prev => prev + 1);
    }
    if (input === 'M' && childMargin > 0) {
      setChildMargin(prev => prev - 1);
    }

    // Reset
    if (input === 'r') {
      setFlexDirection('row');
      setJustifyContent('flex-start');
      setAlignItems('flex-start');
      setPadding(1);
      setChildFlexGrow(0);
      setChildPadding(1);
      setChildMargin(0);
    }
  });

  return (
    <Box flexDirection="column" padding={1}>
      {/* HEADER */}
      <Box borderStyle="double" borderColor="magenta" padding={1} marginBottom={1}>
        <Text bold color="magenta">
          🎮 INTERACTIVE PLAYGROUND - Experiment with Yoga Properties!
        </Text>
      </Box>

      {/* INSTRUCTIONS */}
      <Box flexDirection="column" borderStyle="single" borderColor="cyan" padding={1} marginBottom={1}>
        <Text bold color="cyan">🎯 How to Use:</Text>
        <Box marginTop={1} flexDirection="column">
          <Text>Adjust properties in real-time and see how they affect the layout.</Text>
          <Text>The colored boxes below will update as you change values.</Text>
        </Box>
      </Box>

      {/* CURRENT SETTINGS */}
      <Box flexDirection="column" borderStyle="round" borderColor="yellow" padding={1} marginBottom={1}>
        <Text bold color="yellow">⚙️ Current Settings:</Text>
        
        <Box marginTop={1} flexDirection="column">
          <Text bold>Container Properties:</Text>
          <Box marginLeft={2} flexDirection="column">
            <Text>
              flexDirection: <Text color="cyan">{flexDirection}</Text>
            </Text>
            <Text>
              justifyContent: <Text color="cyan">{justifyContent}</Text>
            </Text>
            <Text>
              alignItems: <Text color="cyan">{alignItems}</Text>
            </Text>
            <Text>
              padding: <Text color="cyan">{padding}</Text>
            </Text>
          </Box>

          <Text bold marginTop={1}>Child Properties:</Text>
          <Box marginLeft={2} flexDirection="column">
            <Text>
              flexGrow: <Text color="green">{childFlexGrow}</Text>
            </Text>
            <Text>
              padding: <Text color="green">{childPadding}</Text>
            </Text>
            <Text>
              margin: <Text color="green">{childMargin}</Text>
            </Text>
          </Box>
        </Box>
      </Box>

      {/* THE PLAYGROUND */}
      <Box flexDirection="column" marginBottom={1}>
        <Text bold color="magenta">🎨 Live Preview:</Text>
        
        {/* Container */}
        <Box 
          marginTop={1}
          borderStyle="double" 
          borderColor="magenta"
          /**
           * 🔑 CONTAINER PROPERTIES YOU'RE CONTROLLING:
           * 
           * These properties affect how children are laid out
           */
          flexDirection={flexDirection}
          justifyContent={justifyContent}
          alignItems={alignItems}
          padding={padding}
          height={15}
          width={65}
        >
          {/* Child Boxes */}
          {[1, 2, 3].map(num => (
            <Box
              key={num}
              borderStyle="round"
              borderColor={num === 1 ? 'red' : num === 2 ? 'yellow' : 'green'}
              /**
               * 🔑 CHILD PROPERTIES YOU'RE CONTROLLING:
               * 
               * These properties affect this individual child
               */
              flexGrow={childFlexGrow}
              padding={childPadding}
              margin={childMargin}
            >
              <Text color={num === 1 ? 'red' : num === 2 ? 'yellow' : 'green'}>
                Box {num}
                {'\n'}
                {childFlexGrow > 0 && `grow: ${childFlexGrow}`}
              </Text>
            </Box>
          ))}
        </Box>

        {/* Visual Explanation */}
        <Box marginTop={1} borderStyle="single" padding={1}>
          <Box flexDirection="column">
            <Text dimColor italic>
              {flexDirection === 'row' 
                ? '→ Boxes arranged horizontally'
                : '↓ Boxes stacked vertically'
              }
            </Text>
            <Text dimColor italic>
              justifyContent affects {flexDirection === 'row' ? 'left-to-right' : 'top-to-bottom'} spacing
            </Text>
            <Text dimColor italic>
              alignItems affects {flexDirection === 'row' ? 'top-to-bottom' : 'left-to-right'} alignment
            </Text>
            {childFlexGrow > 0 && (
              <Text dimColor italic>
                Boxes growing to fill space with flexGrow={childFlexGrow}
              </Text>
            )}
          </Box>
        </Box>
      </Box>

      {/* CODE PREVIEW */}
      <Box flexDirection="column" borderStyle="single" borderColor="blue" padding={1} marginBottom={1}>
        <Text bold color="blue">💻 Generated Code:</Text>
        
        <Box marginTop={1} flexDirection="column" marginLeft={1}>
          <Text color="gray">{'<Box'}</Text>
          <Text color="gray">{'  flexDirection="' + flexDirection + '"'}</Text>
          <Text color="gray">{'  justifyContent="' + justifyContent + '"'}</Text>
          <Text color="gray">{'  alignItems="' + alignItems + '"'}</Text>
          <Text color="gray">{'  padding={' + padding + '}'}</Text>
          <Text color="gray">{'>'}</Text>
          <Text color="gray">{'  <Box'}</Text>
          {childFlexGrow > 0 && <Text color="gray">{'    flexGrow={' + childFlexGrow + '}'}</Text>}
          {childPadding > 0 && <Text color="gray">{'    padding={' + childPadding + '}'}</Text>}
          {childMargin > 0 && <Text color="gray">{'    margin={' + childMargin + '}'}</Text>}
          <Text color="gray">{'  >'}</Text>
          <Text color="gray">{'    Content'}</Text>
          <Text color="gray">{'  </Box>'}</Text>
          <Text color="gray">{'  {/* Repeat for other children */}'}</Text>
          <Text color="gray">{'</Box>'}</Text>
        </Box>
      </Box>

      {/* CONTROLS GUIDE */}
      <Box flexDirection="column" borderStyle="double" borderColor="green" padding={1} marginBottom={1}>
        <Text bold color="green">🎮 Controls:</Text>
        
        <Box marginTop={1} flexDirection="column">
          <Text bold>Container Properties:</Text>
          <Box marginLeft={2} flexDirection="column">
            <Text><Text color="cyan">D</Text> Toggle flexDirection (row/column)</Text>
            <Text><Text color="cyan">J</Text> Cycle justifyContent</Text>
            <Text><Text color="cyan">A</Text> Cycle alignItems</Text>
            <Text><Text color="cyan">P/p</Text> Adjust padding (P=decrease, p=increase)</Text>
          </Box>

          <Text bold marginTop={1}>Child Properties:</Text>
          <Box marginLeft={2} flexDirection="column">
            <Text><Text color="green">G</Text> Cycle flexGrow (0-3)</Text>
            <Text><Text color="green">C/c</Text> Adjust child padding</Text>
            <Text><Text color="green">M/m</Text> Adjust child margin</Text>
          </Box>

          <Text bold marginTop={1}>Other:</Text>
          <Box marginLeft={2} flexDirection="column">
            <Text><Text color="yellow">R</Text> Reset all to defaults</Text>
            <Text><Text color="yellow">ESC</Text> Back to menu</Text>
          </Box>
        </Box>
      </Box>

      {/* EXPERIMENTS */}
      <Box flexDirection="column" borderStyle="single" borderColor="yellow" padding={1} marginBottom={1}>
        <Text bold color="yellow">🧪 Try These Experiments:</Text>
        
        <Box marginTop={1} flexDirection="column">
          <Text>1. Set flexDirection to "row" and justifyContent to "space-between"</Text>
          <Text>   → See boxes spread across the width</Text>
          
          <Text marginTop={1}>2. Set flexDirection to "column" and alignItems to "center"</Text>
          <Text>   → See boxes centered horizontally</Text>
          
          <Text marginTop={1}>3. Set all boxes to flexGrow=1</Text>
          <Text>   → See boxes share space equally</Text>
          
          <Text marginTop={1}>4. Increase padding and margin values</Text>
          <Text>   → See how spacing affects the layout</Text>
          
          <Text marginTop={1}>5. Try justifyContent="space-around" with flexDirection="row"</Text>
          <Text>   → See even distribution with end spacing</Text>
        </Box>
      </Box>

      {/* KEY TAKEAWAY */}
      <Box borderStyle="double" borderColor="cyan" padding={1}>
        <Text bold color="cyan">
          ✅ Master Tip: The best way to learn Yoga is by experimenting! Try different combinations!
        </Text>
      </Box>
    </Box>
  );
};

export default InteractivePlayground;
