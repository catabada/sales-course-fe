import { Backdrop, CircularProgress } from "@mui/material"

const  Loading = ({open}) => {
    return (
        <Backdrop
                sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="primary" />
            </Backdrop>
    )
}

export default Loading