import { createStore } from 'vuex';
import { authStoreModule, AuthStoreState } from '../auth/auth.store';
import { postStoreModule, PostStoreState } from '../post/post.store';
import { localStorageStorePlugin } from './app.store.plugin';
import { layoutStoreModule, LayoutStoreState } from './layout/layout.store';
import { appNotificationStoreModule, AppNotificationStoreState } from './notification/app-notification.store';

export interface RootState {
  appName: string;
  post: PostStoreState;
  layout: LayoutStoreState;
  auth: AuthStoreState;
  notification: AppNotificationStoreState;
}

/**
 * 创建 Store
 */
const store = createStore({
  state: {
    appName: 'IMAGE',
  } as RootState,

  modules: {
    post: postStoreModule,
    layout: layoutStoreModule,
    auth: authStoreModule,
    notification: appNotificationStoreModule,
  },

  plugins: [localStorageStorePlugin]
});

/**
 * 默认导出
 */
export default store;
