const settings = {
    dev: {
        apiUrl: "https://rickandmortyapi.com/api"
    }
};

const getCurrentSettings = () => {
    return settings.dev;
};

export default getCurrentSettings();