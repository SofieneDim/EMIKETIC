import React from 'react'

import "./Card.scss"
import { Card } from 'semantic-ui-react'

import cardsSize from './constants/cardsSize'

const CardExampleCard = props =>
    <Card
        className="card"
        style={{
            height: `${cardsSize.height}px`,
            width: `${cardsSize.width}px`,
            backgroundImage: `url(${props.item.image})`,
            backgroundColor: "transparent",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}
    >
        <Card.Description className="info">
            <p>{props.item.description}</p>
        </Card.Description>
        <Card.Content style={{
            position: "absolute",
            bottom: "0px",
            left: "0",
        }} >
            <Card.Header style={{
                color: "white",
                fontWeigth: "bold",
                fontSize: "2vw",
                minHeight: "1.5em",
                display: "table-cell",
                verticalAlign: "bottom",
            }} >
                {props.item.title}
            </Card.Header>
            <Card.Meta style={{
                color: "white",
                fontSize: "15px",
            }} >
                <span className='date'>{props.item.released}</span>
            </Card.Meta>
            <Card.Description style={{
                color: "white",
                fontSize: "12px",
            }} >
                {props.item.writer}
            </Card.Description>
        </Card.Content>
    </Card>

export default CardExampleCard