import "./index.css";


function Button({children,isLight}) {
// console.log(isLight)

        return (
            <button className={isLight}>{children}</button>
        )

}

export default Button;