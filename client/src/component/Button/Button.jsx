import React from 'react';
import { Link } from 'react-router-dom';

function Button({ to, href, children, style }) {
  let Comp = 'button';
  const props = {};

  if (to) {
    Comp = Link;
    props.to = to;
  } else if (href) {
    Comp = 'a';
    props.href = href;
  }

  return (
    <Comp className={style} {...props}>
      {children}
    </Comp>
  );
}

export default Button;
