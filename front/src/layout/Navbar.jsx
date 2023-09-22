import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LogoutIcon from '@mui/icons-material/Logout';
import "./Navbar.css" ;






function Navbar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height:500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [user,setuser]="Hassan";
    return ( 
        <>
        <nav className='nav'>

            <div className='topnav'>
                <img src="src/assets/Logo2.png" className="" alt="" />
                
                <Button variant="outlined">Accueil</Button>
                <Button variant="outlined">Boutique</Button>
            </div>
       

            <div className='bottomnav'>

                        <Button onClick={handleOpen}>{user}</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {user}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rem reiciendis fuga sed ut tempore minus, dignissimos, praesentium voluptatibus natus magni cumque laborum nesciunt fugit nam. Veniam voluptates ut qui?
                            </Typography>
                            </Box>
                        </Modal>
            

                    <Button variant="contained"> <LogoutIcon /> Deconnexion</Button>
                
                </div>
            </nav>
           
     
        </>
     );
}

export default Navbar;