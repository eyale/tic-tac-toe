import { BOARD_ROW_SIZE } from './constants';

export const calculateWinner = (x_hor, x_ver, x_diag1, x_diag2, o_hor, o_ver, o_diag1, o_diag2) => {
  if (x_hor >= 5 || x_ver >= 5 || x_diag1 >= 5 || x_diag2 >= 5) {
    return 'x';
  }

  if (o_hor >= 5 || o_ver >= 5 || o_diag1 >= 5 || o_diag2 >= 5) {
    return 'o';
  }
  return;
};

export const generateEmptyBoard = () => [...Array(BOARD_ROW_SIZE)].fill().map(x => [...Array(BOARD_ROW_SIZE)].fill(''));
// Promise _______________________________________________________________________________
const getFakeMembers = count => new Promise((resolves, reject) => {
  const request = new XMLHttpRequest();
  console.log(request);
  request.open('GET', `https://api.randomuser.me/?nat=US&results=${count}`);
  request.onload = () =>
    (request.status === 200)
    ? resolves(JSON.parse(request.response).results)
    : reject(Error(request.statusText));
  request.onerror = err => reject(err);
  request.send();
});

getFakeMembers(2).then(
  members => console.log(members),
  err => console.error(new Error('cannot load members from randomuser.me')),
);
// Promise _______________________________________________________________________________
