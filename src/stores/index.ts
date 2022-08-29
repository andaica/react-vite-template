import UserStore from './user';
import UIStore from './ui';

const stores = {
  uiStore: new UIStore(),
  sessionStore: new UserStore(),
};

export default stores;
