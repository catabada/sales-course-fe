import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCoursesSearch } from '~/redux/course/courseSlice';
import DataTableBase from '~/components/admin/datatable/DataTableBase';
import { CourseAdd, CourseDelete, CourseUpdate } from '~/pages/admin/course/crud';
import CourseTrash from '~/pages/admin/course/crud/CourseTrash';
import Loading from '~/components/loading/Loading';

function AdminCourse() {
    const dispatch = useDispatch();
    const { courses, isLoading } = useSelector((state) => state.courseReducer);
    useEffect(() => {
        dispatch(getCoursesSearch({}));
    }, [dispatch]);

    console.log(courses);
    // if (isLoading) {
    //     dispatch(getCoursesSearch({}));
    // }
    const columns = [
        {
            name: 'Tên khoá học',
            selector: (row) => row.name,
            sortable: true,
            width: '200px',
        },
        {
            name: 'Danh mục',
            selector: (row) => row.category,
            sortable: true,
            width: '120px',
        },
        {
            name: 'Tác giả',
            selector: (row) => row.lecturer,
            sortable: true,
            width: '150px',
        },
        {
            name: 'Giá gốc',
            selector: (row) => Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(row.oldPrice),
            width: '120px',
        },
        {
            name: 'Giá bán',
            selector: (row) =>
                Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(row.currentPrice),
            width: '120px',
        },
        {
            name: 'Trạng thái',
            selector: (row) => row.state,
            width: '110px',
        },
        {
            name: 'Chức năng',
            selector: (row) => row.option,
            minWidth: '200px',
        },
    ];
    const data = courses?.map((item) => {
        return {
            id: item.id,
            name: item.name,
            oldPrice: item.price,
            currentPrice: item.price - item.price * item.discount,
            category: item.category.name,
            lecturer: item.lecturer.name,
            state: (
                <Typography sx={{ fontSize: '1.6rem' }} variant="body1" className="text-success">
                    {item.state}
                </Typography>
            ),
            option: (
                <Box sx={{ display: 'flex' }}>
                    <CourseUpdate data={item} />
                    <CourseDelete id={item?.id} name={item?.name} />
                </Box>
            ),
        };
    });
    return (
        <Box>
            <Box sx={{ height: '80vh', width: '100%' }}>
                <Box sx={{ height: '10vh', display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h5" sx={{ p: 1, fontWeight: 'bold', fontSize: '2rem' }}>
                        Quản lý khoá học
                    </Typography>
                    <CourseAdd />
                    <CourseTrash />
                </Box>
                <DataTableBase columns={columns} data={data} />
            </Box>

            <Loading open={isLoading} />
        </Box>
    );
}

export default AdminCourse;
