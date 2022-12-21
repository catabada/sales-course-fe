import { useEffect, useState } from 'react';
import PieChart from '~/components/admin/chart/PieChart';
import { CategoryData, RevenueData } from '~/services/fakeData';

import style from './Dashboard.module.scss';
import classNames from 'classnames/bind';
import BarChart from '~/components/admin/chart/BarChart';
import Widget from '~/components/admin/widget/Widget';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRevenueDay, getRevenueMonth, getRevenueYear } from '~/redux/statistics/statisticSlice';

const cx = classNames.bind(style);

function Dashboard() {
    const dispatch = useDispatch();
    const { userId, accessToken } = useSelector((state) => state.authReducer);
    const statistic = useSelector(state => state.statisticReducer.statistic);
    const [filter, setFilter] = useState('day');
    const [revenueData, setRevenueData] = useState()
    useEffect(() => {
        dispatch(getRevenueDay(10));
    }, [dispatch])

    const [categoryData, setCategoryData] = useState({
        labels: CategoryData.map((data) => data.name),
        datasets: [
            {
                label: 'revenued',
                data: CategoryData.map((data) => data.revenue),
            },
        ],
    });


    useEffect(() => {
        const array = statistic && Object.values(statistic);
        const keys = statistic && Object.keys(statistic);
        console.log(array, keys);
        setRevenueData({
            labels: keys == null ? [] : keys,
            datasets: [
                {
                    label: `Revenue ${filter}`,
                    data: array == null ? [] : array
                }
            ]
        })
    }, [statistic])

    console.log(statistic, revenueData);


    const handleChooseData = (e) => {
        switch (filter) {
            case "month":
                if (e.target.value === "3") {
                    dispatch(getRevenueMonth(3));
                } else {
                    dispatch(getRevenueMonth(6));
                }
                break;
            case "year":
                if (e.target.value === "5") {
                    dispatch(getRevenueYear(5));
                }
                break;

            default:
                if (e.target.value === "10") {
                    dispatch(getRevenueDay(10));
                } else {
                    dispatch(getRevenueDay(30));
                }
                break;
        }
    };

    const handleSelectOption = (e) => {
        setFilter(e.target.value)
    }

    return (
        <div className={cx('dashboard')}>
            <div className="row">
                <div className={cx('bar-chart')}>
                    <BarChart
                        chartData={revenueData}
                        title="Doanh thu theo thời gian"
                        parentHandleSelect={handleSelectOption}
                        parentParam={filter}
                        parentChooseData={handleChooseData}
                    />
                </div>
                <div className={cx('pie-chart')}>
                    <PieChart chartData={categoryData} title="Doanh thu theo tháng của từng danh mục" />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
