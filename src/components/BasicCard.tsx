import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const BasicCard: React.FC<BasicCardProps> = (props) => {
  return (
    <Card>
      <CardMedia image={props.imgSrc} sx={{ height: props.imgHeight || 175 }} />
      <CardContent>
        <Typography variant='h5'>{props.header}</Typography>
      </CardContent>
    </Card>
  );
};

export interface BasicCardProps {
  imgSrc: string;
  header: string;
  desc?: string;
  imgHeight?: number;
}

export default BasicCard;
