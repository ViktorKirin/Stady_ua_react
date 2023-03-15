import "./index.css";


function Card({title, description, price, imageSrc}) {
    return<>
        <div className="product">
            <img src={imageSrc} alt="" />
            <h2 className="mainText">{title}</h2>
            <p className="description">{description}</p>
            <p className="price">{price}</p>
        </div>


    </>
}

export default Card;