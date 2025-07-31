interface ImportMetaEnv {
    readonly DEV_SERVER_PORT?: string;
    readonly ASPNETCORE_HTTPS_PORT?: string;
    readonly ASPNETCORE_URLS?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
