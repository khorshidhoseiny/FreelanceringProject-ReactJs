import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoyService";

export function useCategoriesv2() {
  const { isLoading, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });
  const { categories: rawCategory = [] } = data || {};

  const categories = rawCategory.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  const transformedCategories = rawCategory.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { transformedCategories, categories, isLoading };
}
