import {memo} from 'react';

import {ActivityIcon} from '../../../../shared/design-system/components/atoms/icons/ActivityIcon';
import {GiftIcon} from '../../../../shared/design-system/components/atoms/icons/GiftIcon';
import {HomeIcon} from '../../../../shared/design-system/components/atoms/icons/HomeIcon';
import {UserIcon} from '../../../../shared/design-system/components/atoms/icons/UserIcon';
import type {MainTabParamList} from '../../MainTabParamList';

interface TabBarIconProps {
  color: string;
  routeName: keyof MainTabParamList;
  size: number;
}

function TabBarIconComponent({color, routeName, size}: TabBarIconProps) {
  switch (routeName) {
    case 'Movements':
      return <ActivityIcon color={color} size={size} />;
    case 'Benefits':
      return <GiftIcon color={color} size={size} />;
    case 'Profile':
      return <UserIcon color={color} size={size} />;
    case 'Home':
    default:
      return <HomeIcon color={color} size={size} />;
  }
}

export const TabBarIcon = memo(TabBarIconComponent);
