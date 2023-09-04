import React from 'react'






const ConditionalRenedering = ({tasks}) => {
  return (
    <ul>

        {tasks.map((task)=> (<li key={task.id} className={task.completed ? 'completed' : 'pending'}> {task.title}</li>)

        )} 
    </ul>
  )
}

export default ConditionalRenedering
