/**
 * LESSON 1: Layout Basics
 * 
 * This lesson teaches the foundational concepts of Ink and Yoga:
 * - What Box component is and how it works
 * - How Yoga layout engine processes layouts
 * - The relationship between Ink and React
 */

import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

interface LessonProps {
  onBack: () => void;
}

const LayoutBasicsLesson: React.FC<LessonProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useInput((input, key) => {
    if (key.rightArrow && currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
    if (key.leftArrow && currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  });

  return (
    <Box flexDirection="column" padding={1}>
      {/* LESSON HEADER */}
      <Box borderStyle="double" borderColor="green" padding={1} marginBottom={1}>
        <Text bold color="green">
          📦 LESSON 1: Layout Basics - Understanding Box and Yoga
        </Text>
      </Box>

      {/* STEP INDICATOR */}
      <Box marginBottom={1}>
        <Text>
          Step {currentStep + 1} of 5  
          <Text dimColor> (Use ← → arrows to navigate)</Text>
        </Text>
      </Box>

      {/* LESSON CONTENT - Changes based on current step */}
      <Box flexDirection="column" borderStyle="round" padding={2}>
        
        {/* STEP 0: Introduction */}
        {currentStep === 0 && (
          <Box flexDirection="column">
            <Text bold color="cyan">
              🎯 What is Ink?
            </Text>
            <Text>
              {'\n'}
              Ink is a React renderer for building command-line interfaces.
              Instead of rendering to the browser DOM, Ink renders to your terminal.
              {'\n\n'}
              <Text color="yellow">Key Concept:</Text> You write React components with JSX,
              and Ink converts them to terminal output using ANSI escape codes.
              {'\n\n'}
            </Text>

            {/* VISUAL EXAMPLE */}
            <Box borderStyle="single" borderColor="blue" padding={1}>
              <Box flexDirection="column">
                <Text color="gray">React Code:</Text>
                <Text color="green">{'  <Box><Text>Hello</Text></Box>'}</Text>
                <Text>{'\n'}</Text>
                <Text color="gray">Terminal Output:</Text>
                <Text color="cyan">{'  Hello'}</Text>
              </Box>
            </Box>
          </Box>
        )}

        {/* STEP 1: What is Yoga */}
        {currentStep === 1 && (
          <Box flexDirection="column">
            <Text bold color="cyan">
              🧘 What is Yoga?
            </Text>
            <Text>
              {'\n'}
              Yoga is a cross-platform layout engine that implements Flexbox.
              It's the same engine used by React Native!
              {'\n\n'}
              <Text color="yellow">Key Concept:</Text> Yoga takes your Box components and
              calculates where everything should be positioned using Flexbox rules.
              {'\n\n'}
              <Text bold>The Layout Pipeline:</Text>
            </Text>
            
            <Box marginTop={1} marginLeft={2} flexDirection="column">
              <Text>1. ⚛️  You write React components with Box</Text>
              <Text>2. 🧘 Yoga calculates positions using Flexbox</Text>
              <Text>3. 🎨 Ink renders to terminal with ANSI codes</Text>
              <Text>4. 👀 You see beautiful terminal UI!</Text>
            </Box>
          </Box>
        )}

        {/* STEP 2: The Box Component */}
        {currentStep === 2 && (
          <Box flexDirection="column">
            <Text bold color="cyan">
              📦 The Box Component - Your Building Block
            </Text>
            <Text>
              {'\n'}
              Box is to Ink what {'<div>'} is to HTML.
              It's a container that can hold other components.
              {'\n\n'}
              <Text color="yellow">Every Box has Yoga layout properties:</Text>
            </Text>

            {/* LIVE DEMONSTRATION */}
            <Box marginTop={1} flexDirection="column">
              <Text dimColor>Example 1: Basic Box</Text>
              <Box borderStyle="single" borderColor="magenta" padding={1}>
                <Text>I'm inside a Box!</Text>
              </Box>

              <Text marginTop={1} dimColor>Example 2: Box with padding=2</Text>
              <Box borderStyle="single" borderColor="magenta" padding={2}>
                <Text>More space around me!</Text>
              </Box>

              <Text marginTop={1} dimColor>Example 3: Nested Boxes</Text>
              <Box borderStyle="single" borderColor="cyan" padding={1}>
                <Box borderStyle="single" borderColor="yellow" padding={1}>
                  <Text>Boxes inside boxes!</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        )}

        {/* STEP 3: Flexbox Defaults */}
        {currentStep === 3 && (
          <Box flexDirection="column">
            <Text bold color="cyan">
              ⚙️ Default Flexbox Behavior
            </Text>
            <Text>
              {'\n'}
              By default, Box has these Yoga/Flexbox properties:
              {'\n'}
            </Text>

            <Box marginLeft={2} flexDirection="column">
              <Text>• <Text color="yellow">flexDirection: "column"</Text> - Stack children vertically</Text>
              <Text>• <Text color="yellow">alignItems: "flex-start"</Text> - Align to the left</Text>
              <Text>• <Text color="yellow">justifyContent: "flex-start"</Text> - Start at the top</Text>
            </Box>

            {/* LIVE DEMONSTRATION */}
            <Box marginTop={1} flexDirection="column">
              <Text dimColor>See it in action (default flexDirection="column"):</Text>
              <Box borderStyle="single" borderColor="green" padding={1}>
                <Box flexDirection="column">
                  <Text color="red">First child (stacked vertically)</Text>
                  <Text color="yellow">Second child</Text>
                  <Text color="green">Third child</Text>
                </Box>
              </Box>

              <Text marginTop={1} dimColor>Compare with flexDirection="row":</Text>
              <Box borderStyle="single" borderColor="blue" padding={1}>
                <Box flexDirection="row">
                  <Text color="red">First </Text>
                  <Text color="yellow">Second </Text>
                  <Text color="green">Third</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        )}

        {/* STEP 4: Try It Yourself */}
        {currentStep === 4 && (
          <Box flexDirection="column">
            <Text bold color="cyan">
              🎓 Summary & Key Takeaways
            </Text>
            
            <Box marginTop={1} flexDirection="column">
              <Text>
                <Text color="green">✓</Text> Ink = React renderer for terminals
              </Text>
              <Text>
                <Text color="green">✓</Text> Yoga = Flexbox layout engine (like CSS)
              </Text>
              <Text>
                <Text color="green">✓</Text> Box = Your primary layout component
              </Text>
              <Text>
                <Text color="green">✓</Text> Default layout is vertical (column)
              </Text>
            </Box>

            <Box 
              marginTop={2} 
              borderStyle="double" 
              borderColor="yellow" 
              padding={1}
            >
              <Box flexDirection="column">
                <Text bold color="yellow">💡 Pro Tip:</Text>
                <Text>
                  Think of every Box as a flexbox container.
                  All the CSS flexbox knowledge you have applies here!
                </Text>
              </Box>
            </Box>

            <Box marginTop={2}>
              <Text color="magenta" italic>
                Ready to learn more? Go back to the menu and try the next lesson!
              </Text>
            </Box>
          </Box>
        )}
      </Box>

      {/* NAVIGATION FOOTER */}
      <Box marginTop={1} borderStyle="single" padding={1}>
        <Text dimColor>
          <Text color="cyan">← →</Text> Navigate steps  
          <Text color="yellow"> M</Text> Menu  
          <Text color="yellow"> ESC</Text> Back
        </Text>
      </Box>
    </Box>
  );
};

export default LayoutBasicsLesson;
