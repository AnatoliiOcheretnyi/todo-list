var user;
reWriteTaskList();

createTaskInformationForm.addEventListener('submit',function(){  // створює праву панель для запису інформації про таск
	if (user != undefined){
		window.taskInformation.className = window.taskInformation.className.replace('d-none','');
		window.thisUser.innerHTML = ', '+ user.name + ' ' + user.surname + '!';
		switch (user.role){
		case 'User':
			window['homeTask'].disabled = true;
			window['homeTask'].className += ' disabled';
			window['projectTask'].disabled = true;
			window['projectTask'].className += ' disabled';
			break;
		case 'Student':
			window['homeTask'].disabled = false;
			window['homeTask'].className = window['homeTask'].className.replace(' disabled','');
			window['projectTask'].disabled = true;
			window['projectTask'].className += ' disabled';
			break;
		case 'Developer':
			window['homeTask'].disabled = false;
			window['homeTask'].className = window['homeTask'].className.replace(' disabled','');
			window['projectTask'].disabled = false;
			window['projectTask'].className = window['projectTask'].className.replace(' disabled','');
			break;
		}
	}
});

createTaskInformationForm.role.addEventListener('change',function(){  //оприділяє роль юзера
	switch (createTaskInformationForm.role.value){
		case 'user': 
			createTaskInformationForm.specialization.required = false; 
			createTaskInformationForm.jobtitle.required = false;
			break;
		case 'student': 
			createTaskInformationForm.specialization.required = true; 
			createTaskInformationForm.jobtitle.required = false;
			break;
		case 'developer': 
			createTaskInformationForm.specialization.required = true; 
			createTaskInformationForm.jobtitle.required = true;
			break;
	}
});

function createUser(){ // створення юзера
	switch (createTaskInformationForm.role.value){
		case 'user': user = new User(createTaskInformationForm.name.value,createTaskInformationForm.surname.value); break;
		case 'student': user = new Student(createTaskInformationForm.name.value,createTaskInformationForm.surname.value,createTaskInformationForm.specialization.value); break;
		case 'developer': user = new Developer(createTaskInformationForm.name.value,createTaskInformationForm.surname.value,createTaskInformationForm.specialization.value,createTaskInformationForm.jobtitle.value); break;
	}
	console.log(user);
}

function createTask(form){    // ствоення таску
	switch (form.id){
		case ('simpletaskform'):
			user.createSimpleTask(form.title.value,form.status.value);
			break;
		case ('hometaskform'): 
			user.createHomeTask(form.title.value,form.status.value,form.description.value);
			break;
		case ('projecttaskform'): 
			user.createProjectTask(form.title.value,form.status.value,form.description.value,form.deadlinedate.value);
			break;
	}
}