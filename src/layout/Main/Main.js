
import "./Main.css"
import Card from "../../components/Card.js"
import { useEffect, useState } from "react";
import axios from "axios";

const urlApodApi = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

function Main()
{
    const [apod, setApod]= useState(null);

    useEffect( ()=>{
        axios.get( urlApodApi )
        .then( response => {
            setApod(response.data);
        })
        .catch( error=> {
            console.error(error.response.message)
        })
        .finally(()=>{
            console.log("Req APOD end")
        })
    }, []);

    return (
        <section className="sec-main">
            {
                apod ? <Card flag={true} data={apod}/> : <h2>Yükleniyor...</h2>
            }
        </section>
    )
}

export default Main;