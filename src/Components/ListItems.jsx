import React from 'react'


const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Peach' },
    { id: 3, name: 'Pear' },
  ];

const ListItems = (item) => {
  return (
    <div>
        <h3>List Items</h3>
        <ul>
        {items.map((item)=>
            <li key={item.id}>{item.name}</li>    
                
        )}
    </ul>
    </div>
      
  )
}




export default ListItems
