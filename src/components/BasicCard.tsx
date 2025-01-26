import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  SxProps,
  Theme,
} from '@mui/material';

const BasicCard: React.FC<BasicCardProps> = (props) => {
  return (
    <Card sx={props.sx}>
      <CardMedia image={props.imgSrc} sx={{ height: props.imgHeight || 175 }} />
      <CardContent>
        <Typography variant='h5'>{props.header}</Typography>
        <Typography variant='body2'>{props.desc}</Typography>
      </CardContent>
    </Card>
  );
};

export interface BasicCardProps {
  imgSrc: string;
  header: string;
  desc?: string;
  imgHeight?: number;
  sx?: SxProps<Theme>;
}

export default BasicCard;
