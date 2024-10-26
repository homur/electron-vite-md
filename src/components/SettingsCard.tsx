import { useEffect, useState } from "react";
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
import { Moon, Sun, Github } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { setAppLanguage } from "@/helpers/language_helpers";
import langs from "@/localization/langs";
import { toggleTheme } from "@/helpers/theme_helpers";
import { ThemeMode } from "@/lib/types/theme-mode";
import settingsStore from "@/stores/settings";

export function SettingsCardComponent() {
    const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>();
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const localTheme = localStorage.getItem("theme") as ThemeMode | null;

    useEffect(() => {
        setIsDarkMode(localTheme === "dark");
        console.log("Current theme is: ", localTheme);
    }, [localTheme]);

    const handleGithubLogin = () => {
        // Placeholder for GitHub login logic
        console.log("GitHub login clicked");
    };

    const onValueChange = (value: string) => {
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
                        <Label htmlFor="dark-mode">Appearance</Label>
                        <p className="text-sm text-muted-foreground">
                            {isDarkMode ? "Dark" : "Light"} mode
                        </p>
                    </div>
                    <Switch
                        id="dark-mode"
                        checked={settingsStore.theme === "dark"}
                        onCheckedChange={toggleTheme}
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                    </Switch>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select value={currentLang} onValueChange={onValueChange}>
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
}
