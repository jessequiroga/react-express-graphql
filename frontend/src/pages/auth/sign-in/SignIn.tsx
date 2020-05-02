import React, { useState } from 'react';
import styles from './SignIn.module.scss'
import { Container, TextField } from '@material-ui/core';
import { ISignInForm } from '../interfaces/sign-in.interface';
import AuthService from '../../../core/services/Auth.service';
import LoaderButton from '../../../core/components/loader-button/LoaderButton';
import { makeStyles } from '@material-ui/core/styles';
import gradientBtn from '../../../shared/mat-overrides/gradient-btn.mat-overrides'
import { toModel } from '../../../shared/helpers/objects';

const useStyles = makeStyles({
    signInRoot: {
        display: 'grid',
    }
});

export const SignIn: React.FC = () => {
    const [signInForm, updateSignInForm] = useState<ISignInForm>({email: '', password: ''});
    const [loading, updateLoading] = useState<boolean>(false);

    const classes = useStyles();
    const gradientBtnClasses = gradientBtn();

    const onFormSubmit = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        updateLoading(true);

        try {
            await AuthService.signIn(signInForm);
        } catch (e) {

        }

        updateLoading(false);
    };

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.persist();
        const {name, value} = event.target;

        updateSignInForm(toModel<ISignInForm>(signInForm, {[name]: value}))
    };

    return (
        <Container maxWidth="sm"
                   classes={{root: classes.signInRoot}}
                   className={styles.loginContainer}
        >
            <form onSubmit={onFormSubmit} className={styles.loginForm}>
                <TextField onInput={onValueChange}
                           name="email"
                           label="Email"
                           variant="outlined"
                           type="email"
                />
                <TextField onInput={onValueChange}
                           name="password"
                           label="Password"
                           variant="outlined"
                           type="password"
                />
                <LoaderButton classes={{root: gradientBtnClasses.root}}
                              type="submit"
                              value='SignIn'
                              isLoading={loading}
                />
            </form>
        </Container>
    );
}

export default SignIn
