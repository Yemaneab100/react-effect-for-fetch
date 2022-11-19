import { useEffect, useState } from "react"
import ArtList from "./components/ArtList";

function ArtsSection() {
const [artsdata, setArtData] =  useState(null)

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks?page=2&limit=35`)
      .then((res) => { return res.json()})
      .then((artData) => {
        setArtData(artData.data)
      }
      );
}, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        { artsdata && <ArtList artsdata = {artsdata} />}
      </div>

    </section>
  )
}

export default ArtsSection
