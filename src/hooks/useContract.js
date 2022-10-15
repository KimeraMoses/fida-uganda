import { useQuery } from 'react-query';
import { getAllContracts } from '../apis/contract';
import { CONTRACTS } from '../lib/constants';

export const useContracts = () => {
  return useQuery(CONTRACTS, getAllContracts);
};
