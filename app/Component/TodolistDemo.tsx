//Q4. Create a class-based component Todolist that manages a list of tasks. Implement an input field for
// adding new tasks, a button to add a task to the list, and a list displaying all tasks. Use state to manage the list
// of tasks and update it when a new task is added

"use client";

import { Component, ChangeEvent } from "react";

interface TodoListState {
  tasks: string[];
  newTask: string;
}

class TodolistDemo extends Component<{}, TodoListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: [],
      newTask: "",
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTask: event.target.value });
  };

  addTask = () => {
    if (this.state.newTask.trim() !== "") {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.newTask],
        newTask: "",
      }));
    }
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl shadow-md w-80 mx-auto">
        <h1 className="text-xl font-bold mb-4 text-gray-800">
          My To-Do List
        </h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={this.handleInputChange}
            placeholder="Add a new task"
            className="border rounded-lg px-3 py-2 w-48"
          />
          <button
            onClick={this.addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Add
          </button>
        </div>
        <ul className="w-full list-disc list-inside text-gray-700">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodolistDemo;
