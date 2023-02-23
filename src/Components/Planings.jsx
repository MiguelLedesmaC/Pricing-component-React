import React, { useState } from "react";
import Planing from "./Planing";



const Planings = () => {
  const [anually, setAnually] = useState(true);

  const handleClick = () => {
    anually ? setAnually(false) : setAnually(true);
  }
  return (
    <>
      <main className="flex flex-col justify-center items-center w-[100%] p-[10%] ">
        <div className="py-7 px-14 flex flex-col gap-10 lg:mb-12">
          <h1 className="capitalize text-DarkGrayishBlue text-center font-bold text-4xl">
            our pricing
          </h1>
          <div className="toggle lg:w-60 font-semibold">
            <span className="text-LightGrayishBlue">Annually</span>
            <label
              
              htmlFor="checkbox"
              className={`font-bold dark:text-WhiteText text-DarkGrayishBlueText cursor-pointer`}
            ></label>
            <input type="checkbox" className="checkbox" id="checkbox" onClick={handleClick} />
            <label htmlFor="checkbox" className="label">
              <div className="ball"></div>
            </label>
            <span className="text-LightGrayishBlue ring-">Monthly</span>
          </div>
        </div>
        <div className="w-[100%] md:max-w-[382px] lg:max-w-[100rem] grid  grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0">
          <Planing
            title={"Basic"}
            price={`${anually ? '199.99':'19.99'}`}
            storage={"500 GB"}
            users={"2"}
            expandable={"3"}
            btnColor={"bg-gradient2"}
            textBtnColor = {'text-white'}
            hoverBtn={'hover:bg-white hover:text-gradient2 hover:ring-2 ring-gradient2'}
          />
          <Planing
            title={"Professional"}
            price={`${anually ? '249.99':'24.99'}`}
            storage={"1 TB"}
            users={"5"}
            expandable={"10"}
            bg={"bg-gradient-to-r from-gradient2 to-gradient1"}
            colorText={"white"}
            btnColor={"bg-white"}
            textBtnColor = {'text-gradient2'}
            hoverBtn={'hover:bg-gradient-to-r from-gradient2 to-gradient1 hover:text-white hover:ring-2 ring-white'}
            height={'lg:h-[500px]'}
            position={'-mt-5'}
          />
          <Planing
            title={"Master"}
            price={`${anually ? '399.99':'39.99'}`}
            storage={"2 TB"}
            users={"10"}
            expandable={"20"}
            btnColor={"bg-gradient2"}
            textBtnColor = {'text-white'}
            hoverBtn={'hover:bg-white hover:text-gradient2 hover:ring-2 ring-gradient2'}
          />
        </div>
      </main>
    </>
  );
};

export default Planings;
