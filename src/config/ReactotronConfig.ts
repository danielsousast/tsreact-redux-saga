import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';


  const tron = Reactotron
    .configure()
    .use(reactotronRedux())

    .connect();

export default tron;
