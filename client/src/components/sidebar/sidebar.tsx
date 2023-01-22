import styles from './sidebar.module.scss';
import { AiFillInfoCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdLocalShipping, MdDashboard } from "react-icons/md";
import { RiTShirt2Fill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import classNames from 'classnames';
export interface SidebarProps {
    className?: string;
}


export const Sidebar = ({ className }: SidebarProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.sidebarUP}>
            <CgProfile className={styles.profil} />
        </div>
        <div className={styles.sidebarMid}>
            <MdDashboard className={styles.sidebtn} />
            <br />
            <RiTShirt2Fill className={styles.sidebtn} />
            <br />
            <FaShoppingBag className={styles.sidebtn} />
            <br />
            <MdLocalShipping className={styles.sidebtn} />
            <br />
            <AiFillInfoCircle className={styles.sidebtn} />
        </div>
        <div className={styles.sidebarBot}>
            <BiLogOut className={styles.sidebtn} />
        </div>
    </div>;
};
