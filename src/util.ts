export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const range = (start: number, end: number): number[] => {
  return new Array(end - start + 1)
    .fill(undefined)
    .map((_, idx) => idx + start);
};

export const format = (time: number): string => {
  const seconds = Math.floor(time / 100);
  const deciSeconds = time % 100;
  const paddedDeciSeconds =
    deciSeconds < 10 ? `0${Math.round(deciSeconds)}` : Math.round(deciSeconds);

  return `${seconds}.${paddedDeciSeconds}`;
};

export const getNextElement = <A>(randomize: boolean, arr: Array<A>, current: A): A => {
  let pos;
  if (randomize) {
    pos = getRandomInt(arr.length);
  } else {
    const n = arr.findIndex((c) => c === current)
    pos = n+1
  }
  console.log(pos);
  return arr[pos];
};
