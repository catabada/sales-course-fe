import classNames from "classnames/bind";
import {Breadcrumb} from "~/components/Breadcrumb";
import styles from "./Course.module.scss"
import {Box, Container, Grid, Paper} from "@mui/material";
import Filter from "~/components/Filter";
import ListCourse from "~/components/ListCourse";


const cx = classNames.bind(styles);

function Course() {
    const data = {};
    return <Box className={cx('wrapper')}>
        <Box sx={{width: '100%'}}>
            <Breadcrumb data={data}/>

            <Container maxWidth={false}>
                <Paper elevation={4}>
                    <Grid container className={cx('body')}>
                        <Grid item lg={2} sx={{width: '100%'}}>
                            <Filter/>
                        </Grid>
                        <Grid item lg={8} sx={{width: '100%', position: 'relative'}}>
                            <ListCourse/>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>

    </Box>
};

export default Course;

