import React from 'react';
import { connect } from 'react-redux';

import { THEMES } from '../../../utils/theme';

const Logo = (props) => {
  const {
    theme,
    small,
    large,
    dispatch,
    ...restProps
  } = props;

  const whiteSmall = <img src={require('../../../assets/images/logo-white-small.svg')} {...restProps}/>;
  const whiteLarge = <img src={require('../../../assets/images/logo-white-large.svg')} {...restProps}/>;
  const blackSmall = <img src={require('../../../assets/images/logo-black-small.svg')} {...restProps}/>;
  const blackLarge = <img src={require('../../../assets/images/logo-black-large.svg')} {...restProps}/>;

  if (small && theme === THEMES.light) return blackSmall;
  if (large && theme === THEMES.light) return blackLarge;
  if (small && theme === THEMES.dark) return whiteSmall;
  return whiteLarge;
};

export default connect((state) => ({ ...state.app.theme }))(Logo);
