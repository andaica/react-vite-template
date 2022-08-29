const storage = {
    saveData: (key: string, data: any) => {
        localStorage.setItem(key, JSON.stringify(data));
    },
    getData: (key: string) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
};
export default storage;
