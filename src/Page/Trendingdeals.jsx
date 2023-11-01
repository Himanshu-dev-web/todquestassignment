import Fashion from "/src/assets/fashion.svg";
import Food from "/src/assets/food.svg";
import Beauty from "/src/assets/beauty care.svg";
import Toys from "/src/assets/toys.svg";
import Cloud from "/src/assets/hosting.svg";
import Gaming from "/src/assets/gaming.svg";
import Phones from "/src/assets/mobile.svg";
import Car from "/src/assets/travel.svg";
import Movies from "/src/assets/movies.svg";

const Trendingdeals = () => {
  const CouponItems = ["Popular Coupons", "Ending Coupons", "Latest"];

  const items = [
    {
      name: "Fashion",
      img: Fashion,
    },
    {
      name: "Food",
      img: Food,
    },
    {
      name: "Beauty",
      img: Beauty,
    },
    {
      name: "Toys",
      img: Toys,
    },
    {
      name: "Cloud",
      img: Cloud,
    },
    {
      name: "Gaming",
      img: Gaming,
    },
    {
      name: "Phones",
      img: Phones,
    },
    {
      name: "Travel",
      img: Car,
    },
    {
      name: "Movies",
      img: Movies,
    },
  ];

  return (
    <>
      <div className="w-[100%] h-[]  py-10 flex-col justify-start items-center gap-10 inline-flex">
        <div className="justify-start items-start inline-flex">
          {CouponItems.map((item, index) => (
            <div
              key={index}
              className="p-3 mx-3 bg-white rounded-lg shadow justify-center items-center gap-1.5 flex"
            >
              <div className=" text-md font-medium  hover:text-red-600 hover:cursor-pointer">
                {item}
              </div>
            </div>
          ))}
        </div>

        <div className="w-[100%] flex flex-wrap justify-center gap-[25px]  ">
          <div className="w-[60%]">
            {Array.from({ length: 8 }, (_, index) => (
              <div
                key={index}
                className="pl-[22px] m-2 pr-[23px] pt-4 pb-[15px] bg-white rounded-[10px] border border-gray-200 flex-col justify-center items-center gap-[39px] inline-flex"
              >
                <div className="self-stretch flex-col justify-start items-center gap-5 inline-flex">
                  <div className="text-center text-lime-600 text-base font-semibold  leading-tight">
                    Upto 60% off on
                    <br />
                    Appliances
                  </div>
                  <img
                    className="w-20 h-6"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
                  />
                  <div className="w-[155px] h-7 text-center text-zinc-500 text-xs font-medium  leading-[14px]">
                    Upto 60% off on summer Appliances
                  </div>
                </div>
                <div className="self-stretch px-4 py-3 bg-red-600 rounded-lg justify-center items-center gap-2 inline-flex">
                  <div className="text-white text-xs font-semibold  uppercase">
                    Grab now
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deal of the day */}
        <div className="w-[100%] px-2 pb-3 flex-col justify-center items-center gap-2 inline-flex">
          <div className="text-slate-900 text-2xl font-semibold font-['Metropolis']">
            Deals Of The Day
          </div>
          <div className="w-[76px] h-[3px] bg-red-600" />
        </div>
        <div className="w-[100%] flex flex-wrap justify-center items-center gap-[25px]  ">
          <div className="w-[60%%]">
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className="pl-[22px] m-2 pr-[23px] pt-4 pb-[15px] bg-white rounded-[10px] border border-gray-200 flex-col justify-center items-center gap-[39px] inline-flex"
              >
                <div className="self-stretch flex-col justify-start items-center gap-5 inline-flex">
                  <div className="text-center text-lime-600 text-base font-semibold font-['Metropolis'] leading-tight">
                    Upto 60% off on
                    <br />
                    Appliances
                  </div>
                  <img
                    className="w-20 h-6"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
                  />
                  <div className="w-[155px] h-7 text-center text-zinc-500 text-xs font-medium font-['Metropolis'] leading-[14px]">
                    Upto 60% off on summer Appliances
                  </div>
                </div>
                <div className="self-stretch px-4 py-3 bg-red-600 rounded-lg justify-center items-center gap-2 inline-flex">
                  <div className="text-white text-xs font-semibold font-['Metropolis'] uppercase">
                    Grab now
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coupon By Categories  */}

        <div className="w-[100%] h-[480px]  bg-gradient-to-b from-zinc-300 to-zinc-300  py-10 flex-col justify-start items-center gap-10 inline-flex">
          <div className="w-[860px] px-2 pb-3 justify-center items-center gap-2 inline-flex flex-col">
            <div className="text-slate-900 text-2xl font-semibold ">
              Coupon By Categories
            </div>
            <div className="w-[76px] h-[3px] bg-red-600" />
          </div>
          <div className="flex-col bg-gradient-to-b from-zinc-300 to-zinc-300 justify-start items-center flex">
            <div className="w-[860px] justify-between items-start inline-flex">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-tl-lg rounded-tr-lg border-b-2 hover:border-red-600 hover:cursor-pointer flex-col justify-start items-center gap-2.5 inline-flex "
                >
                  <img className="w-9 h-9" src={item.img} />
                  <div className="w-[60px] text-center text-slate-900 text-xs font-semibold ">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[234px] pt-4 pb-6 bg-white rounded-bl-2xl rounded-br-2xl border-t border-zinc-100 flex-col justify-start items-center gap-4 flex">
              <div className="justify-start items-center gap-5 inline-flex">
                {Array.from({ length: 4 }, (_, index) => (
                  <div
                    key={index}
                    className="w-[200px] p-5 bg-white rounded-[10px] border flex-col justify-start items-center gap-6 inline-flex"
                  >
                    <div className="flex-col justify-start items-center gap-3 flex">
                      <img
                        className="w-20 h-6"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
                      />
                      <div className="text-center text-slate-900 text-xs font-medium  leading-[14px]">
                        Amazon
                      </div>
                    </div>
                    <div className="flex-col justify-start items-center gap-2 flex">
                      <div className="w-20 text-center text-lime-600 text-xs font-semibold ">
                        Flat 30% Off
                      </div>
                      <div className="w-[148px] px-4 py-3 bg-red-600 rounded-lg justify-center items-center gap-2 inline-flex">
                        <div className="text-white text-xs font-semibold  uppercase">
                          Grab Now
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Trendingdeals;
