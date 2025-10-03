/**
 * LESSON 6: Real World Examples
 * 
 * Shows complete, production-ready layout patterns:
 * - Headers and footers
 * - Sidebars and navigation
 * - Grids and cards
 * - Forms and inputs
 * - Modal dialogs
 */

import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

interface LessonProps {
  onBack: () => void;
}

type Example = 'header' | 'sidebar' | 'grid' | 'form' | 'modal' | 'dashboard';

const RealWorldExamples: React.FC<LessonProps> = ({ onBack }) => {
  const [currentExample, setCurrentExample] = useState<Example>('header');

  useInput((input) => {
    const examples: Example[] = ['header', 'sidebar', 'grid', 'form', 'modal', 'dashboard'];
    const currentIndex = examples.indexOf(currentExample);
    
    if (input === 'n') {
      setCurrentExample(examples[(currentIndex + 1) % examples.length]);
    }
    if (input === 'p') {
      setCurrentExample(examples[(currentIndex - 1 + examples.length) % examples.length]);
    }
  });

  return (
    <Box flexDirection="column" padding={1}>
      {/* LESSON HEADER */}
      <Box borderStyle="double" borderColor="cyan" padding={1} marginBottom={1}>
        <Text bold color="cyan">
          🌍 LESSON 6: Real World Layout Patterns
        </Text>
      </Box>

      {/* NAVIGATION */}
      <Box borderStyle="single" padding={1} marginBottom={1}>
        <Text>
          Viewing: <Text bold color="yellow">{currentExample.toUpperCase()}</Text>
          {' '}
          <Text dimColor>(Press <Text color="cyan">N</Text>ext or <Text color="cyan">P</Text>rev)</Text>
        </Text>
      </Box>

      {/* EXAMPLES */}
      <Box flexDirection="column" flexGrow={1}>
        
        {/* EXAMPLE 1: Header/Footer Pattern */}
        {currentExample === 'header' && (
          <Box flexDirection="column">
            <Text bold color="yellow">Pattern 1: Header + Content + Footer</Text>
            <Text dimColor>The most common app layout structure</Text>
            
            {/* Live Demo */}
            <Box marginTop={1} flexDirection="column" height={20} borderStyle="double" borderColor="green">
              {/* Header */}
              <Box 
                borderStyle="single" 
                borderColor="cyan"
                padding={1}
                /**
                 * Header is fixed height, doesn't grow
                 */
                flexGrow={0}
              >
                <Box flexDirection="row" justifyContent="space-between">
                  <Text bold color="cyan">🏠 My App</Text>
                  <Text>[Home] [About] [Settings]</Text>
                </Box>
              </Box>

              {/* Content - grows to fill space */}
              <Box 
                borderStyle="single" 
                borderColor="green"
                padding={1}
                /**
                 * 🔑 Content area uses flexGrow={1}
                 * This makes it take up all remaining vertical space
                 */
                flexGrow={1}
              >
                <Text>Main content area - grows to fill available space</Text>
              </Box>

              {/* Footer */}
              <Box 
                borderStyle="single" 
                borderColor="yellow"
                padding={1}
                /**
                 * Footer is fixed height, doesn't grow
                 */
                flexGrow={0}
              >
                <Text dimColor>© 2025 | Status: Online | Version 1.0</Text>
              </Box>
            </Box>

            {/* Code */}
            <Box marginTop={1} borderStyle="single" padding={1}>
              <Box flexDirection="column">
                <Text color="cyan">The Code:</Text>
                <Text dimColor>{'<Box flexDirection="column" height="100%">'}</Text>
                <Text dimColor>{'  <Box flexGrow={0}> Header </Box>'}</Text>
                <Text dimColor>{'  <Box flexGrow={1}> Content </Box>'}</Text>
                <Text dimColor>{'  <Box flexGrow={0}> Footer </Box>'}</Text>
                <Text dimColor>{'</Box>'}</Text>
              </Box>
            </Box>
          </Box>
        )}

        {/* EXAMPLE 2: Sidebar Layout */}
        {currentExample === 'sidebar' && (
          <Box flexDirection="column">
            <Text bold color="yellow">Pattern 2: Sidebar Navigation</Text>
            <Text dimColor>Vertical navigation with main content area</Text>
            
            {/* Live Demo */}
            <Box 
              marginTop={1} 
              flexDirection="row" 
              height={15} 
              borderStyle="double" 
              borderColor="blue"
            >
              {/* Sidebar */}
              <Box 
                borderStyle="single" 
                borderColor="magenta"
                padding={1}
                /**
                 * 🔑 Sidebar uses fixed width or small flexGrow
                 * flexBasis gives it a preferred width
                 */
                width={20}
                flexShrink={0}
              >
                <Box flexDirection="column">
                  <Text bold color="magenta">Navigation</Text>
                  <Text marginTop={1} color="cyan">▶ Dashboard</Text>
                  <Text>  Users</Text>
                  <Text>  Settings</Text>
                  <Text>  Reports</Text>
                  <Text>  Logout</Text>
                </Box>
              </Box>

              {/* Main Content */}
              <Box 
                borderStyle="single" 
                borderColor="green"
                padding={1}
                /**
                 * 🔑 Main content uses flexGrow={1}
                 * Takes all remaining horizontal space
                 */
                flexGrow={1}
              >
                <Box flexDirection="column">
                  <Text bold color="green">Dashboard Content</Text>
                  <Text marginTop={1}>
                    This area grows to fill remaining space.
                  </Text>
                  <Text>
                    Perfect for displaying main application content.
                  </Text>
                </Box>
              </Box>
            </Box>

            {/* Code */}
            <Box marginTop={1} borderStyle="single" padding={1}>
              <Box flexDirection="column">
                <Text color="cyan">The Code:</Text>
                <Text dimColor>{'<Box flexDirection="row" height="100%">'}</Text>
                <Text dimColor>{'  <Box width={20} flexShrink={0}>'}</Text>
                <Text dimColor>{'    Sidebar Navigation'}</Text>
                <Text dimColor>{'  </Box>'}</Text>
                <Text dimColor>{'  <Box flexGrow={1}>'}</Text>
                <Text dimColor>{'    Main Content'}</Text>
                <Text dimColor>{'  </Box>'}</Text>
                <Text dimColor>{'</Box>'}</Text>
              </Box>
            </Box>
          </Box>
        )}

        {/* EXAMPLE 3: Grid Layout */}
        {currentExample === 'grid' && (
          <Box flexDirection="column">
            <Text bold color="yellow">Pattern 3: Card Grid</Text>
            <Text dimColor>Responsive grid of equal-sized cards</Text>
            
            {/* Live Demo */}
            <Box marginTop={1} flexDirection="column" borderStyle="double" borderColor="cyan">
              {/* Row 1 */}
              <Box flexDirection="row" padding={1}>
                <Box 
                  borderStyle="round" 
                  borderColor="red"
                  padding={1}
                  /**
                   * 🔑 Each card uses flexGrow={1} and margin
                   * This creates equal-width columns with spacing
                   */
                  flexGrow={1}
                  marginX={1}
                >
                  <Box flexDirection="column">
                    <Text bold color="red">📊 Analytics</Text>
                    <Text dimColor>View stats</Text>
                  </Box>
                </Box>

                <Box 
                  borderStyle="round" 
                  borderColor="yellow"
                  padding={1}
                  flexGrow={1}
                  marginX={1}
                >
                  <Box flexDirection="column">
                    <Text bold color="yellow">👥 Users</Text>
                    <Text dimColor>1,234 active</Text>
                  </Box>
                </Box>

                <Box 
                  borderStyle="round" 
                  borderColor="green"
                  padding={1}
                  flexGrow={1}
                  marginX={1}
                >
                  <Box flexDirection="column">
                    <Text bold color="green">💰 Revenue</Text>
                    <Text dimColor>$45,678</Text>
                  </Box>
                </Box>
              </Box>

              {/* Row 2 */}
              <Box flexDirection="row" padding={1}>
                <Box 
                  borderStyle="round" 
                  borderColor="blue"
                  padding={1}
                  flexGrow={1}
                  marginX={1}
                >
                  <Box flexDirection="column">
                    <Text bold color="blue">📈 Growth</Text>
                    <Text dimColor>+12.5%</Text>
                  </Box>
                </Box>

                <Box 
                  borderStyle="round" 
                  borderColor="magenta"
                  padding={1}
                  flexGrow={1}
                  marginX={1}
                >
                  <Box flexDirection="column">
                    <Text bold color="magenta">🎯 Goals</Text>
                    <Text dimColor>8/10 met</Text>
                  </Box>
                </Box>

                <Box 
                  borderStyle="round" 
                  borderColor="cyan"
                  padding={1}
                  flexGrow={1}
                  marginX={1}
                >
                  <Box flexDirection="column">
                    <Text bold color="cyan">⭐ Rating</Text>
                    <Text dimColor>4.8/5.0</Text>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Code */}
            <Box marginTop={1} borderStyle="single" padding={1}>
              <Box flexDirection="column">
                <Text color="cyan">The Code:</Text>
                <Text dimColor>{'<Box flexDirection="column">'}</Text>
                <Text dimColor>{'  <Box flexDirection="row">'}</Text>
                <Text dimColor>{'    <Box flexGrow={1} marginX={1}>Card</Box>'}</Text>
                <Text dimColor>{'    <Box flexGrow={1} marginX={1}>Card</Box>'}</Text>
                <Text dimColor>{'    <Box flexGrow={1} marginX={1}>Card</Box>'}</Text>
                <Text dimColor>{'  </Box>'}</Text>
                <Text dimColor>{'  <!-- Repeat for more rows -->'}</Text>
                <Text dimColor>{'</Box>'}</Text>
              </Box>
            </Box>
          </Box>
        )}

        {/* EXAMPLE 4: Form Layout */}
        {currentExample === 'form' && (
          <Box flexDirection="column">
            <Text bold color="yellow">Pattern 4: Form Layout</Text>
            <Text dimColor>Structured input form with labels</Text>
            
            {/* Live Demo */}
            <Box 
              marginTop={1} 
              borderStyle="double" 
              borderColor="green"
              padding={2}
            >
              <Text bold color="green">User Registration Form</Text>
              
              {/* Form Fields */}
              <Box flexDirection="column" marginTop={1}>
                {/* Field 1 */}
                <Box flexDirection="row" marginY={1}>
                  <Box width={15}>
                    <Text>Name:</Text>
                  </Box>
                  <Box 
                    borderStyle="single" 
                    paddingX={1}
                    /**
                     * 🔑 Input field uses flexGrow={1}
                     * Takes remaining space after label
                     */
                    flexGrow={1}
                  >
                    <Text dimColor>John Doe</Text>
                  </Box>
                </Box>

                {/* Field 2 */}
                <Box flexDirection="row" marginY={1}>
                  <Box width={15}>
                    <Text>Email:</Text>
                  </Box>
                  <Box borderStyle="single" paddingX={1} flexGrow={1}>
                    <Text dimColor>john@example.com</Text>
                  </Box>
                </Box>

                {/* Field 3 */}
                <Box flexDirection="row" marginY={1}>
                  <Box width={15}>
                    <Text>Password:</Text>
                  </Box>
                  <Box borderStyle="single" paddingX={1} flexGrow={1}>
                    <Text dimColor>••••••••</Text>
                  </Box>
                </Box>

                {/* Buttons */}
                <Box flexDirection="row" marginTop={2} justifyContent="flex-end">
                  <Box borderStyle="round" borderColor="gray" paddingX={2}>
                    <Text>Cancel</Text>
                  </Box>
                  <Box borderStyle="round" borderColor="green" paddingX={2} marginLeft={2}>
                    <Text color="green" bold>Submit</Text>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Code */}
            <Box marginTop={1} borderStyle="single" padding={1}>
              <Box flexDirection="column">
                <Text color="cyan">The Code:</Text>
                <Text dimColor>{'<Box flexDirection="row">'}</Text>
                <Text dimColor>{'  <Box width={15}>Label</Box>'}</Text>
                <Text dimColor>{'  <Box flexGrow={1}>Input Field</Box>'}</Text>
                <Text dimColor>{'</Box>'}</Text>
              </Box>
            </Box>
          </Box>
        )}

        {/* EXAMPLE 5: Modal Dialog */}
        {currentExample === 'modal' && (
          <Box flexDirection="column">
            <Text bold color="yellow">Pattern 5: Centered Modal</Text>
            <Text dimColor>Overlay dialog centered on screen</Text>
            
            {/* Live Demo */}
            <Box 
              marginTop={1}
              borderStyle="double" 
              borderColor="gray"
              height={20}
              /**
               * 🔑 Outer container centers the modal
               * using justifyContent and alignItems
               */
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              padding={2}
            >
              <Text dimColor>[ Background / Backdrop ]</Text>
              
              {/* Modal */}
              <Box 
                borderStyle="double" 
                borderColor="red"
                padding={2}
                minWidth={40}
              >
                <Box flexDirection="column">
                  <Text bold color="red">⚠️ Confirm Action</Text>
                  
                  <Box marginTop={1} marginBottom={2}>
                    <Text>Are you sure you want to delete this item?</Text>
                    <Text>This action cannot be undone.</Text>
                  </Box>

                  <Box flexDirection="row" justifyContent="flex-end">
                    <Box borderStyle="round" paddingX={2} marginRight={2}>
                      <Text>Cancel</Text>
                    </Box>
                    <Box borderStyle="round" borderColor="red" paddingX={2}>
                      <Text color="red" bold>Delete</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              
              <Text dimColor marginTop={1}>[ Background continues ]</Text>
            </Box>

            {/* Code */}
            <Box marginTop={1} borderStyle="single" padding={1}>
              <Box flexDirection="column">
                <Text color="cyan">The Code:</Text>
                <Text dimColor>{'<Box flexDirection="column"'}</Text>
                <Text dimColor>{'     justifyContent="center"'}</Text>
                <Text dimColor>{'     alignItems="center"'}</Text>
                <Text dimColor>{'     height="100%">'}</Text>
                <Text dimColor>{'  <Box> Modal Content </Box>'}</Text>
                <Text dimColor>{'</Box>'}</Text>
              </Box>
            </Box>
          </Box>
        )}

        {/* EXAMPLE 6: Dashboard */}
        {currentExample === 'dashboard' && (
          <Box flexDirection="column">
            <Text bold color="yellow">Pattern 6: Complete Dashboard</Text>
            <Text dimColor>Combining multiple patterns</Text>
            
            {/* Live Demo */}
            <Box 
              marginTop={1} 
              flexDirection="column" 
              height={22} 
              borderStyle="double" 
              borderColor="cyan"
            >
              {/* Header */}
              <Box borderStyle="single" padding={1} flexGrow={0}>
                <Box flexDirection="row" justifyContent="space-between">
                  <Text bold color="cyan">📊 Dashboard</Text>
                  <Text>[👤 Profile] [⚙️ Settings]</Text>
                </Box>
              </Box>

              {/* Main Area */}
              <Box flexDirection="row" flexGrow={1}>
                {/* Sidebar */}
                <Box 
                  width={18} 
                  borderStyle="single" 
                  padding={1}
                  flexShrink={0}
                >
                  <Box flexDirection="column">
                    <Text bold>Menu</Text>
                    <Text color="cyan">▶ Home</Text>
                    <Text>  Analytics</Text>
                    <Text>  Reports</Text>
                    <Text>  Settings</Text>
                  </Box>
                </Box>

                {/* Content */}
                <Box flexDirection="column" flexGrow={1} padding={1}>
                  {/* Stats Row */}
                  <Box flexDirection="row">
                    <Box borderStyle="round" borderColor="green" padding={1} flexGrow={1} marginX={1}>
                      <Text color="green">✓ 150</Text>
                    </Box>
                    <Box borderStyle="round" borderColor="yellow" padding={1} flexGrow={1} marginX={1}>
                      <Text color="yellow">⏳ 23</Text>
                    </Box>
                    <Box borderStyle="round" borderColor="red" padding={1} flexGrow={1} marginX={1}>
                      <Text color="red">✗ 7</Text>
                    </Box>
                  </Box>

                  {/* Main Content */}
                  <Box borderStyle="single" marginTop={1} padding={1} flexGrow={1}>
                    <Text bold>Recent Activity</Text>
                    <Text dimColor>Activity feed goes here...</Text>
                  </Box>
                </Box>
              </Box>

              {/* Footer */}
              <Box borderStyle="single" padding={1} flexGrow={0}>
                <Text dimColor>Last updated: Just now | Status: All systems operational</Text>
              </Box>
            </Box>

            {/* Explanation */}
            <Box marginTop={1} borderStyle="single" padding={1}>
              <Text color="cyan">This combines:</Text>
              <Text>• Header/Footer pattern (vertical flexbox)</Text>
              <Text>• Sidebar pattern (horizontal flexbox)</Text>
              <Text>• Grid pattern (stats row)</Text>
              <Text>• All using flexGrow to create responsive layout</Text>
            </Box>
          </Box>
        )}
      </Box>

      {/* NAVIGATION */}
      <Box marginTop={1} borderStyle="single" padding={1}>
        <Text dimColor>
          <Text color="cyan">N</Text> Next example  
          <Text color="cyan"> P</Text> Previous  
          <Text color="yellow"> M</Text> Menu
        </Text>
      </Box>

      {/* KEY TAKEAWAY */}
      <Box marginTop={1} borderStyle="double" borderColor="green" padding={1}>
        <Text bold color="green">
          ✅ These patterns combine flexDirection, flexGrow, and alignment to build real applications!
        </Text>
      </Box>
    </Box>
  );
};

export default RealWorldExamples;
