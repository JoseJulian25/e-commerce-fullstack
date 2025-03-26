import React from 'react';
import { List } from '@material-tailwind/react';
import ShopDropdownMenu from './ShopDropdownMenu';
import UtilityLinks from './UtilityLinks';

export default function NavListContainer({ onItemClick }) {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <ShopDropdownMenu onItemClick={onItemClick} />
      <UtilityLinks onItemClick={onItemClick} />
    </List>
  );
}