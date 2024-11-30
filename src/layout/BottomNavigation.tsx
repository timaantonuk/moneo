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
        <BottomNavigation sx={{ width: {md: '80%', xs: '100%'},
            borderRadius: 5 }} value={value} onChange={handleChange}>
            <BottomNavigationAction

                label="Recents"
                value="recents"
                icon={<RestoreIcon />}


            />
            <BottomNavigationAction
                label="Favorites"
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
