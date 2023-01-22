import { createBoard } from '@wixc3/react-board';
import { Sidebar } from '../../../components/sidebar/sidebar';

export default createBoard({
    name: 'Sidebar',
    Board: () => <Sidebar />,
    environmentProps: {
        canvasHeight: 764,
        canvasWidth: 110,
        windowWidth: 1024,
        windowHeight: 768
    }
});
