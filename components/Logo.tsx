import React from 'react'

const Logo = ({...props} : React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img src="/Logoletra_c_f_t.png" alt="Logo" {...props} />
  )
}

export default Logo