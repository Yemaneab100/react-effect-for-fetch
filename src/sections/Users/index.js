import { useEffect, useState } from "react"
import Userlist from "./components/UsersList";

function UsersSection() {

  const [usersdata, setUsersData] =  useState(null)

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=35`)
      .then((res) => { return res.json() })
      .then((data) => {setUsersData(data.results)
                     
      });

}, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {usersdata && <Userlist usersdata = {usersdata}/>}
      </div>
    </section>
  )
}

export default UsersSection
