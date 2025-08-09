const users = require('../model/userModel');

function registerUser({ username, password, isFavored }) {
  if (users.find(u => u.username === username)) {
    throw new Error('Usuário já existe');
  }
  const user = { username, password, isFavored: !!isFavored, balance: 10000 };
  users.push(user);
  return user;
}

function loginUser({ username, password }) {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) throw new Error('Credenciais inválidas');
  return user;
}

function getUsers() {
  return users;
}

module.exports = { registerUser, loginUser, getUsers };
