import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  addMember,
  deleteMember,
  getMember,
  getMembers,
  updateMember,
} from "../apis/members";
import { ASSETS_KEY } from "../lib/constants";
import { selectMemberId } from "../store/memberReducer";

export const useSelectMemberId = (id) => {
  const dispatch = useDispatch();
  dispatch(selectMemberId(id));
};

export const useMemberId = () => {
  return useSelector((state) => state.member.selectedId);
};

export const useMembers = () => {
  return useQuery(ASSETS_KEY, getMembers);
};

export const useMember = (id) => {
  return useQuery([ASSETS_KEY, id], () => getMember(id));
};

export const useAddMember = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  return useMutation(addMember, {
    onSuccess: (data) => {
      dispatch(selectMemberId(data.member.id));
      const previousMembers = queryClient.getQueryData(ASSETS_KEY);
      if (previousMembers) {
        queryClient.setQueryData(ASSETS_KEY, () => {
          return produce(previousMembers, (draft) => {
            draft.members.push(data?.member);
          });
        });
      } else {
        queryClient.setQueryData(ASSETS_KEY, () => {
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
      const previousMembers = queryClient.getQueryData(ASSETS_KEY);
      if (previousMembers) {
        queryClient.setQueryData(ASSETS_KEY, () => {
          return produce(previousMembers, (draft) => {
            const index = draft.members.findIndex(
              (member) => member.id === data.updatedMember.id
            );
            draft.members[index] = data.updatedMember;
          });
        });
      } else {
        queryClient.setQueryData(ASSETS_KEY, () => {
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
      await queryClient.cancelMutations(ASSETS_KEY);

      const previousMembers = queryClient.getQueryData(ASSETS_KEY);
      if (previousMembers) {
        queryClient.setQueryData(ASSETS_KEY, () => {
          return produce(previousMembers, (draft) => {
            draft.members.filter((member) => member.id !== id);
          });
        });
      }
    },
    onError: (_error, _id, context) => {
      queryClient.setQueryData(ASSETS_KEY, context.previousMembers);
    },
    onSettled: () => {
      queryClient.invalidateQueries(ASSETS_KEY);
    },
  });
};
