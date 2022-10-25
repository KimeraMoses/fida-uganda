import { v4 } from 'uuid';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getAllContracts, uploadContracts } from '../apis/contract';
import { CONTRACTS } from '../lib/constants';
import produce from 'immer';

export const useContracts = () => {
  return useQuery(CONTRACTS, getAllContracts);
};

export const useAddContracts = () => {
  const queryClient = useQueryClient();
  return useMutation(uploadContracts, {
    onMutate: async (files) => {
      // console.log('files', files);
      await queryClient.cancelMutations(CONTRACTS);

      const previousContracts = queryClient.getQueryData(CONTRACTS);
      const time = new Date().toISOString();
      const newFiles = [];
      files.forEach((file) => {
        newFiles.push({
          ...file,
          id: v4(),
          createdAt: time,
          updateAt: time,
          downloadUrl: file.file.name,
          fileKey: file.file.name,
          filename: file.file.name,
          size: file.file.size,
        });
      });
      // console.log('new files', newFiles);
      if (previousContracts) {
        queryClient.setQueryData(CONTRACTS, (previousContracts) => {
          return produce(previousContracts, (draft) => {
            draft.contracts.push(...newFiles);
          });
        });
      } else {
        queryClient.setQueryData(CONTRACTS, () => {
          return { contracts: [...newFiles] };
        });
      }
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(CONTRACTS, context.contracts);
    },
    onSettled: () => {
      queryClient.invalidateQueries(CONTRACTS);
    },
  });
};
