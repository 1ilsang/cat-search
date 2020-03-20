import { CSSProperties } from 'react';

export interface IWrapDiv {
  style?: CSSProperties & {
    width?: string;
    height?: string;
  };
}
