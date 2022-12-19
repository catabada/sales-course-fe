import {Box, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import DataTableBase from "~/components/admin/datatable/DataTableBase";
import {getCategoriesSearch} from "~/redux/category/categorySlice";
import {CategoryAdd, CategoryDelete, CategoryUpdate} from "~/pages/admin/category/crud";


function AdminCategory() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoryReducer.categories)
    useEffect(() => {
        dispatch(getCategoriesSearch({}))
    }, [dispatch])

    const columns = [
        {
            name: 'Tên danh mục',
            selector: row => row.name,
            sortable: true,
            width: "200px"
        },
        {
            name: 'Danh mục cha',
            selector: row => row.parent,
            width: "200px"

        },
        {
            name: 'Trạng thái',
            selector: row => row.state,
            width: "110px"
        },
        {
            name: 'Chức năng',
            selector: row => row.option,
            minWidth: "200px"
        },
    ];

    const data = categories?.map((item) => {
        return {
            id: item.id,
            name: item?.name,
            parent: item.category === null ? null : item?.category.name,
            state: <Typography sx={{fontSize: '1.6rem'}} variant="body1"
                               className='text-success'>{item.state}</Typography>,
            option: <Box sx={{display: 'flex'}}>
                <CategoryUpdate id={item?.id}/>
                <CategoryDelete id={item?.id} name={item?.name}/>
            </Box>
        }
    })
    return <Box sx={{height: '80vh', width: '100%'}}>
        <Box sx={{height: '10vh', display: 'flex', alignItems: 'center'}}>
            <Typography variant="h5" sx={{p: 1, fontWeight: 'bold', fontSize: '2rem'}}>Quản lý danh mục</Typography>
            <CategoryAdd/>
        </Box>
        <DataTableBase columns={columns} data={data}/>
    </Box>
}

export default AdminCategory;