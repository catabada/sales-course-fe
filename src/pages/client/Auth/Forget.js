import { Button, TextField } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './Auth.module.scss';
import { CheckIcon } from '~/components/Icons'
const cx = classNames.bind(styles);

function Forget() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <form>
                    <label className={cx('form-label')}>Địa chỉ email</label>
                    <TextField
                        InputProps={{
                            style: { fontSize: '1.2rem' },
                        }}
                        variant="outlined"
                        fullWidth
                        placeholder="mail@example.com"
                    />
                    <div className={cx('check-wrapper')}>
                        <div className={cx('check-content')}>
                            <button className={cx('check-btn')} ></button>
                            {/* <span className={cx('check-icon')}><CheckIcon /></span> */}
                        </div>
                        <div>
                            <span> Đồng ý với điều khoản, quy chế hoạt động và chính sách bảo mật</span>
                        </div>
                    </div>
                    <Button variant="contained" disabled fullWidth className={cx('btn', 'btn-second')}>
                        Xác nhận
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Forget;
