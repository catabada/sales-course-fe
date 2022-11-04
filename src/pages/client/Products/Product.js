import classNames from "classnames/bind";
import Breadcrumb from "~/components/Breadcrumb";
import styles from "./Product.module.scss"

const cx = classNames.bind(styles);
function Product() {
    const data = {
        url: 'https://cdn2.topica.vn/5f990e55cb5acb5e85ce27a9/product/619bceca6d05dc00250104d9',

    }
    return <div className={cx('wrapper')}>
        <Breadcrumb data={data} />
        product
    </div>
};

export default Product;