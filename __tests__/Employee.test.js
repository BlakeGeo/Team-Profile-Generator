const Employee = require('../src/Employee.js');

function makeEmployee(
    name = "Test Name",
    id = 123,
    email = 'test@email.com'
){

    return new Employee(name, id, email);
}

describe("Test employee class", () => {
    it("Should have the correct data options", () => {

        const name = "Test Name";
        const id = 123;
        const email = 'test@email.com';

        const employee = makeEmployee(name, id, email);

        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.emial).toEqual(email);

    });

    it("Should return Employee when getRole() is called", () => {
        
        const employee = makeEmployee();
        const expected = "Employee";
        expect(employee.getRole()).toEqual(expected);
    });

    it("Should return email when getEmail() is called", () => {
        
        const employee = makeEmployee(123, 234, expected);
        const expected = "test@email.com";
        expect(employee.getEmail()).toEqual(expected);
    });

    it("Should return name when getName() is called", () => {
        
        const employee = makeEmployee(expected, 234, 567);
        const expected = "Employee";
        expect(employee.getRole()).toEqual(expected);
    });

    it("Should return an ID when getId()) is called", () => {
        
        const employee = makeEmployee(123, expected, 567);
        const expected = "123";
        expect(employee.getId()).toEqual(expected);
    });
})

