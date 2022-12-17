import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, InputBase, Typography} from "@mui/material";
import {LogoIcon} from "~/components/icons";
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import {useState} from "react";


const cx = classNames.bind(styles);

function HeaderActive() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return <Box sx={{flex: 1}}>
        <Button variant="outlined" className={cx('btn-active')} onClick={handleClickOpen}>
            Kích hoạt khoá học
        </Button>
        <Dialog open={open} onClose={handleClose}
                PaperProps={{
                    style: {
                        maxWidth: 600,
                        minWidth: 520,
                    }
                }}>
            <DialogTitle sx={{textAlign: 'center', position: 'relative'}}>
                <LogoIcon/>
            </DialogTitle>
            <DialogContent>
                <Box sx={{marginBottom: '1rem'}}>
                    <Typography variant='body1'
                                sx={{
                                    textAlign: 'center',
                                    fontSize: '3rem',
                                    lineHeight: '4rem',
                                    fontWeight: 'bold'
                                }}>
                        Kích hoạt khóa học của bạn
                    </Typography>
                    <Typography variant='body1'
                                sx={{textAlign: 'center', fontSize: '1.6rem', lineHeight: '2rem',}}>
                        Nhập mã kích hoạt của bạn vào ô dưới đây
                    </Typography>
                </Box>
                <InputBase
                    placeholder='Nhập mã kích hoạt'
                    fullWidth
                    sx={{
                        width: '100%',
                        outline: 'none',
                        border: 'none',
                        backgroundColor: "#eee",
                        height: 64,
                        borderRadius: '1rem',
                        marginBottom: '2rem',
                        fontSize: '2rem',
                    }}
                    inputProps={{
                        style: {
                            textAlign: 'center'
                        }
                    }}
                />
                <Button sx={{
                    width: '100%',
                    height: 64,
                    backgroundColor: '#C89F65',
                    color: '#fff',
                    borderRadius: '1rem',
                    fontSize: '1.8rem',
                    textTransform: 'initial',
                    '&:hover': {
                        backgroundColor: '#C89F65',
                        color: '#fff',
                    },
                    marginBottom: '3rem'
                }}>Kích hoạt khóa học của bạn</Button>

                <DialogActions sx={{justifyContent: 'center'}}>
                    <Box>
                        <Typography variant='body1' sx={{
                            margin: '1rem 0',
                            fontSize: '1.2rem',
                            lineHeight: '2.2rem'
                        }}>
                            Nếu bạn có gặp vấn đề về kích hoạt tài khoản, xin vui lòng liên hệ
                            hotline:
                        </Typography>
                        <Box sx={{textAlign: 'center'}}>
                            <Box component={"span"} sx={{color: '#C89F65', fontSize: '1.2rem'}}>
                                1800 6816
                            </Box>
                            <Box component={'span'} sx={{fontSize: '1.2rem', marginLeft: '0.3rem'}}>
                                (07:00 - 24:00 các ngày trong tuần)
                            </Box>
                        </Box>
                    </Box>
                </DialogActions>
            </DialogContent>
        </Dialog>
    </Box>

}

export default HeaderActive