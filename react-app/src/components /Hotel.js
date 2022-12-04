import axios from "axios";
import React, {useEffect} from "react";
import {Button, Container, Col, Row, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadHotels, setLoading} from "./reducerSlice";

const Hotel = () => {
    const hotel = useSelector(state => state.toolkit.hotel); // состояния
    const loading = useSelector(state => state.toolkit.isLoading); // состояния
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get("http://127.0.0.1:8000/pages/");
                console.log(data);

                dispatch(loadHotels(data));
            } catch (error) {
                console.log(error);
            }

            dispatch(setLoading(false));
        };

        fetchData();
    }, []);

// const Hotel = () => {
//     const [hotel, setHotel] = React.useState([])
//     const [loading, setLoading] = useState(true)
//     React.useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const {data} = await axios.get(
//                     'http://127.0.0.1:8000/pages/'
//                 )
//                 console.log(data)
//
//                 setHotel(data)
//             } catch (error) {
//                 console.log(error)
//             }
//
//             setLoading(false)
//         }
//
//         fetchData()
//     }, [])

    return (
        <div>
            {loading && 'Загрузка...'}
            <Link to="/">Home</Link>

            <div className=''>
                <div className='' style={{
                    display: 'flex',
                    overflow: 'auto'
                }}>

                    {hotel.map(el => (
                        <div key={el.id} className=''>
                            <Card style={{width: '18rem', margin: '10px'}}>
                                <img src={`${el.image}`}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center', fontSize: '20px'}}>{el.name}</Card.Title>
                                    <Card.Text style={{textAlign: 'center'}}>{el.country} </Card.Text>
                                    <Button variant="outline-dark"><Link to={`/room/${el.id}`} className="nav-link px-lg-1 link-dark">Номера</Link></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hotel