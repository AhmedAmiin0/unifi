import { Box, Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Wheather() {
    const [location, setLocation] = useState(null);
    const [currentWheather, setCurrentWheater] = useState(null)
    const navigate = useNavigate();
    async function getWeatherData() {
        const url = `${process.env.REACT_APP_API_ENDPOINT}weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        try {
            const res = await fetch(url)
                .then(response => response.json())
            setCurrentWheater(res)


        } catch (error) {
            console.error(error);
        }

    }

    const successCallback = (position) => {
        setLocation({
            longitude: position.coords.longitude,
            latitude: position.coords.longitude
        })
    };


    const errorCallback = (error) => {
        console.log(error);
    };
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }, [])
    useEffect(() => {
        if (location !== null) getWeatherData()
    }, [location])
    return (
        <Box width={'100%'}>
            <Typography variant='h2'>
                Wheather 🙌
            </Typography>
            {currentWheather === null ? <>
                <Typography>
                    Wait Iam Fetchng 👀
                </Typography> </> : <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    my={2}
                >
                <Typography>
                    Your Current Wheater degrees are   {currentWheather?.main?.temp} Current Wheather is  {currentWheather?.weather[0].main}
                </Typography>
                <Button onClick={() => navigate('/wheather-details')}>
                    Show More
                </Button>
            </Box>
            }
        </Box>
    )
}

export default Wheather