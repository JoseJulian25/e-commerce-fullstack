import React from 'react';
import { Navbar, Collapse, IconButton } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavListContainer from './NavListContainer';
import { Typography } from '@material-tailwind/react';

export default function MainNavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeNav = () => setOpenNav(false);

  return (
    <Navbar className="">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="/" variant="h2" className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-black font-bold">
          AdalShop
        </Typography>
        
        <div className="hidden lg:block">
          <NavListContainer />
        </div>
        
        <IconButton
          variant="text"
          color="black"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
        </IconButton>
      </div>
      
      <Collapse open={openNav}>
        <NavListContainer onItemClick={closeNav} />
      </Collapse>
    </Navbar>
  );
}