import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addMembershipActivity,
  getMemberActivities
} from "../apis/membershipActivities";
import { MEMBERSHIP_ACTIVITIES_KEY  } from "../lib/constants";

export const useActivities = () => {
  return useQuery(MEMBERSHIP_ACTIVITIES_KEY , getMemberActivities);
};


export const useAddActivity = () => {
  const queryClient = useQueryClient();
  return useMutation(addMembershipActivity, {
    onSuccess: (data) => {
      const previousActivities = queryClient.getQueryData(MEMBERSHIP_ACTIVITIES_KEY );
      if (previousActivities) {
        queryClient.setQueryData(MEMBERSHIP_ACTIVITIES_KEY , () => {
          return produce(previousActivities, (draft) => {
            draft.MembershipActivities.push(data?.embershipActivity);
          });
        });
      } else {
        queryClient.setQueryData(MEMBERSHIP_ACTIVITIES_KEY , () => {
          return { members: [data?.embershipActivity] };
        });
      }
    },
  });
};
