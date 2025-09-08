import React from "react";

export const LogoLetra = ({
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src="/Logoletra_c_f_t.png" alt="Logo" {...props} />;
};

export const Logo = ({
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src="/Logo_c_f_t.png" alt="Logo" {...props} />;
};

export const Letra = ({
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src="/Letra_c_f_t.png" alt="Logo" {...props} />;
};
