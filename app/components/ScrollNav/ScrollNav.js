"use client"
import{useState,useEffect}from"react"
import{RiHomeLine}from"react-icons/ri"
import{FaYoutube,FaInstagram}from"react-icons/fa"
import{IoAppsOutline}from"react-icons/io5"
import{LuGalleryVerticalEnd}from"react-icons/lu"
import{HiOutlineDocument}from"react-icons/hi"
import styles from"./scrollnav.module.css"
const items=[
  {id:"HomeDiv",icon:<RiHomeLine/>,tip:"Home"},
  {id:"projects",icon:<IoAppsOutline/>,tip:"Projects"},
  {id:"youtube",icon:<FaYoutube/>,tip:"YouTube"},
  {id:"instagram",icon:<FaInstagram/>,tip:"Instagram"},
  {id:"lightboxs",icon:<LuGalleryVerticalEnd/>,tip:"Lightboxs"},
  {id:"catalogue",icon:<HiOutlineDocument/>,tip:"Catalogue"}
]
export default function ScrollNav(){
  const[active,setActive]=useState("home")
  useEffect(()=>{
    const root=document.querySelector(".container")
    const io=new IntersectionObserver(
      e=>e.forEach(v=>v.isIntersecting&&setActive(v.target.id)),
      {root,threshold:.55}
    )
    items.forEach(i=>io.observe(document.getElementById(i.id)))
    return()=>io.disconnect()
  },[])
  return(
    <div className={styles.nav}>
      {items.map(i=>(
        <a key={i.id}href={`#${i.id}`}
           className={`${styles.icon}${active===i.id?" "+styles.active:""}`}
        >
          {i.icon}
        </a>
      ))}
    </div>
  )
}
