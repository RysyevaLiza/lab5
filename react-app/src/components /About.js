import React, {useState} from 'react';
import Card from "react-bootstrap/Card";

import axios from "axios";
import {Link} from "react-router-dom";



const Show = () => {
    const [show, setShow] = React.useState([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(
                    'http://127.0.0.1:8000/show/'
                )
                console.log(data)

                setShow(data)
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
            <Link to="/">Home</Link>/<Link to = {`/about`}>Отделения</Link>


            <div className=''>
                <div className=''>
                    {show.map(el => (
                        <div key={el.id} className=''>
                            <Card style={{width: '18rem', margin: '15px'}}>
                                <Card.Body>
                                    <Card.Text style={{textAlign: 'center'}}>{el.full_name} </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Show