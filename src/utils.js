export const calculateWinner = (
  x_hor,
  x_ver,
  x_diag1,
  x_diag2,
  o_hor,
  o_ver,
  o_diag1,
  o_diag2
) => {
  if (x_hor >= 5 || x_ver >= 5 || x_diag1 >= 5 || x_diag2 >= 5) {
    return 'x';
  }

  if (o_hor >= 5 || o_ver >= 5 || o_diag1 >= 5 || o_diag2 >= 5) {
    return 'o';
  }
  return;
};
