import React from "react";

export const LogoLetra = ({
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src="/Logoletra_n.png" alt="Logo" {...props} />;
};

export const Logo = ({
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src="/Logo.png" alt="Logo" {...props} />;
};

export const Letra = ({
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src="/Letra_n.png" alt="Logo" {...props} />;
};
