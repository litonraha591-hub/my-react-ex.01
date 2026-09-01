// import loadImages from './images/keyboard.jpg'
import './App.css'
import ProductCard from './ProductCard'
import UserCard from './UserCard'
import WelcomeCard from './WelcomeCard'
import Count from './Count'
import DecreaseCount from './DecreaseCount'
import IncreaseCounter from './IncreaseCounter'
import IncreaseDecrease from './IncreaseDecrease'
function App() {
 

  return (
    <>
  {/* <WelcomeCard  name = "liton" language="react" ></WelcomeCard> */}
{/* <UserCard name = "Liton" age="25" profession="Web Developer"></UserCard>
<UserCard name = "Raha" age="24" profession="UI/UX Designer"></UserCard>
<UserCard name = "Kumar" age="25" profession="Java Developer"></UserCard> */}
      {/* Premium Product (> 1000) & In Stock */}
      {/* <ProductCard
        name="Mechanical Keyboard"
        price={1500}
        category="Electronics"
        image="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80"
        inStock={true}
      /> */}

      {/* Regular Product (<= 1000) & Out of Stock */}
      {/* <ProductCard
        name="Gaming Mouse"
        price={800}
        category="Electronics"
        image="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80"
        inStock={false}
      /> */}
  

       {/* <Count></Count> */}
        <DecreaseCount></DecreaseCount>
        <IncreaseCounter></IncreaseCounter>
        <IncreaseDecrease></IncreaseDecrease>

    </>
  )
}

export default App
