import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Github } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { setAppLanguage } from "@/helpers/language_helpers";
import langs from "@/localization/langs";
import { toggleTheme } from "@/helpers/theme_helpers";
import { store } from "@/stores/_root";
import { observer } from "mobx-react-lite";

export const SettingsCardComponent = observer(() => {
    const isDarkMode = store.settingsStore.theme === "dark";
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    const handleGithubLogin = () => {
        // Placeholder for GitHub login logic
        console.log("GitHub login clicked");
    };

    const onLanguageChange = (value: string) => {
        setAppLanguage(value, i18n);
    };

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>{t("settings.title")}</CardTitle>
                <CardDescription>{t("settings.description")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label htmlFor="dark-mode">{t("settings.appearance")}</Label>
                        <p className="text-sm text-muted-foreground">
                            {store.settingsStore.theme} mode
                        </p>
                    </div>
                    <Switch
                        id="dark-mode"
                        checked={isDarkMode}
                        onCheckedChange={toggleTheme}
                        aria-label="Toggle dark mode"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="language">{t("settings.language")}</Label>
                    <Select value={currentLang} onValueChange={onLanguageChange}>
                        <SelectTrigger id="language" className="w-full">
                            <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                            {langs.map((lang) => (
                                <SelectItem
                                    key={lang.key}
                                    value={lang.key}
                                >{`${lang.prefix} ${lang.nativeName}`}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="pt-2">
                    <Button variant="outline" className="w-full" onClick={handleGithubLogin}>
                        <Github className="mr-2 h-4 w-4" />
                        Login with GitHub
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
});
