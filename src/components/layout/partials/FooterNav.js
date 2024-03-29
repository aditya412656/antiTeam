import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href='#about' >O нас</a>
        </li>
        <li>
          <a href='#best-po' >Лучшее ПО</a>

        </li>
        <li>
          <a href='#diwnload' >Дизайнерам</a>

        </li>
        <li>
          <a href='#programmer' >Программистам</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;