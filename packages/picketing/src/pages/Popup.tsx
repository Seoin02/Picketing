import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import timeToKoreaTime from '../shared/utils/timeToKoreaTime';
import { timeQueries } from '../shared/apis/serverTime/queries';
import Dropdown from '../../../design-system/src/stories/Dropdown';

const Popup = () => {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (typeof chrome === 'undefined' || !chrome.runtime) {
      console.error('chrome API is not available');
      return;
    }

    const port = chrome.runtime.connect({ name: 'popup' });

    const handleMessage = ({ url }: { url: string }) => setUrl(url);
    port.onMessage.addListener(handleMessage);

    return () => {
      port.onMessage.removeListener(handleMessage);
    };
  }, []);

  const {
    data: timeData,
    isLoading,
    error,
  } = useQuery<string>({
    ...timeQueries.queryOptions(url || 'loading...'),
    enabled: !!url,
  });

  if (isLoading) {
    return <div>서버 시간을 불러오는 중입니다.</div>;
  }

  if (error) {
    console.error('Error fetching server time:', error);
    return <div>서버 시간을 불러오는 데 실패했습니다.</div>;
  }

  const koreaTime = timeToKoreaTime(timeData || 'loading...');

  return (
    <div className="w-44 h-60 flex-col items-center justify-center p-2">
      <p className="text-sm">
        해당 페이지의 서버 시간은
        <br />
        <span className="text-red font-bold">{koreaTime}</span>입니다.
      </p>
      <Dropdown title="다른 사이트 서버 시간" width="small" />
    </div>
  );
};

export default Popup;
