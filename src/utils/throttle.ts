/*เรียกฟังก์ชันเป็นช่วง ๆ ตามเวลาที่กำหนด*/

export const throttle = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  return (...args: any[]) => {
    if (timeoutId) return;
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = undefined;
    }, delay);
  };
};

/*correct*/