import styles from './Breadcrumb.module.scss';
import classNames from 'classnames/bind';
import { Box, CardContent, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);
function Breadcrumb({ data }) {
	// const location = useLocation();

	return (
		<Box className={cx('breadcrumb')}>
			<Paper
				className={cx('image-bg')}
				style={{ backgroundImage: `linear-gradient(0, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%), url(${data.url})` }}
			>
				<div className={cx('content')}>
					<div className={cx('nav')}>
						<ul>
							<li>
								<Box component={Link} to={'/'}></Box>
							</li>
						</ul>
					</div>

					<CardContent >

						Ngoại Ngữ
					</CardContent>
				</div>
			</Paper>
		</Box >
	);
}
export default Breadcrumb;
