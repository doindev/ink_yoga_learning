import React from 'react';
import { Box, Text } from 'ink';

interface FooterProps {
  mode: 'view' | 'add';
  taskCount: number;
  completedCount: number;
}

const Footer: React.FC<FooterProps> = ({ mode, taskCount, completedCount }) => {
  return (
    <Box flexDirection="column" marginTop={1}>
      <Box borderStyle="single" borderColor="gray" padding={1} flexDirection="column">
        <Text>
          <Text color="green">Tasks: {taskCount}</Text>
          {' | '}
          <Text color="yellow">Completed: {completedCount}</Text>
          {' | '}
          <Text color="cyan">Pending: {taskCount - completedCount}</Text>
        </Text>
        
        <Box marginTop={1} flexDirection="column">
          {mode === 'view' ? (
            <>
              <Text dimColor>
                <Text bold color="white">↑↓</Text> Navigate  
                <Text bold color="white"> SPACE</Text> Toggle  
                <Text bold color="white"> A</Text> Add  
                <Text bold color="white"> D</Text> Delete  
                <Text bold color="white"> Q</Text> Quit
              </Text>
            </>
          ) : (
            <Text dimColor>
              <Text bold color="white">ENTER</Text> Save  
              <Text bold color="white"> ESC</Text> Cancel
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
