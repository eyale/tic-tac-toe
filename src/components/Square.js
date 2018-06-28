import React from 'react';

const Square = (props) => (
  <td className="square" onClick={props.onClick}>
    {props.value}
  </td>
);
export default Square;
