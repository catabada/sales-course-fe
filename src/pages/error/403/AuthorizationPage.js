import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import styles from './AuthorizationPage.module.scss'

const cx = classNames.bind(styles)
const AuthorizationPage = () => {

    return (
        <Box className={cx("page-error")}>
            <div className={cx("container")}>
                <div className={cx("row")}>
                    <div className={cx("xs-12", "md-6", "mx-auto")}>
                        <div id={cx("countUp")}>
                            <div className={cx("number")}>403</div>
                            <div className={cx("text")}>Không đủ quyền truy cập 	(￣ε￣＠) !!!</div>
                            <div className={cx("text")}>Vui lòng liên hệ Admin để được giải quyết.</div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>


    )
}

export default AuthorizationPage