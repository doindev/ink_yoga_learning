import React from 'react';
import { Box, Text } from 'ink';

const Header: React.FC = () => {
  return (
    <Box flexDirection="column" alignItems="center" marginBottom={1}>
      <Text bold color="cyan">
        ╔═══════════════════════════════════════════╗
      </Text>
      <Text bold color="cyan">
        ║     📝  TASK MANAGER CLI v1.0.0  📝      ║
      </Text>
      <Text bold color="cyan">
        ╚═══════════════════════════════════════════╝
      </Text>
      <Text dimColor italic>
        Built with Ink + Yoga + TypeScript + React
      </Text>
    </Box>
  );
};

export default Header;
