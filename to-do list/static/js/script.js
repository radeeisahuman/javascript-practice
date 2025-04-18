import { TaskQueue } from './task-queue.js';

let object = null;


fetch('static/js/tasks.json')
    .then(response=>{
        if(response.ok){
            return response.json();
        }
    })
    .then(data=>{
        object = data;
        showTask();
    })
    .catch(error=>{
        console.log('Error fetching file');
    })

function TaskBuilder(tasks){
    let task_queue = new TaskQueue(null);
    
    tasks.forEach((task)=>{
        task_queue.enqueue(task);
    });

    return task_queue;
}

function showTask(){
    let taskqueue = TaskBuilder(object);
    taskqueue.print();
}