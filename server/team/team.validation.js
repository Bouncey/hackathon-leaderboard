const Joi = require('joi');

module.exports = {
  // POST /api/users
  createTeam: {
    body: {
      name: Joi.string().required(),
      collaborators: Joi.array().items(Joi.string()),
      githubRepository: Joi.string().required(),
      siteUrl: Joi.string().required(),
      isOnlineHackathon: Joi.boolean(),
      sponsorApis: Joi.object({
        Clarifai: Joi.boolean(),
        Fauna: Joi.boolean(),
        Formspree: Joi.boolean(),
        Hasura: Joi.boolean(),
        Pilon: Joi.boolean()
      })
    }
  }
};
