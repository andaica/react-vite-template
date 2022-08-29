import { action, makeObservable, observable } from 'mobx';
import { makeUuid } from 'utils';

class UIStore {
    constructor() {
        makeObservable(this);
    }

    @observable isShowLoading: boolean = false;
    loadingStack: Array<{ id: string; timeout: number }> = [];

    @action
    showLoading = (duration?: number): string => {
        this.isShowLoading = true;
        const loadingId = makeUuid(10);
        const timeout = setTimeout(() => {
            this.hideLoading(loadingId);
        }, duration || 10000);
        this.loadingStack.push({ id: loadingId, timeout });
        return loadingId;
    };

    @action
    hideLoading = (loadingId: string) => {
        const index = this.loadingStack.findIndex((item) => item.id === loadingId);
        if (index > -1) {
            clearTimeout(this.loadingStack[index].timeout);
            this.loadingStack.splice(index, 1);
        }
        if (this.loadingStack.length === 0) {
            this.isShowLoading = false;
        }
    };
}

export default UIStore;
