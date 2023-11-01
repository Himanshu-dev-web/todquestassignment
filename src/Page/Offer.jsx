import Sunglassimg from "/src/assets/Offer/sunglasses.svg";
import Foodimg from "/src/assets/Offer/food.svg"
import Newseasonimg from "/src/assets/Offer/newseason.svg"
import Travelimg from "/src/assets/Offer/Trave.svg";
import Backgroundimg from "/src/assets/Offer/blueImg.svg"


const Offer = () => {
  return (
    <>
      {/* Image Part */}
      <div className="w-[100%] h-[260px] py-6 flex-col justify-center items-center gap-2 inline-flex">
        <img
          className="w-[860px] h-[212px] rounded-2xl"
          src={Sunglassimg}
        />
      </div>
      {/* Popular Membership Part */}
      <div className="w-[100%] h-[1064px] py-10 flex-col justify-start items-center gap-10 inline-flex">
  <div className="w-[860px] px-2 pb-3 justify-center items-center gap-2 inline-flex flex-col">
    <div className="text-slate-900 text-2xl font-semibold ">Popular Membership</div>
    <div className="w-[76px] h-[3px] bg-red-600" />
  </div>

  <div className="flex-col justify-start items-start gap-5 flex">
    <div className="justify-start items-center gap-5 inline-flex">
     
      <div className="w-[420px] h-[420px] relative bg-white rounded-[10px] border border-gray-200">
        <div className="w-[100px] h-[100px] left-[236px] top-[95px] absolute bg-zinc-300" />
        <img className="w-[420px] h-[420px] left-0 top-0 absolute" src={Foodimg} />
      </div>

      <div className="w-[420px] h-[420px] relative bg-white rounded-[10px] border border-gray-200">
        <div className="w-[100px] h-[100px] left-[283px] top-[12px] absolute bg-zinc-300" />
        
        <div className="w-[420px] h-[420px] left-0 top-0 absolute">
          <img className="w-[420px] h-[420px] left-0 top-0 absolute" src={Backgroundimg} />
          <div className="w-[420px] h-[420px] left-0 top-0 absolute bg-white bg-opacity-70 backdrop-blur-sm" />
        </div>  
        <div className="w-[400px] h-[340px] left-[10px] top-[40px] absolute">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="w-[200px] h-[170px] p-5   bg-white border-r border-gray-200 flex-col justify-start items-center gap-6 inline-flex">
            <div className="flex-col justify-start items-center gap-3 flex">
              <img className="w-20 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" />
              <div className="text-center text-slate-900 text-xs font-medium  leading-[14px]">Amazon</div>
            </div>
            <div className="flex-col justify-start items-center gap-2 flex">
              <div className="w-20 text-center text-lime-600 text-xs font-semibold ">Flat 30% Off</div>
              <div className="w-[148px] px-4 py-3 bg-red-600 rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="text-white text-xs font-semibold  uppercase">Grab Now</div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>

    <div className="justify-start items-center gap-5 inline-flex">
      <div className="w-[420px] h-[420px] relative bg-white rounded-[10px] border border-gray-200">
        <div className="w-[100px] h-[100px] left-[229px] top-[156px] absolute bg-zinc-300" />
        <img className="w-[420px] h-[420px] left-0 top-0 absolute" src={Newseasonimg} />
      </div>
      <div className="w-[420px] h-[420px] relative bg-white rounded-[10px] border border-gray-200">
        <div className="w-[100px] h-[100px] left-[178px] top-[100px] absolute bg-zinc-300" />
        <img className="w-[420px] h-[420px] left-0 top-0 absolute" src={Travelimg} />
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Offer;
