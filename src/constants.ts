type apiUrlTypes = 'games' | 'leagues' | 'markets' | 'game-odds' | 'futures' | 'future-odds' | 'scores'

const API_ROOT_ENDPOINT = "https://api-external.oddsjam.com/api/feed/";

export const createURL = (apiKey: string) => (type: apiUrlTypes) => `${API_ROOT_ENDPOINT}${type}/?key=${apiKey}&`