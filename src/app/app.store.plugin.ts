import { Plugin } from "vuex";
import { setStorage } from "./app.service";
import { RootState } from "./app.store";

/**
 * 本地存储
 */
export const localStorageStorePlugin: Plugin<RootState> = store => {
  store.subscribe(mutation => {
    switch (mutation.type) {
      case 'layout/setTheme':
        setStorage('theme', mutation.payload);
        break;
    }
  })
}