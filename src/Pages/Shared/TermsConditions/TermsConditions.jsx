import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
    return (
        <Container>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos reprehenderit esse porro laboriosam praesentium ex soluta nostrum rem repellendus?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default TermsConditions;