/**
 * MenuScreen Component - Main Navigation
 * 
 * Demonstrates:
 * - List rendering with .map()
 * - Interactive selection with keyboard
 * - Visual feedback for selected items
 * - Yoga layout for menu items
 */

import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

interface MenuItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const menuItems: MenuItem[] = [
  {
    id: 'layout-basics',
    title: 'Layout Basics',
    description: 'Learn about Box component and Yoga layout fundamentals',
    icon: '📦',
    difficulty: 'Beginner'
  },
  {
    id: 'flex-direction',
    title: 'Flex Direction',
    description: 'Master row vs column layouts and how to arrange components',
    icon: '↔️',
    difficulty: 'Beginner'
  },
  {
    id: 'alignment',
    title: 'Alignment & Justification',
    description: 'Control positioning with justifyContent and alignItems',
    icon: '⚖️',
    difficulty: 'Intermediate'
  },
  {
    id: 'spacing',
    title: 'Spacing & Sizing',
    description: 'Work with padding, margin, width, and height',
    icon: '📏',
    difficulty: 'Beginner'
  },
  {
    id: 'flex-grow',
    title: 'Flexible Sizing',
    description: 'Use flexGrow, flexShrink, and flexBasis for dynamic layouts',
    icon: '🔄',
    difficulty: 'Intermediate'
  },
  {
    id: 'real-world',
    title: 'Real World Examples',
    description: 'See complete patterns: headers, sidebars, grids, and more',
    icon: '🌍',
    difficulty: 'Advanced'
  },
  {
    id: 'playground',
    title: 'Interactive Playground',
    description: 'Experiment with layout properties in real-time',
    icon: '🎮',
    difficulty: 'All Levels'
  }
];

interface MenuScreenProps {
  onNavigate: (screen: string) => void;
}

const MenuScreen: React.FC<MenuScreenProps> = ({ onNavigate }) => {
  /**
   * Track which menu item is currently selected
   * This demonstrates basic state management in Ink
   */
  const [selectedIndex, setSelectedIndex] = useState(0);

  /**
   * Handle keyboard input for menu navigation
   * 
   * IMPORTANT: useInput in child components captures input BEFORE parent
   * This allows for component-specific controls
   */
  useInput((input, key) => {
    // Arrow Up - Move selection up
    if (key.upArrow) {
      setSelectedIndex(prev => Math.max(0, prev - 1));
    }

    // Arrow Down - Move selection down
    if (key.downArrow) {
      setSelectedIndex(prev => Math.min(menuItems.length - 1, prev + 1));
    }

    // Enter or Right Arrow - Select current item
    if (key.return || key.rightArrow) {
      onNavigate(menuItems[selectedIndex].id);
    }

    // Number keys 1-7 - Direct navigation
    const num = parseInt(input);
    if (num >= 1 && num <= menuItems.length) {
      onNavigate(menuItems[num - 1].id);
    }
  });

  /**
   * Render the menu with visual indicators
   */
  return (
    <Box flexDirection="column" padding={1}>
      {/* TITLE SECTION */}
      <Box marginBottom={1}>
        <Text bold color="green">
          📚 Choose a Lesson to Begin Your Journey
        </Text>
      </Box>

      {/* MENU ITEMS LIST */}
      {/**
       * YOGA LAYOUT IN ACTION:
       * Each menu item is a Box with flexDirection="column"
       * Items are stacked vertically because parent has flexDirection="column"
       */}
      {menuItems.map((item, index) => {
        const isSelected = index === selectedIndex;
        
        return (
          <Box 
            key={item.id}
            /**
             * LAYOUT PROPERTIES EXPLAINED:
             * 
             * flexDirection="column": Stack icon, title, description vertically
             * borderStyle: Visual indicator when selected
             * borderColor: Highlight color for selected item
             * padding: Space inside the border (1 = 1 character space)
             * marginBottom: Space between menu items
             */
            flexDirection="column"
            borderStyle={isSelected ? 'round' : undefined}
            borderColor={isSelected ? 'cyan' : undefined}
            padding={1}
            marginBottom={1}
          >
            {/* ITEM HEADER - Number, Icon, Title */}
            <Box>
              {/**
               * HORIZONTAL LAYOUT:
               * flexDirection defaults to "row" when not specified
               * Children are arranged left-to-right
               */}
              <Text color={isSelected ? 'cyan' : 'white'} bold>
                {isSelected ? '▶ ' : '  '}
                {index + 1}. {item.icon} {item.title}
              </Text>
              
              {/* Spacer - pushes difficulty badge to the right */}
              <Box flexGrow={1} />
              
              {/* Difficulty Badge */}
              <Text 
                color={
                  item.difficulty === 'Beginner' ? 'green' :
                  item.difficulty === 'Intermediate' ? 'yellow' :
                  'red'
                }
                dimColor={!isSelected}
              >
                [{item.difficulty}]
              </Text>
            </Box>

            {/* ITEM DESCRIPTION */}
            <Box marginLeft={4}>
              <Text dimColor={!isSelected}>
                {item.description}
              </Text>
            </Box>
          </Box>
        );
      })}

      {/* INSTRUCTIONS */}
      <Box 
        marginTop={2} 
        borderStyle="single" 
        borderColor="yellow"
        padding={1}
      >
        <Text>
          <Text color="cyan">↑↓</Text> Navigate  
          <Text color="cyan"> ENTER</Text> Select  
          <Text color="cyan"> 1-7</Text> Quick select
        </Text>
      </Box>

      {/* EDUCATIONAL NOTE */}
      <Box marginTop={1}>
        <Text color="magenta" italic>
          💡 Tip: This entire menu is built with Ink Box components using Yoga's flexbox layout!
        </Text>
      </Box>
    </Box>
  );
};

export default MenuScreen;
