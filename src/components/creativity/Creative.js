import React from 'react'
import {Button} from 'react-bootstrap'
import './creative.scss'
export default function Creative(p) {
    return (
        <div className={p.themedark?'creativeRow':'creativeRow light'}>
            <div className='textincreative'>
            Artysan is <br></br><span>
            #allAboutCreativity
            </span>
            <br></br>
            <Button size="lg">View Gallery</Button>

            <br></br>
            </div>
           <div className={p.themedark?'dooranim':'dooranim light'}>
           <div class='door'>
           <div class='face'>
             <div class='right'></div>
           </div>
         </div>
         <div class='door'>
           <div class='face'>
             <div class='right'></div>
           </div>
         </div>
         <div class='door'>
           <div class='face'>
             <div class='right'></div>
           </div>
         </div>
         <div class='door'>
           <div class='face'>
             <div class='right'></div>
           </div>
         </div>
         <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display:"none"}}>
         <defs>
         <filter id="squiggly-0">
         <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="0"/>
         <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="2" />
         </filter>
         <filter id="squiggly-1">
         <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="1"/>
         <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
         </filter>
         <filter id="squiggly-2">
         <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="2"/>
         <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
         </filter>
         <filter id="squiggly-3">
         <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="3"/>
         <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
         </filter>
         <filter id="squiggly-4">
         <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="4"/>
         <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
         </filter>
         </defs>
         </svg>
         
           </div>
        </div>
    )
}
