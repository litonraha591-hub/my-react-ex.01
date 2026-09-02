// import loadImages from './images/keyboard.jpg'
import './App.css'
import ProductCard from './ProductCard'
import UserCard from './UserCard'
import WelcomeCard from './WelcomeCard'
import Count from './Count'
import DecreaseCount from './DecreaseCount'
import IncreaseCounter from './IncreaseCounter'
import IncreaseDecrease from './IncreaseDecrease'
import ShowHide from './ShowHide'
import NewShowHide from './NewShowHide'
import Photos from './Photos'
import { Suspense } from 'react'

const photoDataPromise = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json();
  return data;
}

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
       {/* <ShowHide></ShowHide> */}
        <NewShowHide></NewShowHide>

       <Suspense fallback={<p>Loading Photos.....</p>}>

         <Photos photoDataPromise = {photoDataPromise()}></Photos>    
       </Suspense>
        
        
        </>
  )
}

export default App
