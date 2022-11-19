const Userlist = ({usersdata}) => {
    return (  
        <ul>
            {
            usersdata.map((user, index) => {
                return (
                    <li key= {index}>
                        <img src= {user.picture.large}/> 
                        <p> <b> Full Name:</b> {user.name.title} {user.name.first} {user.name.last}</p>
                        <p> <b>Email:</b>{user.email}</p>
                    </li>
                );
                })
            }
        </ul>
            
        
    );
}
 
export default Userlist;