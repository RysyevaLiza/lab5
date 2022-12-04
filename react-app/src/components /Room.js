import React, {useState} from 'react';
import {useParams} from 'react-router';
import Card from "react-bootstrap/Card";

import axios from "axios";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";


const Room = () => {
    console.log(useParams())
    const {room_pk} = useParams();
    const [room, setRoom] = React.useState([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios(`http://127.0.0.1:8000/room/`)
                console.log(data)
                console.log(room_pk)

                setRoom(data)
            } catch (error) {
                console.log(error)
            }

            setLoading(false)
        }

        fetchData()
    }, [])


    return (
        <div>
            {loading && 'Загрузка...'}
            <Link to="/">Home</Link>/<Link to = {`/room/:id`}>Номера</Link>


            <div className=''>
                <div className='' style={{
                    display: 'flex', justifyContent: 'center',
                    overflow: 'auto'
                }}>
                    {room.map(el => (
                        <div key={el.id} className=''>
                            <Card style={{width: '18rem', margin: '15px'}}>
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>{el.category}</Card.Title>
                                    <Card.Text style={{textAlign: 'center'}}>{el.bed_type} </Card.Text>
                                    <Card.Text style={{textAlign: 'center'}}>{el.price} </Card.Text>
                                    <Button variant="outline-dark" style={{}}><Link to={`/order/${el.id}`} className="nav-link px-lg-1 link-dark">Купить </Link></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Room