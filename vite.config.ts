import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        react(),
        dts({ include: ["src"], insertTypesEntry: true }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "SchemaFormsReact",
            formats: ["es", "cjs"],
            fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
        },
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "react/jsx-runtime",
                "react-hook-form",
                "lucide-react",
                "@dnd-kit/core",
                "@dnd-kit/sortable",
                "@dnd-kit/utilities",
            ],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "jsxRuntime",
                    "react-hook-form": "ReactHookForm",
                    "lucide-react": "LucideReact",
                },
            },
        },
        sourcemap: true,
        minify: false,
    },
});
