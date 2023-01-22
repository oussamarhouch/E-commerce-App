import { createBoard } from '@wixc3/react-board';
import { Sidebar } from '../../components/sidebar/sidebar';
import { HomeMenu } from '../../components/home-menu/home-menu';

export default createBoard({
    name: 'Home',
    Board: () => <div>
        <div>
            <Sidebar /></div>
        <div>
            <HomeMenu></HomeMenu>
        </div></div>
});
