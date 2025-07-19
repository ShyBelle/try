import { useState } from 'react'
import './App.css'
import { Box, Stack } from '@mui/material'
import Project from './sample/Project.jsx'


function App() {
    const [count, setCount] = useState(0)

    return (
        <main className="content">
            <Stack
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{ flexGrow: 1,
                        border: '1px solid lightgray',
                        height: '1056px',
                        width: '768px',
                        mt: '16px'
                    }}
                >
                    <Project/>
                </Box>
            </Stack>
        </main>
    )
}

export default App
