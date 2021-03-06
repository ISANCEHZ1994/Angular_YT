import { Task } from './Task';

// We added a type `: Task` and since it is an array we add the brackets[]  
export const TASKS: Task[] = [
    {
        id: 1,
        text: 'Get Dog Food',
        day: "March 15th at 2:30pm",
        reminder: true
    },
    {
        id: 2,
        text: 'Go to the Movies',
        day: "March 16th at 9:00pm",
        reminder: true
    },
    {
        id: 3,
        text: 'Date Night',
        day: "March 17th at 9:30pm",
        reminder: false
    }
]