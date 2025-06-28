'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './ExpandableBoxZaitoon.module.css'

export default function ExpandableBox() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [boxStyle, setBoxStyle] = useState({})
  const ref = useRef(null)

  const expand = () => {
    const r = ref.current.getBoundingClientRect()
    setBoxStyle({
      position: 'fixed',
      top: r.top,
      left: r.left,
      width: r.width,
      height: r.height,
      transition: 'all 0.5s cubic-bezier(.4,0,.2,1)',
      zIndex: 50,
    })
    requestAnimationFrame(() => setBoxStyle({})) // animate to .boxOpen
    setOpen(true)
  }

  // after box opens, wait 1 s then navigate
  useEffect(() => {
    if (open) {
      const id = setTimeout(() => router.push('/Projects/Zaitoon'), 1000)
      return () => clearTimeout(id)
    }
  }, [open, router])

  return open ? (
    <div
      className={`${styles.box} ${styles.boxOpen}`}
      style={boxStyle}
    >
      Loading…
    </div>
  ) : (
    <div ref={ref} className={styles.box} onClick={expand}>
      Click to Expand
    </div>
  )
}
