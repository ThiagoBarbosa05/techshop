const prisma = require("../lib/prisma");

module.exports = {
  Register: async (name, email, password) => {
    const user = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    return user;
  },
  userAlreadyExists: async (email) => {
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    return user;
  },
  findUserById: async (id) => {
    const user = await prisma.users.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return user;
  },
  updateUser: async (id, newData) => {
    const user = await prisma.users.update({
      where: {
        id,
      },
      data: newData,
    });

    return user;
  },
  deleteUser: async (id) => {
    await prisma.users.delete({
      where: {
        id
      }
    })
  }
};
