import users from "../sho.json" assert { type: "json" };

// зробити фільтр по тому чи злодій цей персонаж і вивести його ім'я

const nameUsersCrimes = users
  .filter((crime) => crime.Thief)
  .map((user) => user.name);

console.log(nameUsersCrimes);
