import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

function WheatherDetails() {
    const [location, setLocation] = useState(null);
    const [daysWheather, setDaysWheather] = useState([])
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
    const getFiveDaysWheatherData = async () => {
        const url = `${process.env.REACT_APP_API_ENDPOINT}forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_API_KEY}`
        try {
            const res = await fetch(url)
                .then(response => response.json())
            setDaysWheather(res.list.slice(0, 5))

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        if (location !== null) getFiveDaysWheatherData()
    }, [location])

    return <Container>
        {daysWheather.map((day, index) => {
            return <Box display='flex'
                justifyContent={'space-between'} alignItems={'center'}
                key={index}
                p={4}
                sx={{
                    p:4,
                    background:'#c1c1c126',
                    my:2
                }}
            >
                <Typography>
                    Day {index + 1}
                </Typography>
                <Typography>
                    {day?.weather[0].main}
                </Typography>
            </Box>
        })}
    </Container>
}

export default WheatherDetails