const prisma = require("../lib/prisma");

module.exports = {
  getProducts: async () => {
    const products = await prisma.product.findMany();

    return products;
  },
  getProductById: async (id) => {
    const product = await prisma.product.findUniqueOrThrow({
      where: { id },
    });

    return product;
  },
};
