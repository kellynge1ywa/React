import   LenovoImg from '../../assets/lenovo_laptop.jpg'
import   HpImg from '../../assets/hp_laptop.png'
import   SamsungImg from '../../assets/samsung_laptop.jpeg'
import Card from '../Cards/Card'
import styles from './CardList.module.css'

interface Props{}

const CardList = (props: Props) => {
  return (
    <>
    <div className={styles.card}>
    <Card productName='Lenovo' price='Ksh. 30,000' imgURL={LenovoImg} isBrandNew={false}/>
    <Card productName='Samsung' price='Ksh.50,000' imgURL={SamsungImg} isBrandNew={true}/>
    <Card productName='Hp Laptop' price='Ksh. 45,000' imgURL={HpImg} isBrandNew={false}/>

    </div>
    
    </>
  )
}

export default CardList