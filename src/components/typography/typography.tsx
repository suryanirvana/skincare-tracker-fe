import Clock from 'react-live-clock';

import Typography from '@mui/material/Typography';

import { Time } from '../../types/time';

import './typography.css'

export const CustomTypography = ({dayOrNight}:Time) => {
    return(
        <div className="container">
            <Typography variant="h4">
                HI THERE!
            </Typography>
            <Typography variant="h5">
                today is Wendy you got me feeling like a psycho psycho
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
