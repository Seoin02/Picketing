import React, { useEffect, useState } from 'react';
import Dropdown from '../../../design-system/src/stories/Dropdown';
import fetchServerTime from '../shared/apis/serverTime/api';

const Popup = () => {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const koreaTime = new Date(serverTime);

  useEffect(() => {
    const getServerTime = setInterval(async () => {
      const time = await fetchServerTime(window.location.href);
      setServerTime(time);
    }, 1000);

    return () => clearInterval(getServerTime);
  }, []);

  return (
    <>
      <h1 className="text-sm">
        해당 페이지의 서버시간은
        <br />
        {koreaTime.toLocaleString().toString().slice(13, 26)}입니다.
      </h1>
      <Dropdown title="다른 사이트 서버 시간" width="small" />
    </>
  );
};

export default Popup;
