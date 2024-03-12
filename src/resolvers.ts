import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
    Query: {
        getFilms: (parent, args, context, info) => {
            return context.dataSources.filmApi.getFilms();
        },
        getPeople: (parent, args, context, info) => {
            return context.dataSources.filmApi.getPeoples();
        },
    },

    Film: {
        people: (parent, args, context, info) => {
            return context.dataSources.filmApi.getPeopleBy(parent.people);
        },
    },

    People: {
        eyeColor: ({eye_color}) => eye_color,
        films: (parent, args, context, info) => {
            return context.dataSources.filmApi.getFilmBy(parent.films);
        },
    },
};
