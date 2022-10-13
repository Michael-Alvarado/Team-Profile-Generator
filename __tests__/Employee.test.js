const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("EmpName", "123", "someone@gmail.com");

  expect(employee.getName()).toBe("EmpName");
  expect(employee.getId()).toBe("123");
  expect(employee.getEmail()).toBe("someone@gmail.com");
  expect(employee.getRole()).toBe("Employee");
});