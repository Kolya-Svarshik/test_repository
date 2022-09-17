import data from "../../task_2.json";

const { users, search } = data;
const { id, name } = users;
const { idUser, crime, restrictionFreedom } = search;
// const violatorsUsers = [];

// search.map(({ idUser, crime, restrictionFreedom }) => {
//   violatorsUsers.push({
//     name: users[idUser].name,
//     crime,
//     restrictionFreedom,
//   });
// });

const violatorsUsers = users
  .filter(({ Crimes }) => Crimes)
  .map(({ id, idUser, crime, restrictionFreedom }) => {
    id === search.idUser;

    const test = {
      name,
      crime,
      restrictionFreedom,
    };
    return test;
  });

console.table(violatorsUsers);
