import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addEmployee,
  deleteEmployee,
  editEmployee,
  getAllEmployees,
  getEmployee,
} from "../apis/employees";
import { EMPLOYEES_KEY } from "../lib/constants";

export const useEmployee = (id) => {
  return useQuery([EMPLOYEES_KEY, id], () => getEmployee(id));
};

export const useEmployees = () => {
  return useQuery(EMPLOYEES_KEY, getAllEmployees);
};

export const useAddEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation(addEmployee, {
    onSuccess: (data) => {
      const previousEmployees = queryClient.getQueryData(EMPLOYEES_KEY);
      if (previousEmployees) {
        queryClient.setQueryData(EMPLOYEES_KEY, (previousEmployees) => {
          return produce(previousEmployees, (draft) => {
            draft.employees.push(data.employee);
          });
        });
      } else {
        queryClient.setQueryData(EMPLOYEES_KEY, () => {
          return { employees: [data.employee] };
        });
      }
    },
  });
};

export const useEditEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation(editEmployee, {
    onSuccess: (data) => {
      const previousEmployees = queryClient.getQueryData(EMPLOYEES_KEY);
      if (previousEmployees) {
        queryClient.setQueryData(EMPLOYEES_KEY, (previousEmployees) => {
          return produce(previousEmployees, (draft) => {
            const index = draft.employees.findIndex(
              (asset) => asset.id === data.employee.id
            );
            draft.employees[index] = data.employee;
          });
        });
      } else {
        queryClient.setQueryData(EMPLOYEES_KEY, () => {
          return { employees: [data.employee] };
        });
      }
    },
  });
};

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteEmployee, {
    onMutate: async (id) => {
      await queryClient.cancelMutations(EMPLOYEES_KEY);

      const previousEmployees = queryClient.getQueryData(EMPLOYEES_KEY);
      if (previousEmployees) {
        queryClient.setQueryData(EMPLOYEES_KEY, (previousEmployees) => {
          return produce(previousEmployees, (draft) => {
            draft.employees.filter((employee) => employee.id !== id);
          });
        });
      }
    },
    onError: (_error, _employeeId, context) => {
      queryClient.setQueryData(EMPLOYEES_KEY, context.previousEmployees);
    },
    onSettled: () => {
      queryClient.invalidateQueries(EMPLOYEES_KEY);
    },
  });
};
