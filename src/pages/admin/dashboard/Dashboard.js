import {useState} from "react";
import PieChart from "~/components/admin/chart/PieChart";
import {CategoryData, RevenueData} from "~/services/fakeData";

import style from './Dashboard.module.scss'
import classNames from "classnames/bind";
import BarCategory from "~/components/admin/chart/BarChart";
import Widget from "~/components/admin/widget/Widget";

const cx = classNames.bind(style);

function Dashboard() {
    const [categoryData, setCategoryData] = useState({
        labels: CategoryData.map(data => data.name),
        datasets: [{
            label: "revenue",
            data: CategoryData.map(data => data.revenue)
        }]
    })

    const [revenueData, setRevenueData] = useState({
        labels: RevenueData.map(data => data.name),
        datasets: [{
            label: 'revenue month',
            data: RevenueData.map(data => data.revenue)
        }]
    })

    return <div className={cx("dashboard")}>
        <div className={cx("widgets")}>
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
        </div>
        <div className="row">
            <div className={cx('pie-chart')}>
                <PieChart chartData={categoryData} title="Doanh thu theo tháng của từng danh mục"/>
            </div>
            <div className={cx('bar-chart')}>
                <BarCategory chartData={revenueData} title="Doanh thu theo thời gian"/>
            </div>
        </div>
    </div>
}

export default Dashboard