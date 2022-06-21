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

export const BasicCard = ({skincareStep, skincareName, skincareType, skincareBrand}:SkincareData) => {
  return (
      <Box mt={5} mb={5} mr={0} p={0}>
        <Card sx={{borderRadius: '20px', marginRight: '10px', width: '200px', height: '200px'}}>
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