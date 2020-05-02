import Button from '@material-ui/core/Button';
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

interface IProps {
    type?: 'button' | 'submit' | 'reset';
    isLoading?: boolean;
    value: string;
    classes?: {[key: string]: string};
}

export const LoaderButton: React.FC<IProps> = (props) => {
    return (
        <Button type={props.type} classes={props.classes} variant="contained" color="primary">
            { props.isLoading ?
                <CircularProgress /> : props.value
            }
        </Button>
    )
};

export default LoaderButton;

