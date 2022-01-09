import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';

export interface LoginResponseData {
  id: number;
  name: string;
  token: string;
}

export interface AuthLoginStoreState {
  loading: boolean;
  loginResponseData: LoginResponseData | null;
}

export const authLoginStoreModule: Module<AuthLoginStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    loading: false,
    loginResponseData: null,
  } as AuthLoginStoreState,

  /**
   * 获取器
   */
  getters: {
    loading(state) {
      return state.loading;
    },

    LoginResponseData(state) {
      return state.loginResponseData;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setLoginResponseData(state, data) {
      state.loginResponseData = data;
    },
  },

  /**
   * 动作
   */
  actions: {
    async login({ commit, dispatch }, data) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.post('/login', data);
        console.log('response', response);
        commit('setLoginResponseData', response.data.data);
        commit('setLoading', false);
        commit('auth/setToken', response.data.data.token, { root: true });

        dispatch('auth/configApiHttpClientAuthHeader', response.data.data.token, { root: true });

        return response;
      } catch (error) {
        commit('setLoading', false);

        throw error;
      }
    },
  },
};