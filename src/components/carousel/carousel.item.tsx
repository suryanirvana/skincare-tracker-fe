import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { CustomModal } from '../modal/modal';

import { SkincareData } from '../../types/skincare';

import './carousel.item.css'

export const CustomCard = (skincareData:SkincareData) => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState()

  const handleClickOpen = (data) => {
    setData(data)
    setOpen(true)
  }

  const handleClickClose = () => {
    setOpen(false)
  }

  return (
      <Box mb={5} mr={0} p={0}>
        <Card className="card-outer"
          sx={{
            borderRadius: '20px',
            marginRight: '100px',
            width: '200px',
            height: '200px',
            "&:hover": { transform: "scale(1.2)"},
            transition: "transform 0.2s",
            backgroundColor: "#F6F6F6",
            boxShadow: "4px 4px 5px #BABABA"
          }}
        >
          <CardActionArea onClick={() => handleClickOpen(skincareData)}>
            <CardContent className="card-content">
              <Typography variant="h5" fontWeight={700}>
                Step {skincareData.skincareStep}
              </Typography>
              <Typography variant="h5" align="center" sx={{wordWrap: "break-word"}}>
                {skincareData.skincareType}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <CustomModal
          open={open}
          onClose={handleClickClose}
          data={skincareData}
        />
      </Box>
  );
}