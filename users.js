class User {
    constructor(firstName,lastName,age,userName,type,password){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.userName = userName
        this.type = type
        this.password = password
        this.isLoggedIn = false 
        this.lastLoggedIn = 0
        this.isActive = true
        this._id = Date.now()
    }
    signIn(){
        if (this.isActive) {
            this.isLoggedIn = true
            this.lastLoggedIn = Date.now()
        } else {
            alert('This account has been deleted')
        }
    }
    signOut(){
        this.isLoggedIn = false
    }
    getLastLoggedIn(){
        const date = new Date(this.lastLoggedIn)
        return date.toLocaleTimeString()
    }
    deactivateUser(){
        this.isActive = false
    }
    reactivateUser(){
        this.isActive = true
        alert('Welcome Back '+ this.firstName)
    }
}

//--------------------adding a teacher ---------------------------

class Teacher extends User{

    constructor(firstName, lastName, age, userName, type, password, subject, salary){
        super(firstName,lastName,age,userName,type,password)
        this.subject = subject
        this.salary = salary
        this.workHours = 0 
    }
    giveMark(){

    }
}

//-----------------addind a student--------------------------------

class Student extends User {
    constructor(firstName, lastName, age, userName, type, password, classNum ,grad){
        super(firstName, lastName, age, userName, type, password)
        this.classNum = classNum
        this.grad = grad
    }
}


//-------------------making school--------------------------------

class School{
    constructor(name){
        this.name = name
        this.grades = {}
        this.teachers = []
        this.students =[]
    }
    registerStudent(irstName, lastName, age, userName, type, password, classNum ,grad){
    const student = new Student(irstName, lastName, age, userName, type, password, classNum ,grad) 
    this.students.push(student)

    }
    hireTecher(firstName, lastName, age, userName, type, password, subject, salary){
        const teacher = new Teacher(firstName, lastName, age, userName, type, password, subject, salary)
        this.teachers.push(teacher)
    }
}

const school = new School('america House')

school.hireTecher('rami', 'nasr', 31, '@teach1', 'teacher', 'pas443', 'Arabic', '2000$')
school.registerStudent('ashraf', 'Safadi', 19, '@user1', 'student', 'password', 5, '10th')
school.registerStudent('yazeed', 'Salameh', 19, '@user1', 'student', 'password', 5, '10th')
school.registerStudent('ibrahim', 'skameh', 19, '@user1', 'student', 'password', 5, '10th')
school.registerStudent('ahmad', 'abu osba', 19, '@user1', 'student', 'password', 5, '10th')
school.registerStudent('bahaa', 'malki', 19, '@user1', 'student', 'password', 5, '10th')
school.registerStudent('adam', 'tsh ah', 19, '@user1', 'student', 'password', 5, '10th')




