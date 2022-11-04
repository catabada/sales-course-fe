import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Paper, Typography } from '@mui/material';
import styles from './CardCategory.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';

const cx = classNames.bind(styles);
function CardCategory() {
	return (
		<Box
			className={cx('card-category')}
			component={Link}
			to={config.routes.product}>
			<Paper
				className={cx('image-bg')}
				elevation={4}
				square
				sx={{
					background: `linear-gradient(
                                    0deg, 
                                    rgba(0, 0, 0, 0.75) 0%, 
                                    rgba(0, 0, 0, 0) 100%), 
                                    url("https://cdn2.topica.vn/5f990e55cb5acb5e85ce27a9/product/619bceab6d05dc00250104d6")`,
				}}>
				<Card className={cx('card-wrapper')}>
					<CardContent
						sx={{
							p: 3,
						}}>
						<Typography
							variant='body1'
							sx={{
								fontSize: 36,
								fontWeight: 'bold',
								color: '#fff',
							}}>
							Ngoại ngữ
						</Typography>
						<Typography
							variant='body1'
							sx={{
								fontSize: 18,
								fontWeight: 'bold',
								color: '#fff',
							}}>
							392 khóa học
						</Typography>
					</CardContent>
				</Card>
			</Paper>
		</Box>
	);
}

export default CardCategory;
