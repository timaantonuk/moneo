import {Avatar, Box, Chip, Typography} from "@mui/material";
import {blue} from "@mui/material/colors";

function MoneyChip() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: blue[700],
            width: '80%',
            padding: 2,
            borderRadius: 5,
            height: '2rem'
        }}>
            <Typography
                variant='h6'
                sx={{
                    color: (theme) => theme.palette.text.primary,
                    width: '50%',
                    fontWeight: 400,
                    fontSize: {
                        md: '1.2rem',
                        xs: '1.1rem'
                    }
                }}>Total Expense:</Typography>
            <Chip label='3000$' color="error" avatar={<Avatar src="/static/images/avatar/1.jpg"/>} sx={{
                width: '50%', height: '2.5rem', display: 'flex', gap: 2, '& .MuiChip-label': {
                    fontSize: '1.2rem', // Adjust the font size here
                    fontWeight: 500,
                },
            }}/>
        </Box>
    );
}

export default MoneyChip;

