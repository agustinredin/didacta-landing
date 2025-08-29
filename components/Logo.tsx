import React from "react";

const Logo = ({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src="/Logoletra_c_f_t_NAV.png" alt="Logo" {...props} />;
};

export default Logo;
