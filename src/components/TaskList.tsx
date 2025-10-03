import React from 'react';
import { Box, Text } from 'ink';
import { Task } from '../types/Task.js';

interface TaskListProps {
  tasks: Task[];
  selectedIndex: number;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, selectedIndex }) => {
  if (tasks.length === 0) {
    return (
      <Box flexDirection="column" alignItems="center" justifyContent="center" padding={2}>
        <Text color="yellow">No tasks yet!</Text>
        <Text dimColor>Press 'a' to add your first task</Text>
      </Box>
    );
  }

  return (
    <Box flexDirection="column">
      <Box marginBottom={1}>
        <Text bold color="cyan">Your Tasks</Text>
      </Box>
      
      {tasks.map((task, index) => {
        const isSelected = index === selectedIndex;
        const checkbox = task.completed ? '✓' : ' ';
        const textDecoration = task.completed ? 'line-through' : 'none';
        
        return (
          <Box key={task.id} marginY={0}>
            <Text>
              {isSelected ? '▶ ' : '  '}
            </Text>
            <Text 
              color={task.completed ? 'gray' : isSelected ? 'cyan' : 'white'}
              bold={isSelected}
            >
              [{checkbox}] 
            </Text>
            <Text 
              color={task.completed ? 'gray' : isSelected ? 'white' : 'white'}
              dimColor={task.completed}
              bold={isSelected}
            >
              {' '}{task.title}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default TaskList;
