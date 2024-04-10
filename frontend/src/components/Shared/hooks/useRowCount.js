const useRowCount = ({ birthdayNum, width }) => {
  if (width < 300) {
    return `grid-cols-1 grid-rows-0`;
  }

  if (birthdayNum > 2 && birthdayNum < 5) {
    return `grid-rows-2`;
  }
  if (birthdayNum > 4 && birthdayNum < 7) {
    return `grid-rows-3`;
  }
  if (birthdayNum > 6 && birthdayNum < 9) {
    return `grid-rows-4`;
  }
  if (birthdayNum > 8 && birthdayNum < 11) {
    return `grid-rows-5`;
  }
  if (birthdayNum > 10 && birthdayNum < 13) {
    return `grid-rows-5`;
  }
};

export default useRowCount;
