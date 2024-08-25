import React from 'react';
import { useQuery } from '@tanstack/react-query';
import timeToKoreaTime from '../shared/utils/timeToKoreaTime';
import { timeQueries } from '../shared/apis/serverTime/queries';
import Dropdown from '../../../design-system/src/stories/Dropdown';

const Popup = () => {
  const { data: timeData } = useQuery({
    ...timeQueries.queryOptions(window.location.href),
  });
  const koreaTime = timeToKoreaTime(timeData || 'isLoading');

  return (
    <>
      <h1 className="text-sm">
        해당 페이지의 서버 시간은
        <br />
        {koreaTime}입니다.
      </h1>
      <Dropdown title="다른 사이트 서버 시간" width="small" />
    </>
  );
};

export default Popup;
