import { RESTDataSource } from "@apollo/datasource-rest";
import { FilmModel, PeopleModel } from "../models";

export class FilmAPI extends RESTDataSource {
    baseURL = "https://ghibliapi.dev/";

    getFilms() {
        return this.get<FilmModel[]>("films");
    }

    getFilmBy(id: string[]) {
        let list = [];
        id.forEach((x) => {
            list.push(this.get<FilmModel>(`films/${x.split("/")[4]}`));
        });

        return list;
    }

    getPeoples() {
        return this.get<PeopleModel[]>("people");
    }

    getPeopleBy(id: string[]) {
        let list = [];
        id.forEach((x) => {
            list.push(this.get<PeopleModel>(`people/${x.split("/")[4]}`));
        });

        return list;
    }
}
