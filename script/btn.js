const completedBtns = document.getElementsByClassName('Completed-btn');
const taskNum = document.getElementById('task-num');
const taskNum1 = document.getElementById('task_num1');

for (let i = 0; i < completedBtns.length; i++) {
    completedBtns[i].addEventListener('click', function() {
        alert('Board Updated Successfully');

        let taskAssignedCount = parseInt(taskNum.textContent);
        let topTaskCount = parseInt(taskNum1.textContent);

        if (taskAssignedCount > 0) {
            taskAssignedCount -= 1;
            taskNum.textContent = taskAssignedCount;
        }

        topTaskCount += 1;
        taskNum1.textContent = topTaskCount;

        completedBtns[i].disabled = true;
        completedBtns[i].innerHTML = 'Completed';
    });
}
