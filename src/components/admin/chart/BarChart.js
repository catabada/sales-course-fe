import {Bar} from "react-chartjs-2";
import {Chart as ChartJs} from 'chart.js/auto'
import style from './Chart.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function BarChart({chartData, title}) {
    return (<div className={cx('chart')}>
        <div className={cx('title')}>{title}</div>
        <Bar data={chartData}/>
    </div>)
}

export default BarChart;