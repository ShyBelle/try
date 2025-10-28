import {Box, Grid , Typography} from "@mui/material";

function Project(){
    return(
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <Box
                    sx={{ flexGrow: 1,
                        border: '1px solid black',
                        height: '100px',
                        mt: '16px'
                    }}
                    fullWidth
                >
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box
                    sx={{ flexGrow: 1,
                        border: '1px solid black',
                        mt: '16px'
                    }}
                >
                    <Box component="section" sx={{ p: 3, border: '4px dashed #000' , backgroundColor: 'gray' }}>
                        <Typography variant="h6" gutterBottom sx={{color:'white'}}>
                            Shybelle
                        </Typography>
                        <Typography variant="span" gutterBottom>
                            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur
                        </Typography>
                    </Box>

                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box
                    sx={{ flexGrow: 1,
                        border: '1px solid black',
                        mt: '16px'
                    }}
                >
                    <Box component="section" sx={{ p: 3, border: '4px dashed #000' }}>
                        shy
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
export default Project