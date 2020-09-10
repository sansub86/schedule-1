import React from 'react';
import { MyButton } from "@ui";
import { handleAddingTask } from "../model/adding-task";

export const AddingTaskBtn = () => {
  return (
    <MyButton 
      text="Добавить задачу"
      type="primary"
      onClick={handleAddingTask}
    />
  )
}