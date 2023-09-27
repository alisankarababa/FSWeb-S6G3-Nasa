import "./Gallery.css"

import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";


const urlNasaImgs = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10";
function Gallery()
{
    const [nasaImgs, setNasaImgs] = useState([]);

    useEffect( ()=>{
        axios.get(urlNasaImgs)
        .then( response => {
            setNasaImgs(response.data);
        })
        .catch( error=> {
            console.error(error.response.message);
        })
        .finally(()=>{
            console.log("Req urlNasaImgs end");
        })
    }, []);

    return (
        <section className="sec-gallery">
        {
            nasaImgs.map((img, idx) => <Card key={idx} flag={false} data={img}/>)
        }
        </section>
    )
}

export default Gallery;