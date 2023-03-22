import "./index.css";
import Button from "../Button/Button";
import HeartButton from "../HeartButton/HeartButton";

function Card({title, description, price, imageSrc,hasSale, canBuy, oldPrise}) {
    if (canBuy && hasSale) {
        return (<div className="product">
            <img src={imageSrc} alt="" />
            <h2 className="mainText">{title}</h2>
            <p className="description">{description}</p>
            <p className="price">{price}  <span className="oldPrise">{oldPrise}</span></p>

            <div className="conteinerButton">
                <Button isLight="blackBtn">Learn More</Button>
                <Button isLight="whiteBtn">Can buy</Button>
            </div>
            <div className="conteinerSaleHeart">
                <div className="sale">
                        <p className="selaText">sale</p>
                </div>
                <div className="heart">
                    <HeartButton like='heartBtn'></HeartButton>
                </div>
            </div>
        </div>
        )
    } else {
        return (<div className="product">
            <img src={imageSrc} alt="" />
            <h2 className="mainText">{title}</h2>
            <p className="description">{description}</p>
            <p className="price">{price}</p>

            <div className="conteinerButton">
                <Button isLight="blackBtn">Learn More</Button>
            </div>
            <div className="conteinerSaleHeart">
                <div className="heart">
                    <HeartButton like='heartBtn'></HeartButton>
                </div>
            </div>
        </div>
        )
    }
}

export default Card;