import React from 'react';
//import { Col, Container, Row, Footer } from 'mdbreact';

class Footer extends React.Component {
    render(){
        return(
            <Footer color="green" className="font-small pt-4 mt-4">
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://github.com/JoshuaHaarer/Poker-Final"> Kathy, Fabio, Greg, Zane & Josh </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default Footer;