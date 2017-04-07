/* eslint-disable react/prop-types,jsx-a11y/href-no-hash */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Col, Container, Row } from 'reactstrap'
import PageYoutuber from '../component'

const props = {}

storiesOf('Page -> Youtuber', module)
  .addDecorator(story => <Container><Row><Col>{story()}</Col></Row></Container>)
  .addWithInfo('default', 'form when first loaded', () => (
    <PageYoutuber {...props} />
  ))
