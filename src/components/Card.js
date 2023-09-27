import "./Card.css"

function Card(props)
{
    const {flag, data} = props;
        
        return (
            <div className={flag ? "card" : "card-img-only"}>
                {flag && <h2>{data.title}</h2>}
                {flag && <p>{data.date}</p>}
                {flag && <p>{data.explanation}</p>}
                {<img src={data.url} alt="astronomy.png"></img>}
                {flag && <p>©{data.copyright}</p>}
            </div>
        )
}

export default Card;