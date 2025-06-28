'use client'

import { useState, useEffect } from 'react'
import styles from './Zaitoon.module.css'

export default function ZaitoonPage() {
  const [small, setSmall] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setSmall(true), 40)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className={`${styles.box} ${small ? styles.small : ''}`}>
      Zaitoon
    </div>
  )
}
