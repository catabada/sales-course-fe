import {Avatar, Box, Button, Divider, InputBase, Tab, Tabs, Typography} from "@mui/material";
import {useState} from "react";
import {a11yProps, TabPanels} from "~/components/tabs/Tab";
import SendIcon from '@mui/icons-material/Send';

function TabDetail({data}) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleDiscuss = () => {
        const message = document.querySelector("input[name='message']").value;
        console.log(message)
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
                        <Box sx={{marginBottom: '1.5rem'}}>
                            <Box component={'li'} sx={{display: 'flex'}}>
                                <Avatar alt="user"
                                        src="https://storage.googleapis.com/topica-media/2d8d39e0-8fec-4044-b07d-0526cc7150d8/user/639312afaf47c60040e4ba56"/>

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
                                            alignItems: 'center',
                                            width: '100%',
                                            padding: '0.6rem'
                                        }}>
                                        <Typography variant="body1" sx={{
                                            color: '#C89F65',
                                            whiteSpace: 'break-spaces',
                                            fontSize: '1.4rem',
                                            marginRight: '0.4rem'
                                        }}>
                                            use name:
                                        </Typography>
                                        <span> bài này khó hiểu quá</span>
                                    </Box>
                                    <Box>
                                        <Button variant="text" sx={{color: '#393f4d', fontSize: '1.4rem'}}>
                                            Trả lời
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box component={'li'} sx={{display: 'flex'}}>
                                <Avatar alt="user"
                                        src="https://storage.googleapis.com/topica-media/2d8d39e0-8fec-4044-b07d-0526cc7150d8/user/639312afaf47c60040e4ba56"/>

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
                                            alignItems: 'center',
                                            width: '100%',
                                            padding: '0.6rem'
                                        }}>
                                        <Typography variant="body1" sx={{
                                            color: '#C89F65',
                                            whiteSpace: 'break-spaces',
                                            fontSize: '1.4rem',
                                            marginRight: '0.4rem'
                                        }}>
                                            use name:
                                        </Typography>
                                        <span> bài này khó hiểu quá</span>
                                    </Box>
                                    <Box>
                                        <Button variant="text" sx={{color: '#393f4d', fontSize: '1.4rem'}}>
                                            Trả lời
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
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