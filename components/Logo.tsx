import React from 'react'

const Logo = ({...props} : React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img src="/logo_n_f_t_2.png" alt="Logo" {...props} />
  )
}

export default Logo