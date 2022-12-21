import style from './WishList.module.scss';
import classNames from 'classnames/bind';
import { Box, Button, Typography } from "@mui/material";
import CardCourse from "~/components/card-course";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestDeleteWishlist, requestGetWishlist } from "~/redux/wishlist/wishlistSlice";
import SubNav from "~/components/sub-nav";
import { useNavigate } from 'react-router-dom';
import Loading from '~/components/loading/Loading';

const cx = classNames.bind(style);

function WishList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { wishlist, isLoading } = useSelector(state => state.wishlistReducer)
    const { userId, accessToken } = useSelector(state => state.authReducer)
    const { user } = useSelector(state => state.userReducer)
    const data = { name: " Đã thích" }

    useEffect(() => {
        if (!!user) {
            dispatch(requestGetWishlist({
                search: {
                    userInfo: {
                        userId: userId
                    }
                },
                accessToken: accessToken
            }))
        }
        else navigate("/home");
    }, [dispatch])

    return <div className="container">
        <div className={cx('wish-list')}>
            <SubNav data={data} />

            <div className={cx('title')}>
                <Typography sx={{ fontSize: "3rem", fontWeight: 'bold' }}>Đã thích</Typography>
            </div>
            <Box className="row" sx={{minHeight:'100px'}}>
                {
                    wishlist.map((item, index) => (
                        <Box sx={{ padding: '1rem' }} key={index} className={cx('col-3', 'active')}>
                            <CardCourse data={item.course} />

                        </Box>
                    ))
                }
            </Box>
        </div>
        <Loading open={isLoading} />
    </div>
}

export default WishList;