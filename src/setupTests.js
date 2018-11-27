import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import fetch from "whatwg-fetch";
global.fetch = fetch;