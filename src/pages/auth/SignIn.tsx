import React, { useState } from 'react';
import Header from '../../components/Header';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button, TextField, Container, Typography, Box, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom'; // Add useNavigate

// Define the schema using Yup
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

// Define the types for the form values
interface IFormInput {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Initialize navigate

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        handleSignIn(data);
    };

    const handleSignIn = (data: IFormInput) => {
        // Replace with actual sign-in logic
        if (data.email === 'user@example.com' && data.password === 'password') {
            sessionStorage.setItem('loggedIn', 'true');
            console.log('Sign-in successful');
            navigate('/'); // Redirect to the landing page
        } else {
            console.error('Invalid email or password');
        }
    };

    const handleClickShowPassword = () => setShowPassword((prev) => !prev);

    return (
        <div>
            <Header title="Welcome to Coding Blind Tech!" />
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h2" variant="h5">
                        Sign In
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            autoComplete="email"
                            autoFocus
                            {...register('email')}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            autoComplete="current-password"
                            {...register('password')}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Button
                            fullWidth
                            variant="text"
                            color="primary"
                            onClick={() => alert('Forgot password functionality to be implemented')}
                        >
                            Forgot Password?
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default SignIn;
