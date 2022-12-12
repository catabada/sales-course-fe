import { Button, Radio, TextField } from '@mui/material';
import classNames from 'classnames/bind';
import style from './Auth.module.scss';
import { CheckIcon } from '~/components/icons';
const cx = classNames.bind(style);

function Forget() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <form>
                    <TextField
                        label="Địa chỉ email"
                        InputProps={{
                            style: { fontSize: '1.5rem' },
                        }}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        variant="outlined"
                        fullWidth
                        placeholder="mail@example.com"
                    />
                    <div className={cx('check-wrapper')}>
                        <div className={cx('check-content')}>
                            <Radio
                                // checked={selectedValue === 'a'}
                                // onChange={handleChange}
                                value="a"
                                size="large"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'A' }}
                            />
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
