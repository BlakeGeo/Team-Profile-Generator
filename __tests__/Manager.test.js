const Manager = require('../src/Manager.js');

function makeManager(
    name = "Test Name",
    id = 123,
    email = 'test@email.com',
    officeNumber = "officeNumber"
){

    return new Manager(name, id, email, officeNumber);
}

describe("Test manager class", () => {
    it("Should have the correct data options", () => {

        const name = "Test Name";
        const id = 123;
        const email = 'test@email.com';
        const officeNumber = "officeNumber";

        const manager = makeManager(name, id, email, officeNumber);

        expect(manager.name).toEqual(name);
        expect(manager.id).toEqual(id);
        expect(manager.email).toEqual(email);
        expect(manager.officeNumber).toEqual(officeNumber);


    });

    it("Should return Manager when getRole() is called", () => {
        
        const manager = makeManager();
        const expected = "Manager";
        expect(manager.getRole()).toEqual(expected);
    });

    it("Should return email when getEmail() is called", () => {
        
        const manager = makeManager(123, 234, expected, 789);
        const expected = "test@email.com";
        expect(manager.getEmail()).toEqual(expected);
    });

    it("Should return name when getName() is called", () => {
        
        const manager = makeManager(expected, 234, 567, 789);
        const expected = "Manager";
        expect(manager.getRole()).toEqual(expected);
    });

    it("Should return an ID when getId()) is called", () => {
        
        const manager = makeManager(123, expected, 567, 789);
        const expected = "123";
        expect(manager.getId()).toEqual(expected);
    });

    it("Should return officeNumber when getGithub() is called", () => {

        const manager = makeManager(123, 234, 567, expected);
        const expected = "officeNumber";
        expect(manager.getGithub()).toEqual(expected);

    });
})

