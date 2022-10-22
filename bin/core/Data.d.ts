declare let Data: {
    loadedFiles: any[];
    getFromCookie(name: string): string;
    saveToCookie(data: any, name: string): void;
    clearCookies(): void;
    loadJSONFile(filePath: string): Promise<any>;
};
export { Data };
