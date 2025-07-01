import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { createProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useCreateProjectv2() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: ceateProject } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey: ["owner-project"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}
