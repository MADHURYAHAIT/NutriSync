import {

    Link,


    Checkbox,
  } from 'framework7-react';
import React from 'react';

const TRow = ({ title, text }) => {
  return (
    <tr>
        <td className="checkbox-cell">
            <Checkbox />
        </td>
        <td className="label-cell">{title}</td>
        <td className="numeric-cell">{text}</td>
        <td className="actions-cell">
        <Link iconIos="f7:square_pencil" iconMd="material:edit" />
        <Link iconIos="f7:trash" iconMd="material:delete" />
        </td>
  </tr>
  );
};

export default TRow;
