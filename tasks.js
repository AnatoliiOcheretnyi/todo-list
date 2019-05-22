class SimpleTask{
    constructor(title, status){
        this.type = this.__proto__.constructor.name.replace('Task','');   // об'єкти тасків
        this.time = +new Date();
        this.owner = user;
        this.title = title;
        this.status = status;
        window.localStorage.setItem(this.time,JSON.stringify(this));
        console.log(this);
        reWriteTaskList(this);
    }
}

class HomeTask extends SimpleTask{  // об'єкти тасків
    constructor(title, status, description){
        super(title, status);
		this.description = description;
		window.localStorage.setItem(this.time,JSON.stringify(this));
		reWriteTaskList(this);
    }
    
}

class ProjectTask extends HomeTask{  // об'єкти тасків
    constructor(title, status, description, deadlineDate){
        super(title, status, description);
		this.deadlineDate = deadlineDate;
		window.localStorage.setItem(this.time,JSON.stringify(this));
		reWriteTaskList(this);
    }
}

function reWriteTaskList(){                                       // робота із списком створених задач
	while (window.tasklist.firstChild) {
	    window.tasklist.removeChild(window.tasklist.firstChild);
	}
	for ( var i = 0; i < localStorage.length; i++ ) {
		var task = localStorage.getItem(localStorage.key(i));
			task = JSON.parse(task);
		
		var taskInList = document.createElement("li");
			taskInList.className = "list-group-item bg-light";
			taskInList.innerHTML= `<button type="button" class="close" onclick="deleteTask(` + task.time + `);">
									<span aria-hidden="true">&times;</span>
								</button>`;
			taskInList.innerHTML += ` <span class="badge" data-toggle="tooltip"  data-html="true" title="user">` 
								+ task.owner.name + ' ' + task.owner.surname
								+ `</span>`;
			switch (task.type){    // в таск листі відображає тип таску
				case 'Simple': taskInList.innerHTML += ` <span class='badge' title='type of task'>` + task.type + `</span>`; break;
				case 'Home': taskInList.innerHTML += ` <span class='badge' title='type of task'>` + task.type + `</span>`; break;
				case 'Project': taskInList.innerHTML += ` <span class='badge' title='type of task'>` + task.type + `</span>`; break;
			}
			taskInList.innerHTML += `<br>`; // виводить інформацію про таск
			taskInList.innerHTML += `<b>Title: </b>` + task.title + `<br>`;
			if(task.description){
				taskInList.innerHTML += `<b>description: </b>` + task.description + `<br>`;
			}
			if(task.deadlineDate){
				taskInList.innerHTML += `<b>Deadline: </b>` + task.deadlineDate;
			}

		window.tasklist.appendChild(taskInList);

	}
}

function deleteTask(key){ // видалення обраної замітки із localStorage
	var confirmation = confirm('Do you really want to do it???');
	if(confirmation){
		localStorage.removeItem(key);
		reWriteTaskList();
	}
}