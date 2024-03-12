import { FilmAPI } from "./datasources/FilmAPI";

export type DataSourceContext = {
    dataSources: {
        filmApi: FilmAPI;
    };
};
