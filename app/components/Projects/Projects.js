"use client"
import{useState}from"react"
import{useRouter}from"next/navigation"
import styles from"./projects.module.css"

const projects=[
  {id:"zaitoon",color:"red",route:"/Zaitoon"},
  {id:"olive",  color:"green",route:"/Olive"},
  {id:"spice",  color:"purple",route:"/Spice"},
  {id:"copper", color:"orange",route:"/Copper"},
  {id:"pearl",  color:"teal",route:"/Pearl"}
]

export default function Projects(){
  const router=useRouter()
  const[ov,setOv]=useState(null) // {rect,color,route,grow}

  const click=(e,p)=>{
    if(ov) return
    const r=e.currentTarget.getBoundingClientRect()
    setOv({rect:r,color:p.color,route:p.route})
    requestAnimationFrame(()=>setOv(o=>({...o,grow:true})))
  }
  const end=()=>ov?.route&&router.push(ov.route)

  return(
    <section id="projects" className="section" style={{background:"#F6F3F4"}}>
      <div className={styles.grid}>
        {projects.map(p=>(
          <div key={p.id}
               className={styles.box}
               style={{background:p.color}}
               onClick={e=>click(e,p)}/>
        ))}
      </div>

      {ov&&(
        <div className={styles.overlay}
             onTransitionEnd={end}
             style={{
               background:ov.color,
               top:ov.grow?0:ov.rect.top,
               left:ov.grow?0:ov.rect.left,
               width:ov.grow?"100vw":ov.rect.width,
               height:ov.grow?"100dvh":ov.rect.height
             }}/>
      )}
    </section>
  )
}
