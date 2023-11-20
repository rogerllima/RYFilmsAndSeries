import RoutesApp from './routes'
import GlobalStyle from './styles/global'

import {register} from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const App = () => {
    return (
        <>
        <GlobalStyle />
        <RoutesApp />
        </>)
}

export default App