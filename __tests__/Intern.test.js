const Intern = require('../src/Intern.js');

function makeIntern(
    name = "Test Name",
    id = 123,
    email = "test@email.com",
    school = "school"
){

    return new Intern(name, id, email, school);
}

describe("Test intern class", () => {
    it("Should have the correct data options", () => {

        const name = "Test Name";
        const id = 123;
        const email = 'test@email.com';
        const school = "school";

        const intern = makeIntern(name, id, email, school);

        expect(intern.name).toEqual(name);
        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);
        expect(intern.school).toEqual(school);


    });

    it("Should return Intern when getRole() is called", () => {
        
        const intern = makeIntern();
        const expected = "Intern";
        expect(intern.getRole()).toEqual(expected);
    });

    it("Should return email when getEmail() is called", () => {
        
        const intern = makeIntern(123, 234, expected, 789);
        const expected = "test@email.com";
        expect(intern.getEmail()).toEqual(expected);
    });

    it("Should return name when getName() is called", () => {
        
        const intern = makeIntern(expected, 234, 567, 789);
        const expected = "Intern";
        expect(intern.getRole()).toEqual(expected);
    });

    it("Should return an ID when getId()) is called", () => {
        
        const intern = makeIntern(123, expected, 567, 789);
        const expected = "123";
        expect(intern.getId()).toEqual(expected);
    });

    it("Should return school when getGithub() is called", () => {

        const intern = makeIntern(123, 234, 567, expected);
        const expected = "school";
        expect(intern.getSchool()).toEqual(expected);

    });
})

