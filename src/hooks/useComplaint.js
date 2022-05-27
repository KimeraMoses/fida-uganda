import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addComplaint,
  deleteComplaint,
  editComplaint,
  getComplaint,
  getComplaints,
  getComplaintsStats,
} from "../apis/complaints";
import { COMPLAINTS_KEY, COMPLAINTS_STATS } from "../lib/constants";

export const useComplaint = (complaintId) => {
  return useQuery([COMPLAINTS_KEY, complaintId], () =>
    getComplaint(complaintId)
  );
};

export const useComplaints = () => {
  return useQuery(COMPLAINTS_KEY, getComplaints);
};

export const useComplaintsStats = () => {
  return useQuery(COMPLAINTS_STATS, getComplaintsStats);
};

export const useAddComplaint = () => {
  const queryClient = useQueryClient();
  return useMutation(addComplaint, {
    onSuccess: (data) => {
      const previousComplaints = queryClient.getQueryData(COMPLAINTS_KEY);
      if (previousComplaints) {
        queryClient.setQueryData(COMPLAINTS_KEY, () => {
          return produce(previousComplaints, (draft) => {
            draft.complaints.push(data?.complaint);
          });
        });
      } else {
        return { complaints: [data?.complaint] };
      }
    },
  });
};


export const useUpdateComplaint = () => {
  const queryClient = useQueryClient();
  return useMutation(editComplaint, {
    onSuccess: (data) => {
      const previousComplaints = queryClient.getQueryData(COMPLAINTS_KEY);
      if (previousComplaints) {
        queryClient.setQueryData(COMPLAINTS_KEY, () => {
          return produce(previousComplaints, (draft) => {
            const index = draft.complaints.findIndex(
              (complaint) => complaint.id === data?.complaint.id
            );
            draft.complaints[index] = data?.complaint;
          });
        });
      } else {
        return { complaints: [data?.complaint] };
      }
    },
  });
};

export const useDeleteComplaint = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteComplaint, {
    onSuccess: (data) => {
      const previousComplaints = queryClient.getQueryData(COMPLAINTS_KEY);
      if (previousComplaints) {
        queryClient.setQueryData(COMPLAINTS_KEY, () => {
          return produce(previousComplaints, (draft) => {
            const index = draft.complaints.findIndex(
              (complaint) => complaint.id === data?.complaint.id
            );
            draft.complaints.splice(index, 1);
          });
        });
      } else {
        return { complaints: [] };
      }
    },
  });
};
