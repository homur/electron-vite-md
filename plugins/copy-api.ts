// /plugins/copy-api.ts

import fs from "fs";
import path from "path";
import { Plugin } from "vite";

// Custom Vite plugin to copy API assets during the build
export function copyApi(): Plugin {
    return {
        name: "copy-api", // Plugin name

        // This hook runs after the build finishes, copying the to the build output
        writeBundle() {
            try {
                const srcPath = path.resolve(__dirname, "../src/api");
                const destPath = path.resolve(__dirname, "../.vite/build/api");

                // Ensure the destination directory exists
                fs.mkdirSync(destPath, { recursive: true });

                // Copy the API folder to the dist folder
                fs.cpSync(srcPath, destPath, { recursive: true });

                console.log("API assets copied successfully!");
            } catch (error) {
                console.error("Error copying API assets:", error);
            }
        },
    };
}
