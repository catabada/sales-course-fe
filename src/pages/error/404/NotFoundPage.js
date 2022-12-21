import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import styles from './NotFoundPage.module.scss'

const cx = classNames.bind(styles)
const NotFoundPage = () => {

    return (
        <Box className={cx("page-error")}>
<div className={cx("container")}>
    <div className={cx("row")}>
        <div className={cx("xs-12", "md-6", "mx-auto")}>
            <div id={cx("countUp")}>
                <div className={cx("number")}>400</div>
                <div className={cx("text")}>Không tìm thấy trang này 	(っ´ω`)ﾉ(╥ω╥)</div>
                        <div className={cx("text")}>Ở đây không có gì hết.</div>
            </div>
        </div>
    </div>
</div>            
        </Box>
        
            
    )
}

export default NotFoundPage