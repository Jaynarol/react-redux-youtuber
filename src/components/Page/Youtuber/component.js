import React from 'react'
import { Card, CardBlock, CardImg, CardImgOverlay, CardSubtitle, CardText, CardTitle, Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap'

const PageYoutuber = () => (
  <Row noGutters style={{ marginTop: '40px' }}>

    <Col xs="12" style={{ marginBottom: '30px' }}>
      <InputGroup>
        <InputGroupAddon>&#9658;</InputGroupAddon>
        <Input placeholder="search video here..." />
      </InputGroup>
    </Col>

    <Col xs="12" sm="9" >
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card content.</CardText>
        </CardBlock>
      </Card>
    </Col>

    <Col xs="12" sm="3" >
      { [...Array(4)].map((_, index) => (
        <Col key={String(index)} style={{ marginBottom: '20px' }}>
          <Card style={{ cursor: 'pointer' }}>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardImgOverlay>
              <CardSubtitle>Card subtitle</CardSubtitle>
            </CardImgOverlay>
          </Card>
        </Col>
      ))}
    </Col>

  </Row>
)

export default PageYoutuber
