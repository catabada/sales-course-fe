import {Box, Tab, Tabs, Typography} from "@mui/material";
import {useState} from "react";
import {a11yProps, TabPanels} from "~/components/tabs/Tab";


function TabDetail({data}) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                {/*<Typography variant='span' sx={{*/}
                {/*    color: '#E3BA00',*/}
                {/*    cursor: 'pointer',*/}
                {/*    display: 'flex',*/}
                {/*    fontSize: '2rem'*/}
                {/*}}>Xem thêm</Typography>*/}
            </TabPanels>
            <TabPanels value={value} index={1}>
                Khoá chưa có tài liệu
            </TabPanels>
            <TabPanels value={value} index={2}>
                Chức năng đang cập nhật
            </TabPanels>
        </Box>
    )
}

export default TabDetail;