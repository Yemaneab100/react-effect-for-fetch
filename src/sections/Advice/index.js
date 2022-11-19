import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlips from "./components/FavouriteSlipsList"

function AdviceSection() {
  //https://api.adviceslip.com/advice

  const [advice, setAdvice] =  useState(null)

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`)
      .then((res) => { return res.json()})
      .then((advice) => {
        setAdvice(advice.slip);
        console.log(advice.slip)
      }
      );
}, []);

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        { advice && <AdviceSlip advice = {advice} />}
      </section>
      <section className="favourtite-slips-list"></section>
    </section>
  )
}

export default AdviceSection
