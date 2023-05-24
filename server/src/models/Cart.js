const prisma = require("../lib/prisma");

module.exports = {
  getCartItems: async (user_id) => {
    const cart = await prisma.cart.findMany({
      where: {
        user_id,
      },
      include: {
        product: true,
      },
    });
    return cart;
  },
  addItemToCart: async ({ user_id, product_id, quantity, subtotal }) => {
    const items = await prisma.cart.create({
      data: {
        user_id,
        product_id,
        quantity,
        subtotal,
        created_at: new Date(),
      },
    });

    return items;
  },
  deleteItemCart: async (id) => {
    const item = await prisma.cart.delete({
      where: {
        id
      },
    });
    return item
  },
};
