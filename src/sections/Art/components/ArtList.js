const ArtList = ({artsdata}) => {
    return ( 
//         - An image of the artwork
// - The title of the artwork
// - The artist's name
// - A list of subjects from `subject_titles`
        <ul>
            {
            artsdata.map((art, index) => {
                return (
                    <li key= {index}>
                       <img src= {art.thumbnail.lqip} height = {50} width = {50}  />  
                       <b>{art.title}  </b> 
                       <p> <b> Artist Name: </b>{art.artist_title}</p>    
                    </li>
                );
                })
            }
        </ul>
     );
}
 
export default ArtList;