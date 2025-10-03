import React, { useState } from 'react';
import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';

interface TaskInputProps {
  onSubmit: (title: string) => void;
  onCancel: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onSubmit, onCancel }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit(value.trim());
      setValue('');
    }
  };

  return (
    <Box flexDirection="column">
      <Box marginBottom={1}>
        <Text bold color="green">Add New Task</Text>
      </Box>
      
      <Box>
        <Text color="cyan">Task: </Text>
        <TextInput 
          value={value} 
          onChange={setValue}
          onSubmit={handleSubmit}
          placeholder="Enter task description..."
        />
      </Box>
      
      <Box marginTop={1}>
        <Text dimColor italic>Press ENTER to save, ESC to cancel</Text>
      </Box>
    </Box>
  );
};

export default TaskInput;
