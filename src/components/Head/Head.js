import React from 'react'
import './head.scss'
export default function Head(p) {
    return (
        <section className="header-1" id="home">
        <div className={p.themedark?"banner-text":"banner-text light"}>
           <div className="banner">
              <h1>
                 Welcome to <span>ARTYSAN</span> <br />
                 where art meets <span>YOU</span>
              </h1>
           </div>
        </div>
        <div className={p.themedark?"animation-area":"animation-area light"}>
           <ul className="box-area">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
           </ul>
        </div>
     </section>
)
}
