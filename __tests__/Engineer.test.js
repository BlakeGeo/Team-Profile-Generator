const Engineer = require('../src/Engineer.js');

function makeEngineer(
    name = "Test Name",
    id = 123,
    email = 'test@email.com',
    github = "github"
){

    return new Engineer(name, id, email, github);
}

describe("Test engineer class", () => {
    it("Should have the correct data options", () => {

        const name = "Test Name";
        const id = 123;
        const email = 'test@email.com';
        const github = "github";

        const engineer = makeEngineer(name, id, email, github);

        expect(engineer.name).toEqual(name);
        expect(engineer.id).toEqual(id);
        expect(engineer.email).toEqual(email);
        expect(engineer.github).toEqual(github);


    });

    it("Should return Engineer when getRole() is called", () => {
        
        const engineer = makeEngineer();
        const expected = "Engineer";
        expect(engineer.getRole()).toEqual(expected);
    });

    it("Should return email when getEmail() is called", () => {
        
        const engineer = makeEngineer(123, 234, expected, 789);
        const expected = "test@email.com";
        expect(engineer.getEmail()).toEqual(expected);
    });

    it("Should return name when getName() is called", () => {
        
        const engineer = makeEngineer(expected, 234, 567, 789);
        const expected = "Engineer";
        expect(engineer.getRole()).toEqual(expected);
    });

    it("Should return an ID when getId()) is called", () => {
        
        const engineer = makeEngineer(123, expected, 567, 789);
        const expected = "123";
        expect(engineer.getId()).toEqual(expected);
    });

    it("Should return github when getGithub() is called", () => {

        const engineer = makeEngineer(123, 234, 567, expected);
        const expected = "github";
        expect(engineer.getGithub()).toEqual(expected);

    });
})

