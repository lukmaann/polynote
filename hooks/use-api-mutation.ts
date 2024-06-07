import { useState } from "react";
import { useMutation } from "convex/react";

export const useAPiMutation = (mutationFuction: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFuction);

  const mutate = (payload: any) => {
    setPending(true);
    return apiMutation(payload)
      .finally(() => setPending(false))
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  

  return {
    mutate,
    pending,
    
  };
};
