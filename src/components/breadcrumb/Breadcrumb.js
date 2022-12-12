import styles from './Breadcrumb.module.scss';
import classNames from 'classnames/bind';
import {Box, Breadcrumbs, CardContent, Container, Grid, Link, Paper, Typography} from '@mui/material';
import {NavigateNext} from '@mui/icons-material';
import SubNav from "~/components/sub-nav";

const cx = classNames.bind(styles);

function Breadcrumb({data}) {

    return (
        <Box className={cx('breadcrumb')}>
            <Paper
                className={cx('image-bg')}
                style={{
                    backgroundImage: `linear-gradient(0, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%), url(${data.background})`,
                }}
            >
                <Container maxWidth={false}>
                    <div className={cx('content')}>
                        <SubNav data={data} breadcrumbCourse={"sub-nav"}/>

                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 'bold',
                                color: '#fff',
                                margin: '10px 0 0 20px',
                            }}
                        >
                            {data.name}
                        </Typography>
                    </div>
                </Container>
            </Paper>
        </Box>
    );
}

export default Breadcrumb;
