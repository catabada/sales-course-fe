import style from './WishList.module.scss';
import classNames from 'classnames/bind';
import {Box, Button, Typography} from "@mui/material";
import CardCourse from "~/components/card-course";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestDeleteWishlist, requestGetWishlist} from "~/redux/wishlist/wishlistSlice";
import SubNav from "~/components/sub-nav";

const cx = classNames.bind(style);

function WishList() {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlistReducer.wishlist)
    const userId = useSelector(state => state.authReducer.userId)
    const data = {name: " Đã thích"}

    useEffect(() => {
        dispatch(requestGetWishlist({
            appUser: {
                id: userId
            }
        }))
    }, [dispatch])


    return <div className="container">
        <div className={cx('wish-list')}>
            <SubNav data={data}/>

            <div className={cx('title')}>
                <Typography sx={{fontSize: "3rem", fontWeight: 'bold'}}>Đã thích</Typography>
            </div>
            <div className="row">
                {
                    wishlist && wishlist.map((item, index) => (
                        <Box sx={{padding: '1rem'}} key={index} className={cx('col-3', 'active')}>
                            <CardCourse data={item.course}/>

                        </Box>
                    ))
                }
            </div>
        </div>
    </div>
}

export default WishList;