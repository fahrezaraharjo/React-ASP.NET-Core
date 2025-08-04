import { fileURLToPath, URL } from 'node:url';
import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseFolder =
    process.env.APPDATA && process.env.APPDATA !== ''
        ? `${process.env.APPDATA}/ASP.NET/https`
        : `${process.env.HOME}/.aspnet/https`;

const certificateName = 'reactapp1.client';
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

if (!fs.existsSync(baseFolder)) {
    fs.mkdirSync(baseFolder, { recursive: true });
}

if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
    const result = child_process.spawnSync(
        'dotnet',
        [
            'dev-certs',
            'https',
            '--export-path',
            certFilePath,
            '--format',
            'Pem',
            '--no-password',
        ],
        { stdio: 'inherit' }
    );

    if (result.status !== 0) {
        throw new Error('Could not create certificate.');
    }
}

const target = process.env.ASPNETCORE_HTTPS_PORT
    ? `https://localhost:${process.env.ASPNETCORE_HTTPS_PORT}`
    : process.env.ASPNETCORE_URLS
        ? process.env.ASPNETCORE_URLS.split(';')[0]
        : 'https://localhost:7131';

const config: UserConfig = {
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@ui': path.resolve(__dirname, './src/components/ui'),
            '@components': path.resolve(__dirname, './src/components/components'),
            '@sections': path.resolve(__dirname, './src/components/sections'),
            '@layouts': path.resolve(__dirname, './src/components/layouts'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@types': path.resolve(__dirname, './src/types'),
        },
    },
    server: {
        port: parseInt(process.env.DEV_SERVER_PORT || '59097', 10),
        https: {
            key: fs.readFileSync(keyFilePath),
            cert: fs.readFileSync(certFilePath),
        },
        proxy: {
            '^/weatherforecast': {
                target,
                secure: false,
            },
            '^/api/.*': {
                target,
                secure: false,
                changeOrigin: true,
                rewrite: (path) => path, 
            },
        },
    },

};

export default defineConfig(config);
