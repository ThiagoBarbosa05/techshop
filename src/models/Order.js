const prisma = require("../lib/prisma");

module.exports = {
  createOrder: async ({ user_id, total, created_at }, items) => {
    const order = await prisma.orders.create({
      data: {
        user_id,
        total,
        created_at,
        itemsonorder: {
          create: items.map((item) => ({
            product_id: item.product_id,
            quantity: item.quantity,
            subtotal: item.price * item.quantity,
          })),
        },
      },
      include: {
        itemsonorder: true,
      },
    });

    return order;
  },
  getOrders: async (user_id) => {
    const orders = await prisma.orders.findMany({
      where: {
        user_id,
      },
      include: {
        itemsonorder: true,
      },
    });
    return orders;
  },

  getProductsFormOrder: async () => {
    const products = await prisma.itemsonorder.findMany({
      include: {
        product: true,
      },
    });
    return products
  },
};
