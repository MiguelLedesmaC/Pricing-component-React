import React from "react";

const Planing = ({
  title,
  price,
  storage,
  users,
  expandable,
  bg = "bg-white",
  colorText = "DarkGrayishBlue",
  btnColor,
  textBtnColor,
  hoverBtn,
  height,
  position
}) => {
  return (
    <article>
      <div
        className={`flex flex-col items-center text-center justify-center ${height} ${position} gap-5 ${bg} font-monserrat font-bold text-${colorText} rounded-md py-7`}
      >
        <h2 className=" text-xl">{title}</h2>
        <p className="text-6xl">${price}</p>
        <p className="border-y-[1px] w-[80%] py-5">{storage} Storage</p>
        <p>{users} Users Allowed</p>
        <p className="border-y-[1px] w-[80%] mt-1 py-5">
          Send up to {expandable} GB
        </p>
        <a
          className={`uppercase ${btnColor} ${textBtnColor} ${hoverBtn} py-3 w-[80%] rounded-md text-sm`}
          href="#"
        >
          Learn more
        </a>
      </div>
    </article>
  );
};

export default Planing;
