import fetchServerTime from './shared/apis/serverTime/api';

let currentUrl = '';
let checkInterval = 1;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.url) {
    currentUrl = message.url;
  }
  if (message.type === 'SET_INTERVAL') {
    checkInterval = message.interval;
    setAlarms();
  }
});

chrome.runtime.onConnect.addListener(port => {
  if (port.name === 'popup') {
    port.postMessage({ url: currentUrl });
  }
});

chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === 'checkTime') {
    console.log('알람 트리거됨:', alarm);

    chrome.notifications.create(
      {
        type: 'basic',
        iconUrl: 'assets/alarm.png',
        title: 'Notification',
        message: `서버 시간을 확인해주세요!`,
        priority: 2,
      },
      notificationId => {
        if (chrome.runtime.lastError) {
          console.error('알림 생성 오류:', chrome.runtime.lastError);
        } else {
          console.log('알림 생성 완료:', notificationId);
        }
      }
    );
  }
});

const setAlarms = async () => {
  try {
    const serverTimeByString = await fetchServerTime(currentUrl);
    const serverTime = new Date(serverTimeByString);
    console.log(serverTime);

    if (!serverTime || isNaN(serverTime.getTime())) {
      throw new Error('서버 시간 데이터가 유효하지 않습니다.');
    }

    const targetTime = new Date(serverTime.getTime() + checkInterval * 60000);
    const now = new Date();
    const delayInMinutes = (targetTime.getTime() - now.getTime()) / 60000;

    console.log('현재 시간:', now);
    console.log('목표 시간:', targetTime);
    console.log('알림 시간 (분):', delayInMinutes);

    if (isNaN(delayInMinutes) || delayInMinutes <= 0) {
      throw new Error('알림 시간이 유효하지 않습니다.');
    }

    chrome.alarms.create('checkTime', { delayInMinutes });
    console.log('알람 생성됨:', delayInMinutes, '분 후에 알림 예정');
  } catch (error) {
    console.error('알람 설정 중 오류가 발생했습니다.', error);
  }
};
