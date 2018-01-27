import { StackNavigator } from "react-navigation";
import Viewer from './src/Viewer';

export default App = StackNavigator({
  Viewer: { screen: Viewer }
}, { headerMode: 'screen' });