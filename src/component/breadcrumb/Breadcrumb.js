import styles from './breadcrumb.module.scss'
import classNames from "classnames";
import {Box, Grid, Paper} from "@mui/material";
function Breadcrumb() {
    // const location = useLocation();

    const cx = classNames.bind(styles)

    return <Box className={cx('breadcrumb')}>
        <Paper elevation={2}>
            <Grid container
                  alignItems='center'
                  justifyContent='center'
            >
                <Grid item>

                </Grid>
            </Grid>
        </Paper>
    </Box>
}
export default Breadcrumb