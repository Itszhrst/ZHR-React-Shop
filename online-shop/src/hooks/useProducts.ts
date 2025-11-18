import { useQuery } from "@tanstack/react-query";
import axiosClient from "../api/axiosClient";

export default function useProducts() {
  const fetchProducts = async () => {
    const { data } = await axiosClient.get("/products");
    return data;
  };

  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}
