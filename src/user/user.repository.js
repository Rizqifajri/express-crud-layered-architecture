const prisma = require("../db")

const findAllUser = async () => {
  const users = await prisma.user.findMany({
    include: {
      article: true,
    },
  });
  return users;
};

const findUserId = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      article: true,
    },
  });
  return user;
};

module.exports = { findAllUser, findUserId };
