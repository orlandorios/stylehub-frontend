import { useState } from "react";
import { Box, Button, TextField, Typography, useStepContext, Paper } from "@mui/material";
import Logo from '../resources/logos/StyleHub-Logo-Splash.png'

export const Auth = () => {

const [isRegister, setIsRegister] = useState(false);
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password)
}

const resetState = () => {
    setIsRegister(!isRegister);
    setUsername('')
    setEmail('')
    setPassword('')
}

// console.log(isRegister);

    return (  
        <div>
            <form
            onSubmit={handleSubmit}
            >
                <Box
                display="flex"
                flexDirection={"column"}
                maxWidth={300}
                alignItems="center"
                justifyContent={"center"}
                margin="auto"
                marginTop={5}
                padding={3}
                borderRadius={0}
                boxShadow={"5px 5px 10px #ccc"}>

                <Box
                component="img"
                sx={{ height: 100, marginRight: 2, }}
                alt="main logo"
                src={Logo}
                />
                
                <TextField
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                value={username}
                type={"text"}
                variant="outlined"
                style={{ color: "red" }}
                placeholder="username"
                margin="normal"
                required
                />

            {isRegister && 
                <TextField
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                value={email}
                type={"email"}
                variant="outlined"
                placeholder="email"
                margin="normal"
                required
                />
            }
                <TextField
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                value={password}
                type={"password"}
                variant="outlined"
                placeholder="password" 
                margin="normal"
                required
                />

                <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#9cc4d9" }}
                sx={{ marginTop: 3, }}
                >
                    {isRegister ? "Sign up" : "Sign In"}
                </Button>


                <Typography
                sx={{ marginTop: 3 }}> 
                {isRegister ? "Have an account?" : "Don't have an account?"}
                </Typography>

                <Button
                onClick={resetState}
                sx={{ marginTop: 0, }}
                >
                    {isRegister ? "Sign In" : "Sign Up"}
                </Button>
                
                </Box>
            </form>
        </div>
    );
}