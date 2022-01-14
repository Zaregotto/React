import {useEffect, useState} from "react";


export default function Flight() {


    const [flight, setFlight] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(flights => {
                setFlight(flights.filter(flight => flight.launch_year !== '2020'));


            });


    }, [])

    return (
        <div className={'flight'}>
            {
                flight.map(value => <div className={'flightList'} key={value.flight_number}>
                    <div>
                        <h3>{value.mission_name}</h3> <h4>{value.launch_year}</h4>
                    </div>
                    <div>
                        <img src={value.links.mission_patch} alt={'flight'}/>
                    </div>
                </div>)
            }
        </div>
    )
}