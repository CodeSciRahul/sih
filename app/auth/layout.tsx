import Image from 'next/image';
import authimage from "../../public/images/authpage.png";



const AuthLayout = ({ children }) => {
  return (
    <>
    <div className="flex h-screen w-screen">
      <div
        id="left"
        className="w-2/5 h-full bg-white  flex flex-col items-center justify-center text-4xl"
      >
        {children}
      </div>
      <div id="right" className="w-3/5 h-full flex justify-center   items-center   bg-slate-400">
        <div
          id="text-box"
          className="fixed top-20 font-sans  font-bold text-4xl text-white"
        >
          hi There ,Welcome to MentorsClub
        </div>
       <Image className='w-[700px] h-[700px] ' src={authimage} alt="auth image"/>
      </div>
      </div>
    </>
  );
};

export default AuthLayout;
