import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import timeToKoreaTime from '../shared/utils/timeToKoreaTime';
import { timeQueries } from '../shared/apis/serverTime/queries';
import Dropdown from '../../../design-system/src/stories/Dropdown';

const Popup = () => {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const port = chrome.runtime.connect({ name: 'popup' });

    const handleMessage = ({ url }: { url: string }) => setUrl(url);
    port.onMessage.addListener(handleMessage);
  }, []);

  const {
    data: timeData,
    isLoading,
    error,
  } = useQuery<string>({
    ...timeQueries.queryOptions(url || 'loading...'),
  });

  const koreaTime = timeToKoreaTime(timeData || 'loading...');

  return (
    <>
      <h1 className="text-sm">
        해당 페이지의 서버 시간은
        <br />
        {isLoading ? 'loading...' : error ? '에러 발생' : koreaTime}입니다.
      </h1>
      <Dropdown title="다른 사이트 서버 시간" width="small" />
    </>
  );
};

export default Popup;
