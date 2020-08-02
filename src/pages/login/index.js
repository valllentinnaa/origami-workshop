import React, {Component} from "react";

import Title from "../../components/title";
import Button from "../../components/button";

import styles from './login.module.css';
import Container from "../../components/page-container";
import Input from "../../components/input";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;

        this.setState(newState);
    };

    render() {
        return (
            <Container>
                <div className={styles.container}>
                    <Title title="Login"/>
                    <Input label="Name" id="name" value="" onChange={(e) => this.onChange(e, 'email')}/>
                    <Input label="Password" id="password" value="" onChange={(e) => this.onChange(e, 'password')}/>
                    <Button name="Login"/>
                </div>
            </Container>
        )
    }
};

export default Login;