import { action, makeObservable, observable, runInAction, computed } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { get, post, setAuthorization } from 'services/api';
import { UserProfile } from 'types/user';

class UserStore {
    constructor() {
        makeObservable(this);
        makePersistable(this, {
            name: 'Session',
            properties: ['session'],
            storage: localStorage
        }).then(
            action(() => {
                this.isInited = true;
                setAuthorization(this.session?.token || '');
            })
        );
    }

    @observable isInited: boolean = false;
    @observable session?: UserProfile & { token: string };

    @computed get isLogined() {
        return this.session && this.session.token != '';
    }

    login = async (email: string, password: string) => {
        const resLogin = await post('login', { email, password });
        runInAction(() => {
            this.session = { token: resLogin.token, ...resLogin.user };
        });
        setAuthorization(resLogin.token);
        return resLogin.user;
    };

    getMyProfile = async (): Promise<UserProfile> => {
        let res = await get('profile', {});
        runInAction(() => {
            this.session = { ...this.session, ...res };
        });
        return res;
    };

    logout = async (): Promise<boolean> => {
        await post('logout', {});
        runInAction(() => {
            this.session = undefined;
        });
        setAuthorization('');
        return true;
    };
}

export default UserStore;
