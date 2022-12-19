import {
    Avatar,
    Box,
    Button,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    Divider,
    InputBase,
    Tab,
    Tabs,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {a11yProps, TabPanels} from "~/components/tabs/Tab";
import SendIcon from '@mui/icons-material/Send';
import {useDispatch, useSelector} from "react-redux";
import {requestCreateDiscuss, requestDeleteDiscuss, requestGetSearchDiscuss} from "~/redux/discuss/discussSlice";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function TabDetail({data, lesson}) {
    const [open, setOpen] = useState(0);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const discusses = useSelector(state => state.discussReducer.discusses)
    const user = useSelector(state => state.userReducer.user)

    useEffect(() => {
        lesson && dispatch(requestGetSearchDiscuss({
            lesson: {
                id: lesson?.id
            }
        }))
    }, [dispatch, lesson]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleDiscuss = () => {
        const message = document.querySelector("input[name='message']");
        dispatch(requestCreateDiscuss({
            lesson: {
                id: lesson?.id
            },
            userInfo: user,
            parent: null,
            content: message.value
        }))
        message.value = ''
        message.focus()
    }
    const handleReply = (parentId) => {
        console.log(parentId)
    }

    const handleClose = () => {
        setOpen(0)
    }
    const handleDelete = () => {
        dispatch(requestDeleteDiscuss(open))
        setOpen(0)
    }
    return (
        <Box>
            <Box sx={{paddingLeft: 0}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                      TabIndicatorProps={{
                          style: {
                              height: '0.5rem'
                          }
                      }}
                >
                    <Tab label="Về chúng tôi" {...a11yProps(0)} sx={{fontSize: '2rem'}}/>
                    <Tab label="Tài liệu" {...a11yProps(1)} sx={{fontSize: '2rem'}}/>
                    <Tab label="Thảo luận" {...a11yProps(2)} sx={{fontSize: '2rem'}}/>
                </Tabs>
            </Box>
            <TabPanels value={value} index={0}>
                <Typography variant='span' sx={{fontSize: '1.6rem'}}>
                    {data && data.description}
                </Typography>
            </TabPanels>
            <TabPanels value={value} index={1}>
                Khoá chưa có tài liệu
            </TabPanels>
            <TabPanels value={value} index={2}>
                <Box sx={{display: 'flex', marginTop: '5rem'}}>
                    <Box component={'ul'} sx={{width: '100%'}}>
                        {
                            discusses && discusses ?
                                discusses.map((item, index) => {
                                    return <Box key={index} sx={{marginBottom: '1.5rem'}}>
                                        <Box component={'li'} sx={{display: 'flex'}}>
                                            <Avatar alt={`${item?.userInfo.fullName}`}
                                                    src={`${item?.userInfo.imageUrl}`}
                                                    sx={{height: '5rem', width: '5rem'}}/>
                                            <Box sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                marginLeft: '2rem',
                                                width: '100%',
                                                backgroundColor: "#eee",
                                                padding: '1rem',
                                                borderRadius: '1rem',
                                            }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        fontSize: '1.4rem',
                                                        alignItems: 'start',
                                                        width: '100%',
                                                        padding: '0.6rem',
                                                        flexDirection: 'column',
                                                    }}>
                                                    <Box sx={{display: 'flex', width: '100%', alignItems: 'center'}}>
                                                        <Typography variant="body1" sx={{
                                                            color: '#C89F65',
                                                            whiteSpace: 'break-spaces',
                                                            fontSize: '2rem',
                                                            marginRight: '0.4rem',
                                                            fontWeight: 'bold'
                                                        }}>
                                                            {item?.userInfo.fullName == null ? "Vô danh" : item?.userInfo.fullName}:
                                                        </Typography>
                                                        {
                                                            user.userId === item.userInfo.userId ?
                                                                <Box sx={{marginLeft: 'auto'}}>
                                                                    <Button
                                                                        onClick={() => setOpen(item.id)}
                                                                        sx={{
                                                                            marginRight: '3rem',
                                                                            fontSize: '1.6rem',
                                                                            backgroundColor: 'red',
                                                                            color: '#fff',
                                                                            boxShadow: 'none',
                                                                            "&:hover": {
                                                                                backgroundColor: 'red',
                                                                            }
                                                                        }}
                                                                    >
                                                                        <DeleteForeverIcon
                                                                            sx={{height: '2.4rem', width: '2.4rem'}}/>
                                                                    </Button>
                                                                </Box>
                                                                : <></>
                                                        }

                                                    </Box>
                                                    <span>{item.content}</span>
                                                </Box>
                                                <Box>
                                                    <Button
                                                        onClick={() => handleReply(item.id)}
                                                        variant="text"
                                                        sx={{color: '#393f4d', fontSize: '1.4rem'}}>
                                                        Trả lời
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                })
                                : <></>
                        }
                    </Box>
                </Box>
                <Dialog
                    open={open != 0}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" sx={{fontSize: '2rem', color: 'red'}}>
                        {"Bạn muốn xoá bình luận này?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText
                            sx={{fontSize: '2rem'}}
                            id="alert-dialog-description">
                            Hãy chắc chắn rằng bạn muốn xoá nó
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            sx={{color: '#000', fontSize: '2rem', marginRight: '2rem'}}
                            onClick={handleClose}>Huỷ</Button>
                        <Button
                            sx={{
                                backgroundColor: 'red',
                                color: '#fff',
                                fontSize: '2rem',
                                '&:hover': {backgroundColor: 'red', color: '#fff'}
                            }}
                            onClick={handleDelete} autoFocus>
                            Đồng ý
                        </Button>
                    </DialogActions>
                </Dialog>
                <Divider sx={{height: '2px', backgroundColor: '#000'}}/>
                <Box sx={{position: 'relative', width: '100%'}}>

                    <InputBase
                        name="message"
                        sx={{
                            width: '100%',
                            minHeight: 70,
                            backgroundColor: '#eee',
                            margin: '2rem 0',
                            borderRadius: '1rem',
                            padding: '0 4rem',
                            fontSize: '1.6rem'
                        }}
                        inputProps={{
                            style: {width: '90%'}
                        }}
                    />

                    <Button
                        onClick={handleDiscuss}
                        sx={{
                            position: 'absolute', right: 0,
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }} startIcon={<SendIcon/>}/>
                </Box>

            </TabPanels>
        </Box>
    )
}

export default TabDetail;