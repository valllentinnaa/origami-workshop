import React, {Component} from "react";
import Container from "../../components/page-container";
import styles from "./register.module.css";
import Title from "../../components/title";
import Button from "../../components/button";
import Input from "../../components/input";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            rePassword: ''
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
                    <Title title="Register"/>
                    <Input
                        label="Email"
                        id="email" value={this.state.email}
                        onChange={(e) => this.onChange(e, 'email')}/>
                    <Input
                        label="Password"
                        id="password"
                        value={this.state.password}
                        onChange={(e) => this.onChange(e, 'password')}/>
                    <Input
                        label="Re-Password"
                        id="rePassword"
                        value={this.state.rePassword}
                        onChange={(e) => this.onChange(e, 'rePassword')}/>
                    <Button name="Register"/>
                </div>
            </Container>
        );
    }
};

export default Register;