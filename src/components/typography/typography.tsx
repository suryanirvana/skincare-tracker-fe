import Typography from '@mui/material/Typography';
import Clock from 'react-live-clock';

import './typography.css'

interface Time {
    dayOrNight: string
}

export const CustomTypography = ({dayOrNight}:Time) => {
    return(
        <div className="container">
            <Typography variant="h4">
                HI THERE!
            </Typography>
            <Typography variant="h5">
                today is
            </Typography>
            <Typography variant="h2" marginTop={2} fontWeight={'bold'} color="#4EABD2">
                <Clock format={'dddd, MMMM Do YYYY h:mm:ss'} ticking={true} timezone={'Australia/Queensland'} />
            </Typography>
            <Typography variant="h5" color="#4CA735">
                time for your {dayOrNight} skincare routine!
            </Typography>
        </div>
    )
}
