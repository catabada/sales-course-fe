import CardCourse from "~/components/CardCourse";
import styles from './Home.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)
function Home() {
    const data = [
        {
            id: 1,
            category: 'Lập trình - CNTT',
            title: 'Lập trình nodejs cơ bản ',
            description: 'Khóa học gồm 11 bài tổng hợp kiến thức từ cơ bản đến nâng cao giúp học viên có thể thiết kế dự án game và xuất bản game.',
            author: 'Nguyễn Ngọc Dương',
            salesPrice: '399,000 đ',
            price: '599,000 đ',
            isFree: true,
        },
        {
            id: 2,
            category: 'Lập trình - CNTT',
            title: 'Lập trình nodejs cơ bản ',
            description: 'Khóa học gồm 11 bài tổng hợp kiến thức từ cơ bản đến nâng cao giúp học viên có thể thiết kế dự án game và xuất bản game.',
            author: 'Nguyễn Ngọc Dương',
            salesPrice: '399,000 đ',
            price: '599,000 đ',
        },
        {
            id: 3,
            category: 'Lập trình - CNTT',
            title: 'Lập trình nodejs cơ bản ',
            description: 'Khóa học gồm 11 bài tổng hợp kiến thức từ cơ bản đến nâng cao giúp học viên có thể thiết kế dự án game và xuất bản game.',
            author: 'Nguyễn Ngọc Dương',
            salesPrice: '399,000 đ',
        },
        {
            id: 4,
            category: 'Lập trình - CNTT',
            title: 'Lập trình nodejs cơ bản ',
            description: 'Khóa học gồm 11 bài tổng hợp kiến thức từ cơ bản đến nâng cao giúp học viên có thể thiết kế dự án game và xuất bản game.',
            author: 'Nguyễn Ngọc Dương',
            salesPrice: '399,000 đ',
        },

    ]



    return (
        <div className={cx('wrapper')}>
            <div className={cx('course-list')}>
                {
                    data.map(item => (
                        <CardCourse key={item.id} data={item} className={cx('course-item')} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;
