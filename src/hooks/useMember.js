import produce from 'immer';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {
  addMember,
  deleteMember,
  getMember,
  getMembers,
  updateMember,
} from '../apis/members';
import { MEMBERSHIP_KEY } from '../lib/constants';
import { selectMember } from '../store/memberReducer';

export const useSelectedMember = () => {
  return useSelector((state) => state.member.member);
};

export const useMembers = () => {
  return useQuery(MEMBERSHIP_KEY, getMembers);
};

export const useMember = (id) => {
  return useQuery([MEMBERSHIP_KEY, id], () => getMember(id));
};

export const useAddMember = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  return useMutation(addMember, {
    onSuccess: (data) => {
      dispatch(selectMember(data.member));
      const previousMembers = queryClient.getQueryData(MEMBERSHIP_KEY);
      if (previousMembers) {
        queryClient.setQueryData(MEMBERSHIP_KEY, () => {
          return produce(previousMembers, (draft) => {
            draft.Members.push(data?.member);
          });
        });
      } else {
        queryClient.setQueryData(MEMBERSHIP_KEY, () => {
          return { Members: [data?.member] };
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
            const index = draft.Members.findIndex(
              (member) => member.id === data.updatedMember.id
            );
            draft.Members[index] = data.updatedMember;
          });
        });
      } else {
        queryClient.setQueryData(MEMBERSHIP_KEY, () => {
          return { Members: [data?.updatedMember] };
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
            draft.Members.filter((member) => member.id !== id);
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
