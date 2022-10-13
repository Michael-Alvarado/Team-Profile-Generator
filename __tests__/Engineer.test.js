const Engineer = require("../Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("EngName", "234", "noone@gmail.com", "SumDumGuy"
  );

  expect(engineer.getName()).toBe("EngName");
  expect(engineer.getId()).toBe("234");
  expect(engineer.getEmail()).toBe("noone@gmail.com");
  expect(engineer.getGithub()).toBe("https://github.com/SumDumGuy");
  expect(engineer.getRole()).toBe("Engineer");
});