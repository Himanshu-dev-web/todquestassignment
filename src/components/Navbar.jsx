import Img from "/src/assets/logo.png"



const Navbar = () => {

    const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <>
    
    <div className="w-[100%] h-[5rem] flex flex-row justify-center "> 
    <div className="w-[860px] h-[82px] py-4  justify-between items-center inline-flex">
  <div className="flex-col justify-center items-center gap-2 inline-flex">
    <img className="w-[120px] h-[50px]" src={Img} />
  </div>
  <div className="w-[418px] h-8  rounded-lg border  justify-start items-center gap-2 flex">
    <input  className="px-6 h-[3rem] w-[100%] bg-slate-200 rounded-lg"  placeholder='Search For brand,   category, coupon' type="text" />
  </div>
  <div className=" py-2 bg-red-600 rounded-lg justify-center items-center gap-2 flex">
    <div className="text-white text-sm font-semibold  uppercase px-2">Login / Sign Up</div>
  </div>
</div>
</div>

<div className="w-[100%] h-11 bg-slate-900 flex-col justify-center items-center gap-2 inline-flex">
  <div className="justify-start items-center inline-flex">
  {navItems.map((item, index) => (
    <div key={index} className="p-4 border-b-2 hover:border-red-600 justify-center items-center gap-1 flex cursor-pointer">
      <div className="hover:text-red-600  text-white text-md font-semibold ">{item}</div>
    </div>
        ))}
  </div>
</div>



 
  </>
  )
}

export default Navbar