const fetchServerTime = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const dateHeader = response.headers.get('Date');
    return dateHeader || '서버 시간을 불러오지 못했습니다.';
  } catch (error) {
    console.error('서버 시간을 불러오지 못했습니다.', error);
    return '서버 시간을 불러오지 못했습니다.';
  }
};

export default fetchServerTime;
