/**
 * Main Application Component - Ink + Yoga Learning Platform
 * 
 * This app teaches you Ink and Yoga through interactive examples.
 * 
 * KEY CONCEPTS:
 * 
 * 1. INK: A React renderer for building CLI applications
 *    - Uses familiar React patterns (components, hooks, props)
 *    - Renders to terminal instead of DOM
 * 
 * 2. YOGA: A flexbox layout engine
 *    - Powers Ink's layout system
 *    - Calculates positions and sizes using flexbox rules
 *    - Same as CSS flexbox but for terminal interfaces
 */

import React, { useState } from 'react';
import { Box, Text, useApp, useInput } from 'ink';
import MenuScreen from './components/MenuScreen.js';
import LayoutBasicsLesson from './components/lessons/LayoutBasicsLesson.js';
import FlexDirectionLesson from './components/lessons/FlexDirectionLesson.js';
import AlignmentLesson from './components/lessons/AlignmentLesson.js';
import SpacingLesson from './components/lessons/SpacingLesson.js';
import FlexGrowLesson from './components/lessons/FlexGrowLesson.js';
import RealWorldExamples from './components/lessons/RealWorldExamples.js';
import InteractivePlayground from './components/lessons/InteractivePlayground.js';

/**
 * Available lesson screens
 * Each lesson teaches a specific Ink/Yoga concept
 */
type Screen = 
  | 'menu'
  | 'layout-basics'
  | 'flex-direction'
  | 'alignment'
  | 'spacing'
  | 'flex-grow'
  | 'real-world'
  | 'playground';

const App: React.FC = () => {
  /**
   * useApp() - Ink hook providing app lifecycle methods
   * Gives us access to exit() for quitting the application
   */
  const { exit } = useApp();
  
  /**
   * State to track which lesson/screen is currently displayed
   */
  const [currentScreen, setCurrentScreen] = useState<Screen>('menu');

  /**
   * useInput() - Ink hook for handling keyboard input
   * 
   * This is how Ink captures user interaction in the terminal.
   * It receives:
   * - input: The character typed (e.g., 'q', 'a', '1')
   * - key: Special keys (arrows, enter, escape, etc.)
   * 
   * Think of this like addEventListener('keypress') in the browser
   */
  useInput((input, key) => {
    // Global shortcuts that work on any screen
    
    // Press 'q' to quit (except when typing in inputs)
    if (input === 'q') {
      exit();
    }

    // Press 'm' to return to main menu
    if (input === 'm' && currentScreen !== 'menu') {
      setCurrentScreen('menu');
    }

    // Press ESC to go back to menu
    if (key.escape && currentScreen !== 'menu') {
      setCurrentScreen('menu');
    }
  });

  /**
   * Navigation function to switch between lessons
   */
  const navigateToLesson = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  /**
   * Render different components based on current screen
   * This is a common pattern in CLI apps - like routing in web apps
   */
  return (
    /**
     * ROOT BOX COMPONENT
     * 
     * Box is the fundamental building block in Ink.
     * It's like a <div> in HTML - a container for layout.
     * 
     * YOGA LAYOUT PROPERTIES USED HERE:
     * - flexDirection="column": Stack children vertically (default)
     * - padding={1}: Add 1 space around all sides (like CSS padding)
     * 
     * Every Box component is laid out by Yoga using flexbox rules!
     */
    <Box flexDirection="column" padding={1}>
      {/**
       * HEADER SECTION
       * Shows which screen we're on and provides context
       */}
      <Box 
        flexDirection="column" 
        borderStyle="double" 
        borderColor="cyan"
        padding={1}
        marginBottom={1}
      >
        <Text bold color="cyan">
          🎓 INK + YOGA LEARNING PLATFORM 🎓
        </Text>
        <Text dimColor>
          Interactive lessons to master terminal UI development
        </Text>
      </Box>

      {/**
       * MAIN CONTENT AREA
       * 
       * This Box grows to fill available space (flexGrow={1})
       * and contains the current lesson/screen
       */}
      <Box flexGrow={1}>
        {/* Conditional rendering based on current screen */}
        {currentScreen === 'menu' && (
          <MenuScreen onNavigate={navigateToLesson} />
        )}
        
        {currentScreen === 'layout-basics' && (
          <LayoutBasicsLesson onBack={() => setCurrentScreen('menu')} />
        )}
        
        {currentScreen === 'flex-direction' && (
          <FlexDirectionLesson onBack={() => setCurrentScreen('menu')} />
        )}
        
        {currentScreen === 'alignment' && (
          <AlignmentLesson onBack={() => setCurrentScreen('menu')} />
        )}
        
        {currentScreen === 'spacing' && (
          <SpacingLesson onBack={() => setCurrentScreen('menu')} />
        )}
        
        {currentScreen === 'flex-grow' && (
          <FlexGrowLesson onBack={() => setCurrentScreen('menu')} />
        )}
        
        {currentScreen === 'real-world' && (
          <RealWorldExamples onBack={() => setCurrentScreen('menu')} />
        )}
        
        {currentScreen === 'playground' && (
          <InteractivePlayground onBack={() => setCurrentScreen('menu')} />
        )}
      </Box>

      {/**
       * FOOTER - Global Navigation
       * 
       * borderStyle: Ink supports various border styles
       * - 'single', 'double', 'round', 'bold', 'classic'
       */}
      <Box 
        borderStyle="single" 
        borderColor="gray"
        padding={1}
        marginTop={1}
      >
        <Text dimColor>
          <Text color="yellow">M</Text> Menu  
          <Text color="yellow"> Q</Text> Quit  
          <Text color="yellow"> ESC</Text> Back
        </Text>
      </Box>
    </Box>
  );
};

export default App;
