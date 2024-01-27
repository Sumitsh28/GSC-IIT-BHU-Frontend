import React from "react";

const Quotation = () => {
  return (
    <div className="bg-[url('/assets/QuotationBackground.svg')] bg-no-repeat bg-cover">
      <div className="bg-[url('/assets/Swimmer.svg')] bg-no-repeat  bg-right-bottom">
        <div className="bg-[url('/assets/Quotationleftbottom.svg')] bg-no-repeat  bg-left-bottom">
          <div className="bg-[url('/assets/Quotationrighttop.svg')] bg-no-repeat  bg-right-top">
            <div className="bg-[url('/assets/Quotation.svg')] bg-no-repeat  bg-top-4">
              <div className="text-center font-inter pt-44 pb-40 pl-52 pr-52">
                <div className="text-white font-bold text-4xl pt-6">
                  IITBHU sports is a community of sports enthusiasts who are
                  maintaining their fitness even in these tough times.
                </div>
                <div className="text-white font-bold text-xl pt-10">Person</div>
                <div className="text-white font-bold text-3xl pt-4">---</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
