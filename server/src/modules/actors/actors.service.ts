import Actor from "../actors/actors.model";
import Movie from "../movies/movies.model";

export default class ActorsService {
  static async getAll() {
    return await Actor.findAll();
  }


  static async show(actorId: string) {
    const actor = await Actor.findByPk(actorId, {
      include: [
        {
          model: Movie,
        },
      ],
    });

    if (!actor) {
      throw new Error("Actor with the following id not found");
    }

    return actor;
  }
}