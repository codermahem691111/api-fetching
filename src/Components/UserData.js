import React from 'react'

const UserData = ({users}) => {
  return (
    <>
    
       {
         users.map((curUser)=>{

          const{id,name, mail}=curUser;
          return (
           <tr>

           <td>{id}</td>
           <td>{name}</td>
           <td>{mail}</td>

           </tr>



                
          );



         })

              

      }
    
        
    
    
    
    </>
  )
}

export default UserData