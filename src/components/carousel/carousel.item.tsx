import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
 
export interface SkincareData {
  skincareStep: number
  skincareName: string
  skincareType: string
  skincareBrand: string
}

// onClick change state to open modal to true, kirim data ke modal

export const CustomCard = ({skincareStep, skincareName, skincareType, skincareBrand}:SkincareData) => {
  return (
      <Box mb={5} mr={0} p={0}>
        <Card 
          sx={{
            borderRadius: '20px',
            marginRight: '100px',
            width: '200px',
            height: '200px',
            "&:hover": { transform: "scale(1.2)"},
            transition: "transform 0.2s"
          }}
        >
          <CardActionArea>
            <CardContent sx={{
              height: '200px',
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center'}}
            >
              <Typography variant="h5" fontWeight={700}>
                Step {skincareStep}
              </Typography>
              <Typography variant="h5" align="center" sx={{wordWrap: "break-word"}}>
                {skincareType}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
  );
}