import { action, makeObservable, observable } from "mobx";

class SettingsStore {
    language = "";
    theme = "";
    loggedIn = false;

    constructor() {
        makeObservable(this, {
            language: observable,
            theme: observable,
            loggedIn: observable,
            setTheme: action,
        });
    }

    setTheme(theme: string) {
        this.theme = theme;
    }
}

const settingsStore = new SettingsStore();
export default settingsStore;
