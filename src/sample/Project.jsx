import {Box, Stack} from "@mui/material";


function Project(){
    return(
        <Stack direction="row" spacing={0}>
            <Box
                sx={{ flexGrow: 1,
                    border: '1px solid black',
                    height: '100px',
                    width: '100px',
                    mt: '16px'
                }}
            >
            </Box>
            <Box
                sx={{ flexGrow: 1,
                    border: '1px solid black',
                    height: '100px',
                    width: '100px',
                    mt: '16px'
                }}
            >
            </Box>
            <Box
                sx={{ flexGrow: 1,
                    border: '1px solid black',
                    height: '100px',
                    width: '100px',
                    mt: '16px'
                }}
            >
            </Box>
        </Stack>
    )
}
export default Project