// components/GlobalNavigation.jsx
import React from 'react';
import NavigationDots from './globalCmp/NavigationDots';
import SocialMedia from './globalCmp/SocialMedia';

const GlobalNavigation = () => {
  return (
    <div className="global-navigation">
      <NavigationDots />
      <SocialMedia />
    </div>
  );
};

export default GlobalNavigation;
