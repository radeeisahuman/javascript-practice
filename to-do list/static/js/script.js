
let object = null;
let taskqueue = null;

fetch('static/js/tasks.json')
    .then(response=>{
        if(response.ok){
            return response.json();
        }
    })
    .then(data=>{
        object = data;
        storeTask();
    })
    .catch(error=>{
        console.log('Error fetching file');
    })

function TaskBuilder(tasks){
    let task_queue = new TaskQueue(null);
    
    tasks.forEach((task)=>{
        task_queue.enqueue(task);
    });

    task_queue.dequeue();

    return task_queue;
}

function storeTask(){
    taskqueue = TaskBuilder(object);
    taskqueue.print();
}

document.getElementById('addTaskButton').addEventListener('click', ()=>{
    taskqueue.enqueue({
        'taskName': document.getElementById('taskName').value,
        'taskDuration': document.getElementById('taskDuration').value,
        'taskEffort': document.getElementById('taskEffort').value,
    });
    taskqueue.print();
});