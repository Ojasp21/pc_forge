import background1 from '../../images/pc.png'
import background2 from '../../images/pc1.png'
import background3 from '../../images/pc2.png'
import background4 from '../../images/pc3.png'
import Cards from "./cards"
export default function Allcards(){
    return(
        <>
  <Cards backgroundImage={background1} title={"Gaming"}/>
  <Cards backgroundImage={background2} title={'Custom'}/>
  <Cards backgroundImage={background3} title={"Professional"}/>
  <Cards backgroundImage={background4} title={"Performance"}/>
        </>
    )
    
}