import React from 'react';
import {Button,Card} from 'react-bootstrap';

export default function StudentInfo(props) {
    const { sData } = props;

    return (
        <Card style={{ width: '18rem', margin:"20px", padding:"20px", justifyContent:"center" }}>
            <Card.Img variant="top" src="/img.jpg" height={"100px"} />
            <Card.Body>
                <Card.Title>{sData.name}</Card.Title>
                <Card.Text>
                {sData.mobile}
                    
                </Card.Text>
                <Button variant="secondary">Login</Button>
            </Card.Body>
        </Card>

    )
}