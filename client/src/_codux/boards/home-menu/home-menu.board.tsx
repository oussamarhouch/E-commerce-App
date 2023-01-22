import { createBoard } from '@wixc3/react-board';
import { HomeMenu } from '../../../components/home-menu/home-menu';

export default createBoard({
    name: 'HomeMenu',
    Board: () => <HomeMenu className="menu" />,
    environmentProps: {
        canvasWidth: 914,
        canvasHeight: 638
    }
});
