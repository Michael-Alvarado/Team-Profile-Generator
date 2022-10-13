const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("IntName", "345", "intern@gmail.com", "ICU");

  expect(intern.getName()).toBe("IntName");
  expect(intern.getId()).toBe("345");
  expect(intern.getEmail()).toBe("intern@gmail.com");
  expect(intern.getSchool()).toBe("ICU");
  expect(intern.getRole()).toBe("Intern");
});