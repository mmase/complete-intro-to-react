import React from 'react';
import { render } from 'react-dom';

const MyTitle = ({ title, color }) =>
  React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      {
        style: {
          color
        }
      },
      title
    )
  );

const MyFirstComponent = () =>
  React.createElement(
    'div',
    null,
    React.createElement(MyTitle, {
      title: 'The Office',
      color: 'rebeccapurple'
    }),
    React.createElement(MyTitle, {
      title: 'Stranger Things',
      color: 'steelblue'
    }),
    React.createElement(MyTitle, { title: 'Homeland', color: 'peru' }),
    React.createElement(MyTitle, {
      title: 'Mad Men',
      color: 'yellowgreen'
    })
  );

render(React.createElement(MyFirstComponent), document.getElementById('app'));
