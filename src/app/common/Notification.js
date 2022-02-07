import React from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
export const Notification = React.memo(function Notification(props)  {
    const closeNotification = ()=>{
        setTimeout(() => {
            props.onClose()
        }, 1000);
    } // this function closes the notification after 1 second
    useEffect( closeNotification,[props.show])
    
    return (
         <Row className="mt-1">
            <Col md={{ span: 3, offset: 5 }}>
                <Alert show={props.show} variant="success" onClose={props.onClose} dismissible >
                <span > {`${props.message} has been added.`} </span>
                </Alert>
            </Col>
        </Row> 
    )
},(prevProps,nextProps) =>(
    prevProps.show === nextProps.show &&
    prevProps.variant === nextProps.variant &&
    prevProps.dismissible === nextProps.dismissible &&
    prevProps.onClose === nextProps.onClose &&
    prevProps.message === nextProps.message
))
