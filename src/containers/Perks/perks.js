import React from "react";
import Dot from "../../images/dot2.svg";
import Logo from "../../images/perklogo.svg";

const Perks = () => (
  <div className="text-left xs:float-right">
    <h1 className="flex font-poppins font-bold mt-32 ml-8 xs:ml-12 text-3xl xs:text-5xl text-gray-900 text-opacity-90 tracking-tight">
      Perks and Benefits
    </h1>

    <div className="text-left xs:flex-col mr-10">
      <div className="flex xs:flex-row-reverse mt-12 ml-8 xs:ml-32">
        <img
          className="h-2.5 w-2.5 xs:h-auto xs:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-poppins font-semibold -ml-24 mr-4 text-lg xs:text-2xl text-black">
          Build a diverse portfolio
        </p>
      </div>

      <div className="flex xs:flex-row-reverse mt-8 ml-8 xs:ml-32">
        <img
          className="h-2.5 w-2.5 xs:h-auto xs:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-poppins font-semibold -ml-24 mr-4 text-lg xs:text-2xl text-black">
          Gain industry-relevant skills
        </p>
      </div>

      <div className="flex xs:flex-row-reverse mt-8 ml-8 xs:ml-32">
        <img
          className="h-2.5 w-2.5 xs:h-auto xs:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-poppins font-semibold -ml-24 mr-4 text-lg xs:text-2xl text-black">
          Mentorship by experienced devs
        </p>
      </div>

      <div className="flex xs:flex-row-reverse mt-8 ml-8 xs:ml-32">
        <img
          className="h-2.5 w-2.5 xs:h-auto xs:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-poppins font-semibold -ml-24 mr-4 text-lg xs:text-2xl text-black">
          Certificates upon completion
        </p>
      </div>

      <div className="flex xs:flex-row-reverse mt-8 ml-8 xs:ml-32">
        <img
          className="h-2.5 w-2.5 xs:h-auto xs:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-poppins font-semibold -ml-24 mr-4 text-lg xs:text-2xl text-black">
          Shout-outs on our Instagram handle
        </p>
      </div>

      <img
        className="invisible xs:visible xs:absolute xs:top-0 xs:left-0 xs:-mt-6 h-1 w-1 xs:h-auto xs:w-auto"
        src={Logo}
        alt="logo"
      />
    </div>
  </div>
);

export default Perks;