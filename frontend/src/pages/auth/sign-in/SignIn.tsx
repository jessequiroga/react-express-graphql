import React, { Component } from 'react';
import styles from './SignIn.module.scss'
import { Button, Container, TextField } from '@material-ui/core';
import { ISignInState } from '../interfaces/sign-in.interface';
import AuthService from '../../../core/services/Auth.service';

class SignIn extends Component {
    readonly state: ISignInState;

    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    private onFormSubmit = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        try {
            await AuthService.signIn(this.state);
        } catch (e) {

        }
    };

    private onValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.persist();
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <Container maxWidth="sm" className={styles.loginContainer}>
                <form onSubmit={this.onFormSubmit} className={styles.loginForm}>
                    <TextField onInput={this.onValueChange}
                               name="email"
                               label="Email"
                               variant="outlined"
                               type="email"
                    />
                    <TextField onInput={this.onValueChange}
                               name="password"
                               label="Password"
                               variant="outlined"
                               type="password"
                    />
                    <Button type="submit" variant="contained">
                        SignIn
                    </Button>
                </form>
            </Container>
        );
    }
}

export default SignIn
