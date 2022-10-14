import { useState } from "react";
import { Box, Button, TextField, Typography, useStepContext, Paper } from "@mui/material";
import Logo from '../resources/logos/StyleHub-Logo-Splash.png'

export const Auth = () => {

const [isRegister, setIsRegister] = useState(false);
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('');

console.log(isRegister);

    return (  
        <div>
            <form>
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
                type={"text"}
                variant="outlined"
                style={{ color: "red" }}
                placeholder="username"
                margin="normal"
                />

            {isRegister && 
                <TextField
                type={"email"}
                variant="outlined"
                placeholder="email"
                margin="normal"
                />
            }
                <TextField
                type={"password"}
                variant="outlined"
                placeholder="password" 
                margin="normal"
                />

                <Button
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
                onClick={() => setIsRegister(!isRegister)}
                sx={{ marginTop: 0, }}
                >
                    {isRegister ? "Sign In" : "Sign Up"}
                </Button>
                
                </Box>
            </form>
        </div>
    );
}