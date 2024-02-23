const prisma = require("../db");

const { findAllUser, findUserId } = require("./user.repository");

const getAllUser = async () => {
  const users = await findAllUser();
  return users;
};

const getUserId = async (userId) => {
  const user = await findUserId(userId);
  if (!user) {
    throw Error("User not Found!");
  }
  return user;
};


module.exports = {
  getAllUser,
  getUserId,
};
