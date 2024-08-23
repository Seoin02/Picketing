const timeToKoreaTime = (time: string) => {
  const koreaTime = new Date(time).toLocaleString().toString().slice(13, 26);
  return koreaTime;
};

export default timeToKoreaTime;
