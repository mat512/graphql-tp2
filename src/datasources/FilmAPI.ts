import { RESTDataSource } from "@apollo/datasource-rest";
import { FilmModel, PeopleModel } from "../models";

export class FilmAPI extends RESTDataSource {
    baseURL = "https://ghibliapi.dev/";

    getFilms() {
        return this.get<FilmModel[]>("films");
    }

    getFilmBy(id: string[]) {
        let requests = [];

        id.forEach((x) => {
            // Get only UID in URL
            const uid = x.split("/")[4];

            if (uid !== "") requests.push(this.get<FilmModel>(`films/${uid}`));
        });

        return requests;
    }

    getPeoples() {
        return this.get<PeopleModel[]>("people");
    }

    getPeopleBy(id: string[]) {
        let requests = [];
        
        id.forEach((x) => {
            const uid = x.split("/")[4];

            if (uid !== "") requests.push(this.get<PeopleModel>(`people/${uid}`));
        });

        return requests;
    }
}
