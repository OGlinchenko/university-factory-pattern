class Professor {
    constructor(name) {
        this.name = name;
        this.role = 'Professor';
    }

    getInfo() {
        return `${this.name} is a ${this.role}.`;
    }
}

class Administrator {
    constructor(name) {
        this.name = name;
        this.role = 'Administrator';
    }

    getInfo() {
        return `${this.name} is a ${this.role}.`;
    }
}

// UniversityStaffFactory is the factory class to create university staff members
class UniversityStaffFactory {
    createStaffMember(type, name) {
        switch (type) {
            case 'professor':
                return new Professor(name);
            case 'administrator':
                return new Administrator(name);
            default:
                return null;
        }
    }
}

// Usage
const staffFactory = new UniversityStaffFactory();
const professor = staffFactory.createStaffMember('professor', 'Dr. Smith');
const administrator = staffFactory.createStaffMember('administrator', 'Mr. Doe');

console.log(professor.getInfo());  // Output: Dr. Smith is a Professor.
console.log(administrator.getInfo());  // Output: Mr. Doe is a Administrator.
