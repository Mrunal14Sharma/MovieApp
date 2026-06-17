import users from "../data/users";

export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        (u) => u.email === email && u.password === password,
      );

      if (user) {
        resolve(user);
      } else {
        reject("Invalid email or password");
      }
    }, 500);
  });
};
