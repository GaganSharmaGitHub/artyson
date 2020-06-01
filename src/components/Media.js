import React from 'react'
import {Card,Button} from 'react-bootstrap'
export default function Media(p) {
    return (
        <div>
        <h1>Artysan on Media</h1>
<div className='goodatcardcont'>
<Card style={{ width: '18rem' }} className={p.themedark?"bg-dark text-white":''}>
<iframe title='ok' src="https://www.youtube.com/embed/gOjB1PZfOoM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<Card.Body>
  <Card.Title>Artyson on NDTV</Card.Title>
  <Card.Text>
  NDTV
  </Card.Text>
  <Button variant="primary">See more</Button>
</Card.Body>
</Card>
<Card style={{ width: '18rem' }} className={p.themedark?"bg-dark text-white":''}>
<iframe title='ok' src="https://www.youtube.com/embed/gOjB1PZfOoM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<Card.Body>
  <Card.Title>Artyson on NDTV</Card.Title>
  <Card.Text>
  Artysan
  </Card.Text>
  <Button variant="primary">See more</Button>
</Card.Body>
</Card>
<Card style={{ width: '18rem' }} className={p.themedark?"bg-dark text-white":''}>
<iframe title='ok' src="https://www.youtube.com/embed/95OfEenbne8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<Card.Body>
  <Card.Title>Artyson on NDTV</Card.Title>
  <Card.Text>
  Artysan

  </Card.Text>
  <Button variant="primary">See more</Button>
</Card.Body>
</Card>
<Card style={{ width: '18rem' }} className={p.themedark?"bg-dark text-white":''}>
<iframe title='ok' src="https://www.youtube.com/embed/KimhzpJvRzQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<Card.Body>
  <Card.Title>QnA</Card.Title>
  <Card.Text>
  Artysan

  </Card.Text>
  <Button variant="primary">See more</Button>
</Card.Body>
</Card>

</div>
        </div>

    )
}
