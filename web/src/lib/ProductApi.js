import { api } from "./api";

const ProductApi = {
  getProducts: async () => {
    try {
      const response = await api.get("/");

      return response.data;
    } catch (err) {
      console.log(err);
    }
  },

  getProductById: async (id) => {
    try {
      const response = await api.get(`/product/${id}`);

      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default () => ProductApi;
