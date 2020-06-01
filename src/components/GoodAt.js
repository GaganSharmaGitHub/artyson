import React from 'react'
import {Card, Button} from 'react-bootstrap'
export default function GoodAt(p) {
    let thme=p.themedark
    return (
        <div>
        <h1>Our Superpowers</h1>
<div className='goodatcardcont'>
<Card style={{ width: '18rem' }} className={thme?"bg-dark text-white":''}>
<Card.Img variant="top" src="https://secureservercdn.net/160.153.137.167/mhq.97f.myftpupload.com/wp-content/uploads/2018/08/cropped-FB_IMG_1518667796937-1.jpg" />
<Card.Body>
  <Card.Title>Wall Solutions</Card.Title>
  <Card.Text>
  Murals: A large picture painted or affixed directly on a wall or ceiling. • Graffiti: Drawings written, spray-painted, or sketched on a sidewalk or wall of a building or public place • Wall Art: Any type of art on walls.
  </Card.Text>
  <Button variant="primary">See more</Button>
</Card.Body>
</Card>
<Card style={{ width: '18rem' }} className={thme?"bg-dark text-white":''}>
<Card.Img variant="top" src="https://i2.wp.com/artysan.co.in/wp-content/uploads/2018/07/cropped-IMG-20170125-WA0019-2.jpg?w=3840&ssl=1" />
<Card.Body>
  <Card.Title>Art Solutions</Card.Title>
  <Card.Text>
  • On-order Canvases: You can order canvases to be made according to your liking, given the time-limit. • Bookings and sessions: for public and private painting sessions • Artistic queries: We cater to art-related queries raised •
  </Card.Text>
  <Button variant="primary">See more</Button>
</Card.Body>
</Card>

</div>
        </div>
    )
}
