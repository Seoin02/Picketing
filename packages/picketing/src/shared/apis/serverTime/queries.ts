import { queryClient } from '../../utils/queryClient';
import fetchServerTime from './api';

const key = {
  timeData: (url: string) => ['timeData', url],
};

export const timeQueries = {
  getQueryKey: (url: string) => key.timeData(url),
  removeQuery: (url: string) => queryClient.removeQueries({ queryKey: timeQueries.getQueryKey(url) }),
  queryOptions: (url: string) => {
    return {
      queryKey: timeQueries.getQueryKey(url),
      queryFn: () => fetchServerTime(url),
      refetchInterval: 500,
    };
  },
};
