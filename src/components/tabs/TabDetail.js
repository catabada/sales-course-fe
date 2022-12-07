import {Box, Tab, Tabs, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {useState} from "react";


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanels(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function TabDetail() {
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
                    Trong thời đại Internet, hẳn bạn đã từng choáng ngợp trước những giao diện
                    website trông rất bắt mắt khiến bạn không ngớt lời trầm trồ khen ngợi. Thật ra tất cả những thứ đó
                    chính bạn cũng có thể làm được với chút kiến thức về thiết kế giao diện website bằng HTML và CSS.
                    {/*<br/>*/}
                    {/*<br/>*/}
                    {/*Dù bạn đang làm cho doanh nghiệp hay đơn giản là quảng bá thương hiệu, quảng bá cá nhân, nâng cao uy*/}
                    {/*tín thì xây dựng một website là điều kiện tiên quyết cho những mục tiêu trên, giúp nâng cao kĩ năng*/}
                    {/*và điều đó có ích cho cá nhân lẫn công việc, nhưng không hẳn ai cũng biết phải bắt đầu xây dựng nên*/}
                    {/*website đầu tiên thế nào.*/}
                    {/*<br/>*/}
                    {/*<br/>*/}
                    {/*Khóa học cung cấp cho học viên các kiến thức cơ bản về HTML, CSS trong việc thiết kế và xây dựng*/}
                    {/*giao diện website.*/}
                    {/*<br/>*/}
                    {/*<br/>*/}
                    {/*Lộ trình học tập:*/}
                    {/*<br/>*/}
                    {/*<br/>*/}
                    {/*21 bài học chia làm 3 chương giúp người học có thể xây dựng giao diện trang*/}
                    {/*web tốt.*/}
                </Typography>
                <Typography variant='span' sx={{
                    color: '#E3BA00',
                    cursor: 'pointer',
                    display: 'flex',
                    fontSize:'2rem'
                }}>Xem thêm</Typography>
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