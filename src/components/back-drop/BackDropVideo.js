import {Backdrop, Box, CircularProgress, Dialog} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {useState} from "react";

function BackDropVideo({url}) {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return <Box sx={{position: 'absolute'}}>
        <PlayArrowIcon
            onClick={handleToggle}
            sx={{
                width: '6rem',
                height: '6rem',
                backgroundColor: '#fff',
                borderRadius: '100%',
                cursor: 'pointer'
            }}/>
        <Dialog open={open} onClick={handleClose}
                PaperProps={{
                    style: {
                        maxWidth: '700px',
                        width: '700px',
                        background: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                }}>
            <iframe width="100%" height="400px" src={url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </Dialog>
    </Box>
}

export default BackDropVideo;