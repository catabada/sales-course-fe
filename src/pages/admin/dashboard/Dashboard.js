import { useState } from 'react';
import PieChart from '~/components/admin/chart/PieChart';
import { CategoryData, RevenueData } from '~/services/fakeData';

import style from './Dashboard.module.scss';
import classNames from 'classnames/bind';
import BarChart from '~/components/admin/chart/BarChart';
import Widget from '~/components/admin/widget/Widget';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(style);

function Dashboard() {
    const dispatch = useDispatch();

    const [categoryData, setCategoryData] = useState({
        labels: CategoryData.map((data) => data.name),
        datasets: [
            {
                label: 'revenued',
                data: CategoryData.map((data) => data.revenue),
            },
        ],
    });

    const [revenueData, setRevenueData] = useState({
        labels: RevenueData.map((data) => data.name),
        datasets: [
            {
                label: 'Thu nhập theo tháng',
                data: RevenueData.map((data) => data.revenue),
            },
        ],
        
    });
    const handleInputChange = (e) => {
        switch (e.target.value) {
            case 'month-3':
                console.log('3thang');
                break;
            case 'month-6':
                console.log('6thang');
                break;
            case 'year-1':
                console.log('1nam');
                break;
            default:
                console.log('10ngay');
                break;
        }
    };

    return (
        <div className={cx('dashboard')}>
            {/* <div className={cx('widgets')}>
                <Widget type="user" />
                <Widget type="order" />
                <Widget type="earning" />
                <Widget type="balance" />
            </div> */}
            <div className="row">
                <div className={cx('bar-chart')}>
                    <BarChart
                        chartData={revenueData}
                        title="Doanh thu theo thời gian"
                        parentCallback={handleInputChange}
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
