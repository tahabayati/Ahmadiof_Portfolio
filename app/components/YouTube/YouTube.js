"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { LuGalleryVerticalEnd } from "react-icons/lu"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import styles from "./youtube.module.css"
import Youtube from "../../../public/Youtube/201.webp"

export default function YouTube() {
  const slides = [
    "https://picsum.photos/600/400?1",
    "https://picsum.photos/600/400?2",
    "https://picsum.photos/600/400?3",
    "https://picsum.photos/600/400?4"
  ]

  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)
  const [imgLoading, setImgLoading] = useState(true)
  const total = slides.length
  const src = slides[idx]

  const next = () => !imgLoading && setIdx((idx + 1) % total)
  const prev = () => !imgLoading && setIdx((idx - 1 + total) % total)

  useEffect(() => {
    if (!open) return
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [open, idx, imgLoading])

  return (
    <section id="youtube" className={`section ${styles.section}`}>
      <Image src={Youtube} alt="YouTube" className={styles.image} />
      <div className={styles.galleryBtnWrapper}>
        <button className={styles.galleryBtn} onClick={() => {
          setImgLoading(true)
          setOpen(true)
        }}>
          <LuGalleryVerticalEnd />
          <span>نمایش بیشتر</span>
        </button>
      </div>

      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
            <div style={{ position: "relative", width: "70%", height: "80%" }}>
              {imgLoading && <div className={styles.skeleton}></div>}
              <Image
                src={src}
                alt=""
                className={`${styles.slide} ${!imgLoading ? styles.loaded : ""}`}
                fill
                style={{ objectFit: "cover" }}
                onLoad={() => setImgLoading(false)}
                onLoadingComplete={() => setImgLoading(false)}
              />
            </div>
         
            <button className={styles.close} onClick={() => setOpen(false)}><IoClose/></button>
            <button className={styles.left} onClick={prev} disabled={imgLoading}><IoIosArrowBack/></button>
            <button className={styles.right} onClick={next} disabled={imgLoading}><IoIosArrowForward/></button>
            <div className={styles.counter}>{`${total} / ${idx + 1}`}</div>
          </div>
        </div>
      )}
    </section>
  )
}
