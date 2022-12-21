import { Bar } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';
import style from './Chart.module.scss';
import classNames from 'classnames/bind';
import { Box, TextField } from '@mui/material';
import { CategoryData, RevenueData } from '~/services/fakeData';
import { useState } from 'react';
const cx = classNames.bind(style);

function BarChart(props) {
    console.log(props.chartData);
    return (
        <div className={cx('chart')}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className={cx('title')}>{props.title}</div>
                <Box>
                    <TextField
                        select
                        autoComplete="off"
                        InputProps={{
                            style: { fontSize: '1.5rem' },
                        }}
                        sx={{ marginTop: '1rem', marginRight: '2rem' }}
                        variant="outlined"
                        name="category"
                        onChange={(e) => props.parentHandleSelect(e)}
                        FormHelperTextProps={{ style: { fontSize: 12 } }}
                        InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                        SelectProps={{
                            native: true,
                            style: { fontSize: '1.6rem' },
                        }}
                        label="Chọn thời gian"
                    >
                        <option >Chọn thời gian</option>
                        <option value="day">Theo ngày</option>
                        <option value="month">Theo tháng</option>
                        <option value="year">Theo năm</option>
                    </TextField>
                    {
                        props.parentParam === "day" ?
                            <TextField
                                select
                                autoComplete="off"
                                autoSave='off'
                                InputProps={{
                                    style: { fontSize: '1.5rem' },
                                }}
                                sx={{ marginTop: '1rem' }}
                                variant="outlined"
                                name="category"
                                onChange={(e) => props.parentChooseData(e)}
                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                SelectProps={{
                                    native: true,
                                    style: { fontSize: '1.6rem' },
                                }}
                                label="Chọn thời gian"
                            >
                                <option selected>Chọn thời gian</option>
                                <option value="10">10 ngày trở lại đây</option>
                                <option value="30">30 ngày trở lại đây</option>
                            </TextField>
                            : props.parentParam === "month" ?
                                <TextField
                                    select
                                    autoComplete="off"
                                    autoSave='off'
                                    InputProps={{
                                        style: { fontSize: '1.5rem' },
                                    }}
                                    sx={{ marginTop: '1rem' }}
                                    variant="outlined"
                                    name="category"
                                    onChange={(e) => props.parentChooseData(e)}
                                    FormHelperTextProps={{ style: { fontSize: 12 } }}
                                    InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                    SelectProps={{
                                        native: true,
                                        style: { fontSize: '1.6rem' },
                                    }}
                                    label="Chọn thời gian"
                                >
                                    <option>Chọn thời gian</option>
                                    <option value="3">3 tháng trở lại đây</option>
                                    <option value="6">6 tháng trở lại đây</option>
                                </TextField>
                                :
                                <TextField
                                    select
                                    autoComplete="off"
                                    autoSave='off'
                                    InputProps={{
                                        style: { fontSize: '1.5rem' },
                                    }}
                                    sx={{ marginTop: '1rem' }}
                                    variant="outlined"
                                    name="category"
                                    onChange={(e) => props.parentChooseData(e)}
                                    FormHelperTextProps={{ style: { fontSize: 12 } }}
                                    InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                    SelectProps={{
                                        native: true,
                                        style: { fontSize: '1.6rem' },
                                    }}
                                    label="Chọn thời gian"
                                >
                                    <option>Chọn thời gian</option>
                                    <option value="5">5 năm trở lại đây</option>

                                </TextField>
                    }

                </Box>
            </Box>
            {
                props?.chartData !== undefined ? <Bar data={props.chartData} /> : <></>
            }
        </div>
    );
}

export default BarChart;
