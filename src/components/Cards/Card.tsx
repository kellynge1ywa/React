
import styles from './Cards.module.css'

interface Props{
    productName:string;
    imgURL:string;
    price:string;
    isBrandNew:boolean;
}

function Card(prop:Props){
    return(
        <div className={styles.card}>
        <div className={styles.sub_card}>
            <img className={styles.card_img} src={prop.imgURL} alt="profile image" />
            <h2>{prop.productName}</h2>
            <span>{prop.price}</span> <br/>
            <span>{prop.isBrandNew ?"New" :"Refurbished"}</span>
        </div>

        </div>
    );

}
export default Card;