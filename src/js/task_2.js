import data from "../../task_2.json";

const { users, search } = data;

const violatorsUsers = users.filter((user) => user.Crimes?.includes("Крадій"));

const crimeUsers = violatorsUsers
  .map((user) => {
    const userId = user.id;

    const searchUser = search.filter((s) => s.idUser === userId);

    const searchCrimes = searchUser.map((w) => w.crime).join(", ");

    const searchRestriction = searchUser
      .map((a) => a.restrictionFreedom)
      .reduce((sum, years) => sum + years);

    return {
      name: user.name,
      crime: searchCrimes,
      restrictionFreedom: searchRestriction,
    };
  })
  .sort(
    (userOne, userTwo) =>
      userOne.restrictionFreedom - userTwo.restrictionFreedom
  );

// const violatorsUsers = users.filter((user) => {
//   return user.Crimes?.includes("Крадій");
// });

// const crimeUsers = violatorsUsers
//   .map((user) => {
//     const userId = user.id;

//     const searchUser = search.filter((s) => {
//       return s.idUser === userId;
//     });

//     const searchCrimes = searchUser
//       .map((w) => {
//         return w.crime;
//       })
//       .join(", ");

//     const searchRestriction = searchUser
//       .map((a) => {
//         return a.restrictionFreedom;
//       })
//       .reduce((sum, years) => {
//         return sum + years;
//       });

//     return {
//       name: user.name,
//       crime: searchCrimes,
//       restrictionFreedom: searchRestriction,
//     };
//   })
//   .sort(
//     (userOne, userTwo) =>
//       userOne.restrictionFreedom - userTwo.restrictionFreedom
//   );

console.table(crimeUsers);
