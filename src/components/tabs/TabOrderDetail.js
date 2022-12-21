import { Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import { useState } from "react";
import classNames from 'classnames/bind';
import style from './TabsOrderDetail.module.scss';
const cx = classNames.bind(style)

function TabOrderDetail() {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(!open);
    };
    const handleOpen = (id) => {
        setOpen(!open);
    }
    return <Box>
        <Button
            onClick={() => handleOpen()}
            variant="contained" sx={{
                marginLeft: '2rem',
                backgroundColor: '#2ecc71',
                color: '#fff',
                height: '3rem',
                boxShadow: 'none',
                '&:hover': { boxShadow: 'none', backgroundColor: '#2ecc71', color: '#fff' },
            }}>Chi tiết</Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{
                style: {
                    maxWidth: '700px',
                    width: '700px'
                },
            }}
        >
            <DialogTitle>
                <Typography variant="h5" sx={{ textDecoration: 'underline' }} >
                    Order No: #1057053696
                </Typography>

            </DialogTitle>
            <DialogContent className="p-4">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <p>Ảnh</p>
                        </Grid>
                        <Grid item xs={3}>
                            <p>Tên khoá học</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p>Giá gốc</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p>Giảm giá</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p>Giá bán</p>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, marginBottom: '2rem' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Avatar src="" variant="square" sx={{ width: '100%', height: '70px' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body1" className={cx('course-name')}>Hiểu biết về digital marketing</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>399.000 ₫</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>0</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>399.000 ₫</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, marginBottom: '2rem' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Avatar src="" variant="square" sx={{ width: '100%', height: '70px' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body1" className={cx('course-name')}>Hiểu biết về digital marketing</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>399.000 ₫</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>0</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>399.000 ₫</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}></Grid>
                        <Grid item xs={2} sx={{ justifyContent: 'flex-end' }}>
                            <Typography variant="body1" sx={{ fontSize: "1.4rem", fontWeight: 'bold' }}>Tổng giá</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>399.000 ₫</Typography>
                        </Grid>
                    </Grid>
                </Box>



            </DialogContent>
        </Dialog>

    </Box >
}

export default TabOrderDetail;