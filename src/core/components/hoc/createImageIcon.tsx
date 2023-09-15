import { CreateMUIStyled, Theme  } from '@mui/material';
import { ImgHTMLAttributes } from 'react';

type Props = {
  src: string;
  size?: number;
  pl?: number;
  pt?: number;
  mt?: number;
  ml?: number;
  rt?: number;
  rd?: number;
  alignSelf?: string;
  bgcolor?: string;
  width?: number | string;
  height?: number | string;

} & ImgHTMLAttributes<HTMLImageElement>


export const createImageIcon = (styled: CreateMUIStyled<Theme>): React.ComponentType<Props> => {

  return styled('img')<Props>(
    ({
      size = 24,
      pl = 0,
      pt = 0,
      mt = 0,
      ml = 0,
      rt = 0,
      rd = 0,
      bgcolor = 'transparent',
      alignSelf = 'center',
      width = 24,
      height = 24,
    }) => ({
      width: width ?? size,
      height: height ?? size,
      alignSelf: alignSelf,
      marginTop: mt,
      marginLeft: ml,
      paddingLeft: pl,
      paddingTop: pt,
      borderRadius: rd,
      backgroundColor: bgcolor,
      transform: `rotate(${rt}deg)`,
    })
  )  as React.ComponentType<Props>;
} 
