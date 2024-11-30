import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function BottomNavigationElement() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    // TODO ADD TAILWIND CSS AND REWRITE CODE THAT USES SX PROPS TO TAILWIND

    return (
        <BottomNavigation sx={{ width: '80%', borderRadius: 5, backgroundColor: 'var(--accent-1)', color: 'green' }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                sx={{
                    color: 'green', // Default color
                    '&:hover': {
                        color: 'green', // Hover color
                    },
                    '&.Mui-selected': {
                        color: 'green', // Active (selected) color
                    },
                }}
                label="Recents"
                value="recents"
                icon={<RestoreIcon />}
                label="Recents"
                value="recents"
                icon={<RestoreIcon />}

            />
            <BottomNavigationAction
                // label="Favorites"
                value="favorites"
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                label="Nearby"
                value="nearby"
                icon={<LocationOnIcon />}
            />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
    );
}
