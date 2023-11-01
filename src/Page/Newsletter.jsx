import Girlimg from "/src/assets/newsletter/Girlimg.svg";
import Cloudb from "/src/assets/newsletter/cloudb.svg";
import Clouds from "/src/assets/newsletter/clouds.svg";
import Cloudm from "/src/assets/newsletter/cloudm.svg";
import Coupon from "/src/assets/newsletter/Coupon.svg";
import Card from "/src/assets/newsletter/Card.svg";
import Login from "/src/assets/newsletter/Login.svg";
import Apple from "/src/assets/newsletter/apple.svg";
import Phone from "/src/assets/newsletter/Phone.svg";
import Phoneb from "/src/assets/newsletter/Phoneb.svg";
import Store from "/src/assets/newsletter/pstore.svg";


const Newsletter = () => {
  return (
    <>
     


      {/* News Letter */}
      <div className="w-[100%] h-[493px] py-10 bg-gradient-to-b from-zinc-300 to-zinc-300 flex-col justify-center items-center gap-10 inline-flex">
        <div className="w-[860px] h-[413px] relative">
          <div className="w-[860px] h-[400px] left-0 top-0 absolute bg-white rounded-[10px] border-8 border-white" />
          <div className="w-[420px] h-[400px] left-0 top-0 absolute">
            <div className="w-[420px] h-[400px] left-0 top-0 absolute bg-neutral-100 rounded-[10px]" />
            <img
              className="w-[365px] h-[365px] left-[28px] top-[18px] absolute"
              src={Girlimg}
            />
            <img
              className="w-[41px] h-[24.82px] left-[215px] top-[95px] absolute"
              src={Clouds}
            />
            <img
              className="w-[65px] h-[39.34px] left-[9px] top-[32px] absolute"
              src={Cloudm}
            />
            <img
              className="w-[65px] h-[39.34px] left-[326px] top-[52px] absolute"
              src={Cloudm}
            />
            <img
              className="w-[85px] h-[51.45px] left-[157px] top-[5px] absolute"
              src={Cloudb}
            />
          </div>
          <div className="left-[440px] top-[67px] absolute flex-col justify-start items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="text-slate-900 text-[32px] font-semibold  leading-10">
                Subscribe to our
                <br />
                Newsletter!
              </div>
              <div className="text-neutral-400 text-base font-normal  leading-normal">
                Be the first to get exclusive offers
                <br />
                ands the latest news
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="">
                <input
                  type="text"
                  className="w-[350px] px-3 py-2 bg-white rounded-lg border border-neutral-300 justify-start items-start gap-2 inline-flex text-stone-400 text-md font-normal font-['Montserrat']"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="w-[148px] px-4 py-3 bg-red-600 rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="text-white text-xs font-semibold  uppercase">
                  SUBSCRIBE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
     {/* How it Works */}
      <div className="w-[100%] h-[390px] py-10 flex-col justify-start items-center gap-10 inline-flex">
        <div className="w-[860px] px-2 pb-3 justify-center items-center gap-2 inline-flex flex-col">
          <div className="text-slate-900 text-2xl font-semibold font-['Metropolis']">
            How It Works?
          </div>
          <div className="w-[76px] h-[3px] bg-red-600" />
        </div>
        <div className="w-[860px] justify-start items-start gap-5 inline-flex">
        
          <div className="grow shrink basis-0 px-4 py-6 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-center gap-6 inline-flex">
            <div className="p-4 bg-white bg-opacity-90 rounded-xl justify-center items-center gap-2 inline-flex">
              
              <div className="w-14 h-14 p-4 bg-red-200 bg-opacity-90 rounded-xl justify-center items-center gap-2 inline-flex ">
              <img src={Login} alt="" />
            </div>
            </div>
            <div className="self-stretch h-[106px] flex-col justify-start items-center gap-2 flex">
              <div className="self-stretch text-center text-slate-900 text-base font-semibold  leading-relaxed">
                Signup
              </div>
              <div className="self-stretch text-center text-zinc-700 text-sm font-medium  leading-normal">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there
              </div>
            </div>
          </div>

          <div className="grow shrink basis-0 px-4 py-6 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-center gap-6 inline-flex">
            <div className="p-4 bg-white bg-opacity-90 rounded-xl justify-center items-center gap-2 inline-flex">
            <div className="w-14 h-14 p-4 bg-red-200 bg-opacity-90 rounded-xl justify-center items-center gap-2 inline-flex ">
              <img src={Coupon} alt="" />
            </div>
            </div>
            <div className="self-stretch h-[106px] flex-col justify-start items-center gap-2 flex">
              <div className="self-stretch text-center text-slate-900 text-base font-semibold  leading-relaxed">
                Choose Coupon
              </div>
              <div className="self-stretch text-center text-zinc-700 text-sm font-medium leading-normal">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 px-4 py-6 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-center gap-6 inline-flex">
            <div className="p-4 bg-white bg-opacity-90 rounded-xl justify-center items-center gap-2 inline-flex">
            <div className="w-14 h-14 p-4 bg-red-200 bg-opacity-90 rounded-xl justify-center items-center gap-2 inline-flex ">
              <img src={Card} alt="" />
            </div>
            </div>
            <div className="self-stretch h-[106px] flex-col justify-start items-center gap-2 flex">
              <div className="self-stretch text-center text-slate-900 text-base font-semibold  leading-relaxed">
                Grab Coupon
              </div>
              <div className="self-stretch text-center text-zinc-700 text-sm font-medium  leading-normal">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Dowbload Section */}

      <div className="w-[100%] h-[480px] py-10 flex-col justify-center items-center gap-2 inline-flex">
  <div className="w-[860px] h-[400px] relative">
    <div className="w-[860px] h-[400px] left-0 top-0 absolute bg-red-200 bg-opacity-90 rounded-3xl" />
    <div className="left-[78px] top-[90px] absolute flex-col justify-start items-start gap-5 inline-flex">
      <div className="h-36 flex-col justify-start items-start gap-4 flex">
<div className="w-[269px] text-red-600 text-[32px] font-semibold font-['Metropolis'] leading-10">Want to be a part of our team</div>
        <div className="self-stretch text-neutral-700 text-base font-normal  leading-normal">Be a part of best site of discount coupons</div>
      </div>
      
      <div className="justify-start items-start gap-4 inline-flex">
        <div className="px-5 py-3 bg-white rounded-lg shadow border border-gray-200 justify-center items-center gap-3 flex">
          <img className="w-8 h-8" src={Apple} />
          <div className="flex-col justify-center items-start gap-1 inline-flex">
            <div className="text-neutral-500 text-[10px] font-medium ">Download From</div>
            <div className="text-slate-900 text-sm font-semibold  uppercase">App Store</div>
          </div>
        </div>
        <div className="px-5 py-3 bg-white rounded-lg shadow border border-gray-200 justify-center items-center gap-3 flex">
          <img className="w-8 h-8" src={Store} />
          <div className="flex-col justify-center items-start gap-1 inline-flex">
            <div className="text-neutral-500 text-[10px] font-medium ">Download From</div>
            <div className="text-slate-900 text-sm font-semibold  uppercase">Play Store</div>
          </div>
        </div>
      </div>
    </div>
    <img className="w-56 h-96 left-[615px] top-[32.47px] absolute origin-top-left rotate-[-5deg]" src={Phoneb} />
    <img className="w-36 h-72 left-[435px] top-[65.52px] absolute origin-top-left rotate-[-5deg]" src={Phone} />
   </div>
</div>
    </>
  );
};

export default Newsletter;
