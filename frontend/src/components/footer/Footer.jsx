import React from "react";
import XIcon from "../common/xIcon";
import IgIcon from "../common/IgIcon";

const Footer = ({ footer }) => {
  return (
    <footer className="bg-black text-gray-200">
      <div className="flex p-8 justify-around gap-1.5">
        {footer?.items?.map((item, index) => (
          <div key={item.title + index}>
            <p className="text-[14px] text-gray-400">{item?.title}</p>
            {item?.list?.map((listItem, listIndex) => (
              <a
                key={listItem?.label + listIndex}
                className="flex flex-col text-[12px] py-1.5"
                href={listItem?.path}
              >
                {listItem?.label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex gap-2 items-center justify-center ">
        <a className="border rounded" href="/x"><XIcon/></a>
        <a><IgIcon/></a>

      </div>
      <p className="text-center content-center p-5 text-xs">{footer?.copyright}</p>
    </footer>
  );
};

export default Footer;
