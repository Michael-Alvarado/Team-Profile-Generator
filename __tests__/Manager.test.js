const Manager = require("../Manager");

test("creates an manager object", () => {
  const manager = new Manager("ManName", "007", "bossman@yahoo.com", "0102");

  expect(manager.getName()).toBe("ManName");
  expect(manager.getId()).toBe("007");
  expect(manager.getEmail()).toBe("bossman@yahoo.com");
  expect(manager.officeNumber).toBe("0102");
  expect(manager.getRole()).toBe("Manager");
});