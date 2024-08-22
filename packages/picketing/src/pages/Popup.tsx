import React from 'react';
import Dropdown from '../../../design-system/src/stories/Dropdown';

const Popup = () => {
  return (
    <>
      <h1>
        해당 페이지의 서버시간은
        <br />
        입니다.
      </h1>
      <Dropdown title="다른 사이트 서버 시간" width="small" />
    </>
  );
};

export default Popup;
