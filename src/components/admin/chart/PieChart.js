import {Pie} from "react-chartjs-2";
import {Chart as ChartJs} from 'chart.js/auto'
import style from './Chart.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function PieChart({chartData, title}) {
    return <div className={cx('chart')}>
        <div className={cx('title')}>{title}</div>
        <Pie data={chartData}/>
    </div>
}

export default PieChart