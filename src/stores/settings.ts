import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./_root";

export class SettingsStore {
    language = "";
    theme = "";
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        makeObservable(this, {
            language: observable,
            theme: observable,
            setTheme: action,
        });
        this.rootStore = rootStore;
    }

    setTheme(theme: string) {
        this.theme = theme;
    }
}

export default SettingsStore;
