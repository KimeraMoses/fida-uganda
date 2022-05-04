import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addMember,
  deleteMember,
  getMember,
  getMembers,
  updateMember,
} from "../apis/members";
import { MEMBERSHIP_KEY } from "../lib/constants";

export const useMembers = () => {
  return useQuery(MEMBERSHIP_KEY, getMembers);
};

export const useMember = (id) => {
  return useQuery([MEMBERSHIP_KEY, id], () => getMember(id));
};

export const useAddMember = () => {
  const queryClient = useQueryClient();
  return useMutation(addMember, {
    onSuccess: (data) => {
      const previousMembers = queryClient.getQueryData(MEMBERSHIP_KEY);
      if (previousMembers) {
        queryClient.setQueryData(MEMBERSHIP_KEY, () => {
          return produce(previousMembers, (draft) => {
            draft.members.push(data?.member);
          });
        });
      } else {
        queryClient.setQueryData(MEMBERSHIP_KEY, () => {
          return { members: [data?.member] };
        });
      }
    },
  });
};

export const useUpdateMember = () => {
  const queryClient = useQueryClient();
  return useMutation(updateMember, {
    onSuccess: (data) => {
      const previousMembers = queryClient.getQueryData(MEMBERSHIP_KEY);
      if (previousMembers) {
        queryClient.setQueryData(MEMBERSHIP_KEY, () => {
          return produce(previousMembers, (draft) => {
            const index = draft.members.findIndex(
              (member) => member.id === data.updatedMember.id
            );
            draft.members[index] = data.updatedMember;
          });
        });
      } else {
        queryClient.setQueryData(MEMBERSHIP_KEY, () => {
          return { members: [data?.updatedMember] };
        });
      }
    },
  });
};

export const useDeleteMember = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteMember, {
    onMutate: async (id) => {
      await queryClient.cancelMutations(MEMBERSHIP_KEY);

      const previousMembers = queryClient.getQueryData(MEMBERSHIP_KEY);
      if (previousMembers) {
        queryClient.setQueryData(MEMBERSHIP_KEY, () => {
          return produce(previousMembers, (draft) => {
            draft.members.filter((member) => member.id !== id);
          });
        });
      }
    },
    onError: (_error, _id, context) => {
      queryClient.setQueryData(MEMBERSHIP_KEY, context.previousMembers);
    },
    onSettled: () => {
      queryClient.invalidateQueries(MEMBERSHIP_KEY);
    },
  });
};
