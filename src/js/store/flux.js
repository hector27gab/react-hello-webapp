const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      firstData: "Hello World",
      apiURL: "https://rickandmortyapi.com/api/character",
      characters: [],
    },
    actions: {
      changeData: (newData) => {
        setStore({ firstData: newData });
      },
      getApi: async () => {
        const store = getStore();
        const response = await fetch(store.apiURL);
        const data = await response.json();
        setStore({ characters: data.results });
      },
    },
  };
};

export default getState;
