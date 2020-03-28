const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const { page = 1} = request.query;
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
        .limit(5)
        .offset((page -1) * 5)
        .where('ong_id', ong_id)
        .select('*');

        return response.json(incidents);

    }
}
  