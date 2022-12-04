import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "./Form";
import {Link} from "react-router-dom";


const Order = () => {
    const [seats, setSeats] = React.useState([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(
                    'http://127.0.0.1:8000/api/v1/seats/'
                )
                console.log(data)

                setSeats(data)
            } catch (error) {
                console.log(error)
            }

            setLoading(false)
        }

        fetchData()
    }, [])


     return (
        <div style={{display: 'block'}}>
            {loading && 'Загрузка...'}



            <div style={{
                display: 'flex',
                overflow: 'auto'
            }}>
                <p>Ввести данные:</p></div>

            <Form/>
        </div>
    )
}

export default Order