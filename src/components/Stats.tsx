import React from 'react';
import { Box, Text } from 'ink';

interface StatCardProps {
  title: string;
  value: number;
  color: string;
  icon: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, color, icon }) => {
  return (
    <Box 
      borderStyle="round" 
      borderColor={color}
      paddingX={2}
      paddingY={1}
      flexDirection="column"
      minWidth={20}
    >
      <Box justifyContent="center" marginBottom={1}>
        <Text color={color}>{icon}</Text>
      </Box>
      
      <Box justifyContent="center">
        <Text bold color={color} fontSize={24}>
          {value}
        </Text>
      </Box>
      
      <Box justifyContent="center">
        <Text dimColor>{title}</Text>
      </Box>
    </Box>
  );
};

interface StatsProps {
  total: number;
  completed: number;
  pending: number;
}

const Stats: React.FC<StatsProps> = ({ total, completed, pending }) => {
  return (
    <Box flexDirection="row" justifyContent="space-around" marginY={1}>
      <StatCard 
        title="Total Tasks"
        value={total}
        color="cyan"
        icon="📊"
      />
      
      <Box marginX={1} />
      
      <StatCard 
        title="Completed"
        value={completed}
        color="green"
        icon="✓"
      />
      
      <Box marginX={1} />
      
      <StatCard 
        title="Pending"
        value={pending}
        color="yellow"
        icon="⏳"
      />
    </Box>
  );
};

export default Stats;
