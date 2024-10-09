import React, { useState, useEffect, ChangeEvent } from 'react';
import { useQuery } from '@tanstack/react-query';
import timeToKoreaTime from '../shared/utils/timeToKoreaTime';
import { timeQueries } from '../shared/apis/serverTime/queries';
import Dropdown from '../../../design-system/src/stories/Dropdown';
import useServerTimeStore from '../shared/store';

const Popup = () => {
  const [url, setUrl] = useState<string | null>(null);
  const intervals = useServerTimeStore(state => state.interval);
  const setIntervals = useServerTimeStore(state => state.setInterval);

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

  const handleIntervalChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newInterval = parseInt(e.target.value, 10);
    setIntervals(newInterval);

    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
      chrome.runtime.sendMessage({ type: 'SET_INTERVAL', interval: newInterval }, response => {
        console.log('간격 변경에 대한 응답:', response);
      });
    } else {
      console.error('Chrome runtime API is not available');
    }
  };

  const {
    data: timeData,
    isLoading,
    error,
  } = useQuery<string>({
    ...timeQueries.queryOptions(url || 'loading...'),
    enabled: !!url,
    refetchInterval: 500,
  });

  console.log(timeData);

  if (isLoading) {
    return <div className="w-full">서버 시간을 불러오는 중입니다.</div>;
  }

  if (error) {
    console.error('Error fetching server time:', error);
    return <div className="w-full">서버 시간을 불러오는 데 실패했습니다.</div>;
  }

  const koreaTime = timeToKoreaTime(timeData || 'loading...');

  return (
    <div className="w-44 h-48 flex flex-col items-center justify-center p-2 gap-1">
      <h1 className="text-sm">
        해당 페이지의 서버 시간은
        <br />
        <span className="text-red font-bold text-lg">{koreaTime}</span>입니다.
      </h1>
      <select
        value={intervals}
        onChange={handleIntervalChange}
        className="border-2 border-gold-50 rounded-md p-1 w-full">
        <option value={0}>알림 선택</option>
        <option value={1}>1분 후 알림</option>
        <option value={2}>2분 후 알림</option>
        <option value={3}>3분 후 알림</option>
      </select>
      <div className="flex flex-col gap-2 align-center">
        <h2 className="text-center text-xs">
          🐥크롬 알림을 허용해야🐥
          <br />
          🐥알림을 받을 수 있어요🐥
        </h2>

        <a href="https://chromewebstore.google.com/detail/picketing/hjjmmbhjjbajdibmjnnaokebahhkoplc?hl=ko">
          <button> 개발자에게 피드백 남기기</button>
        </a>
        <a href="https://github.com/Seoin02?tab=repositories" target="_blank" className="text-gray-50">
          ⓒSeoin02
        </a>
      </div>
    </div>
  );
};
export default Popup;
