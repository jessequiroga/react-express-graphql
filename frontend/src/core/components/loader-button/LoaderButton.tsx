import Button from '@material-ui/core/Button';
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

interface IProps {
    type?: string;
    isLoading?: boolean;
    value: string;
}

export const LoaderButton: React.FC<IProps> = (props) => {
    return (
        <Button variant="contained" color="primary">
            { props.isLoading ?
                <CircularProgress /> : props.value
            }
        </Button>
    )
};

export default LoaderButton;

