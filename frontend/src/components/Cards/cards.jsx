import './cards.css'


export default function Cards({backgroundImage, title}){
   return(
   <div id='card'>
    <section className='Image' style={{backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover"}}> </section>
    <h3 id='type'>{title}</h3>
    </div>
   )
   
}
