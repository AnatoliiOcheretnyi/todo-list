class User {
    constructor(name, surname){
        this.role = this.__proto__.constructor.name;
        this.name = name;
        this.surname = surname;
    }
    createSimpleTask = function (title,status){
		new SimpleTask(title,status);
	}
}

class Student extends User {
    constructor(name, surname, specialization){
        super(name, surname);
        this.specialization = specialization;
    }
    createHomeTask = function (title,status,description){
		new HomeTask(title,status,description);
	}
}

class Developer extends Student{
    constructor(name, surname, specialization, jobTitle){
        super(name, surname, specialization);
        this.jobTitle = jobTitle;
    }
    createProjectTask = function (title,status,description,jobTitle){
		new ProjectTask(title,status,description,jobTitle);
	}
}

