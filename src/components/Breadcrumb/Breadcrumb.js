import styles from './Breadcrumb.module.scss';
import classNames from 'classnames/bind';
import {Box, Breadcrumbs, CardContent, Container, Grid, Link, Paper, Typography} from '@mui/material';
import {NavigateNext} from "@mui/icons-material";


const cx = classNames.bind(styles);

function Breadcrumb({data}) {
    const breadcrumbs = [
        <Link key="1" color="inherit" href="/"
            // onClick={handleClick}
        >
            Trang chủ
        </Link>,
        <Link
            key="2"
            color="inherit"
            to="/"
            // onClick={handleClick}
        >
            Ngoại ngữ
        </Link>,
        <Link key="3" color="text.primary">
            Breadcrumb
        </Link>,
    ];

    return (
        <Box className={cx('breadcrumb')}>
            <Paper
                className={cx('image-bg')}
                style={{backgroundImage: `linear-gradient(0, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%), url(${data.url})`}}
            >
                <Container maxWidth={false}>
                    <div className={cx('content')}>
                        <Breadcrumbs
                            separator={<NavigateNext fontSize="medium"/>}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>

                        <Typography variant="h2"
                                    sx={{
                                        fontWeight: 'bold',
										color: '#fff',
										margin: "10px 0 0 20px"
                                    }}>
                            Ngoại Ngữ
                        </Typography>
                    </div>
                </Container>

            </Paper>
        </Box>
    );
}

export default Breadcrumb;
