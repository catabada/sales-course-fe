import style from './AdminLayout.module.scss'
import classNames from "classnames/bind";
import SideBar from "~/components/admin/sidebar/SideBar";
import NavBar from "~/components/admin/navbar/NavBar";

const cx = classNames.bind(style);

function AdminLayout({children}) {

    return (
        <div className={cx('app-content')}>
            <div className="row g-0">
                <div className="col-2">
                    <SideBar/>
                </div>
                <div className="col-10">
                    <NavBar/>
                    <div className="container">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default AdminLayout;