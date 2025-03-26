import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Collapse,
  Typography,
  ListItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import ManIcon from "../common/ManIcon";
import WomanIcon from "../common/WomanIcon";

import content from "../../data/content.json";

export default function ShopDropdownMenu({ onItemClick }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleItemClick = () => {
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false);
    onItemClick?.(); // Cierra el navbar completo
  };

  const renderItems = content?.categories?.map(
    ({ name, description, types }, key) => (
      <NavLink
        to={name === "Hombres" ? "/men" : "/women"}
        key={key}
        onClick={handleItemClick}
      >
        <MenuItem className="flex flex-col p-4 gap-7 shadow-md transition-all duration-300 out">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-full p-3 transition-colors">
              {name == "Hombres" ? <ManIcon /> : <WomanIcon />}
            </div>
            <div className="flex-1">
              <Typography
                variant="h6"
                className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors"
              >
                {name}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors"
              >
                {description}
              </Typography>
            </div>
          </div>
          <ul className="w-full flex flex-wrap gap-2 text-sm text-gray-700">
            {types.map((type, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-lg text-center hover:bg-gray-300 transition-colors"
              >
                {type.name}
              </li>
            ))}
          </ul>
        </MenuItem>
      </NavLink>
    )
  );

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Tienda
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block border-none">
          <ul className="grid grid-cols-2 gap-5 outline-none">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}
