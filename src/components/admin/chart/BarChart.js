import { Bar } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';
import style from './Chart.module.scss';
import classNames from 'classnames/bind';
import { Box, TextField } from '@mui/material';
import { CategoryData, RevenueData } from '~/services/fakeData';
const cx = classNames.bind(style);

function BarChart(props) {
    return (
        <div className={cx('chart')}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className={cx('title')}>{props.title}</div>
                <TextField
                    select
                    autoComplete="off"
                    InputProps={{
                        style: { fontSize: '1.5rem' },
                    }}
                    sx={{ marginTop: '1rem' }}
                    variant="outlined"
                    name="category"
                    onChange={(e) => props.parentCallback(e)}
                    FormHelperTextProps={{ style: { fontSize: 12 } }}
                    InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                    SelectProps={{
                        native: true,
                        style: { fontSize: '1.6rem' },
                    }}
                    label="Chọn thời gian"
                >
                    <option value="day-10">10 ngày trở lại đây</option>
                    <option value="month-3">3 tháng trở lại đây</option>
                    <option value="month-6">6 tháng trở lại đây</option>
                    <option value="year-1">1 năm</option>
                </TextField>
            </Box>
            <Bar
                data={{
                    labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
                    datasets: [
                        {
                            label: 'Population (millions)',

                            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
                            data: [2478, 5267, 734, 784, 433],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Predicted world population (millions) in 2050',
                    },
                }}
            />
        </div>
    );
}

export default BarChart;
