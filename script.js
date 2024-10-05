const form = document.getElementById('taskInfo')
const taskList = document.getElementById('taskList')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const taskItem = document.createElement('li')

    let taskContent = ''
    for (const [k, v] of formData) {
        taskContent += `${v}`
    }

    if (taskContent.length !== 0) {
        taskItem.innerHTML = taskContent
        taskList.append(taskItem)
        form.reset()
    } else {
        alert('cannot add an empty task')
    }

    taskItem.addEventListener('click', () => {
        if (taskItem.style.textDecoration === 'line-through') {
            taskItem.style.textDecoration = 'none'
        } else taskItem.style.textDecoration = 'line-through'
    })

    taskItem.addEventListener('dblclick', () => {
        taskList.removeChild(taskItem)
    })
})
