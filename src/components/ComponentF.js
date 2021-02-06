import React, { useContext } from 'react'
import { LanguageContext, UserContext } from '../App'

function ComponentF() {
  const user2 = useContext(UserContext);
  const language2 = useContext(LanguageContext);
  // const user = (
  //   <UserContext.Consumer>
  //     {
  //       user => {
  //         return `${user.name} ${user.age}歳`
  //       }
  //     }
  //   </UserContext.Consumer>
  // );
  // const language = (
  //   <LanguageContext.Consumer>
  //     {
  //       language => {
  //         return language
  //       }
  //     }
  //   </LanguageContext.Consumer>
  // );

  return (
    <div>
      <h1>ComponentF</h1>
      {/* <p>{user}: {language}</p> */}
      <p>{user2.name}</p>
      <p>{user2.age}</p>
      <p>{JSON.stringify(user2)}</p>
      <p>{language2}</p>
    </div>
  )
}

export default ComponentF
