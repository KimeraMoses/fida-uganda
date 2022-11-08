import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addAdvance,
  deleteAdvance,
  editAdvance,
  getAllAdvances,
  getAdvance, approveAdvance, rejectAdvance, getMyAdvances,
} from "../apis/advances";
import {ADVANCES_KEY} from "../lib/constants";
import Tracker from "../components/compound/Tracker";

export const useAdvances = () => {
  return useQuery(ADVANCES_KEY, getAllAdvances);
};

export const useMyAdvances = () => {
  return useQuery([ADVANCES_KEY, "MY"], getMyAdvances);
};

export const useAdvance = (id) => {
  return useQuery([ADVANCES_KEY, id], () => getAdvance(id));
};

export const useAddAdvance = () => {
  const queryClient = useQueryClient();
  const key = [ADVANCES_KEY, "MY"];
  return useMutation(addAdvance, {
    onSuccess: (data) => {
      const previousAdvances = queryClient.getQueryData(key);
      if (previousAdvances) {
        queryClient.setQueryData(key, (previousAdvances) => {
          return produce(previousAdvances, (draft) => {
            draft.advances.push(data.advance);
          });
        });
      } else {
        queryClient.setQueryData(key, () => {
          return { advances: [data.advance] };
        });
      }
    },
  });
};

export const useEditAdvance = () => {
  return useMutation(editAdvance);
};

export const useDeleteAdvance = () => {
  return useMutation(deleteAdvance);
};

export const useApproveAdvance = () =>{
  const queryClient = useQueryClient();
  return useMutation(approveAdvance,{
    onMutate: async({id,remarks}) => {
      await queryClient.cancelMutations(ADVANCES_KEY)

      const previousAdvance = queryClient.getQueryData(ADVANCES_KEY)
      if (previousAdvance){
        queryClient.setQueryData(ADVANCES_KEY,(advances) =>{
          return produce(advances,(draft) =>{
            const index = draft.advances.findIndex(
                (advances) => advances.id === id);
            draft.advances[index] = {
              ...advances, remarks

            }
          });
        });
        // console.log("this is the remark",remarks,id)
      } else {
        queryClient.setQueryData(ADVANCES_KEY,() =>{
          return { advances: [Tracker]

          }
        })
      }
    },
    onError: (_error,_setId,context)=> {
      queryClient.setQueryData(ADVANCES_KEY,context.advances)
    },

    onSettled: () =>{
      queryClient.invalidateQueries(ADVANCES_KEY)
    }
  })
}

 export const useRejectAdvance = () =>{
   const queryClient = useQueryClient();
   return useMutation(rejectAdvance,{
     onMutate: async({id,remarks}) => {
       await queryClient.cancelMutations(ADVANCES_KEY)

       const previousAdvances = queryClient.getQueryData(ADVANCES_KEY)
       if (previousAdvances){
         queryClient.setQueryData(ADVANCES_KEY,(advances) =>{
           return produce(advances,(draft) =>{
             const index = draft.advances.findIndex(
                 (advances) => advances.id === id);
             draft.advances[index] = {
               ...advances, remarks

             }
           });
         });
         // console.log("this is the remark",remarks,id)
       } else {
         queryClient.setQueryData(ADVANCES_KEY,() =>{
           return { advances: [Tracker]

           }
         })
       }
     },
     onError: (_error,_setId,context)=> {
       queryClient.setQueryData(ADVANCES_KEY,context.advances)
     },

     onSettled: () =>{
       queryClient.invalidateQueries(ADVANCES_KEY)
     }
   })
 }