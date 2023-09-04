import { useState } from 'react'
import ProductList from './Components/ProductList'
import './App.css'
import ListItems from './Components/ListItems'
import ConditionalRenedering from './Components/ConditionalRenedering'
import PostList from './Components/PostList'
import ScoreList from './Components/ScoreList'



const tasks = [
  { id: 1, title: 'Complete assignment', completed: true },
  { id: 2, title: 'Review project', completed: false },
  { id: 3, title: 'Submit report', completed: false },
];

const products = [
  { id: 1, name: 'Laptop', description: 'Powerful laptop for work and gaming', price: 999.99 },
  { id: 2, name: 'Smartphone', description: 'High-performance smartphone', price: 599.99 },
  // Add more products here
];


function App() {
  return (
    <div>
     <h1> Hello React </h1>
    <ListItems></ListItems>

    <h3>Conditional Rendering</h3>
    <ConditionalRenedering tasks={tasks}></ConditionalRenedering>

    <ProductList products={products}></ProductList>


    <PostList></PostList>


    <ScoreList></ScoreList>
     
    </div>
  )
}

export default App
