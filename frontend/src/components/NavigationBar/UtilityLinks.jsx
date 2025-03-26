import React from 'react';
import { Typography, ListItem } from '@material-tailwind/react';
import { HeartIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function UtilityLinks({ onItemClick }) {
  const items = [
    { icon: HeartIcon, text: 'Wishlist', href: '#' },
    { icon: ShoppingCartIcon, text: 'Shopping Cart', href: '#' },
    { icon: UserCircleIcon, text: 'Account', href: '#' }
  ];

  return (
    <>
      {items.map(({ icon: Icon, text, href }, index) => (
        <Typography
          key={index}
          as="a"
          href={href}
          variant="small"
          color="black"
          className="font-medium"
          onClick={onItemClick}
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <Icon className="h-5 w-5" /> {text}
          </ListItem>
        </Typography>
      ))}
    </>
  );
}