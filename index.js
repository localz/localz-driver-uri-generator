const qs = require('qs')
const base64 = require('base-64')
const Joi = require('joi-browser')

const Protocol = 'localzdriver://'

const NotifyDataSchema = Joi.object().keys({
  user: Joi.object().required().keys({
    id: Joi.string().required(),
    password: Joi.string(),
    firstname: Joi.string(),
    lastname: Joi.string(),
    mobile: Joi.string()
  }),
  job: Joi.object().required().keys({
    id: Joi.string().required(),
    start: Joi.string().isoDate(),
    end: Joi.string().isoDate()
  }),
  contact: Joi.object().required().keys({
    address: Joi.string().required(),
    postcode: Joi.string().required(),
    name: Joi.string(),
    phone: Joi.string()
  })
})

const Types = {
  notify: { 
    path: 'notify/1/',
    schema: NotifyDataSchema
  }
}

function generateURI(type, data, callback) {
  if (!Types.hasOwnProperty(type)) {
    throw new Error(`Type '${type}' is not valid`)
  }

  const Result = Joi.validate(data, Types[type].schema)
  if (Result.error) {
    throw new Error(`Error validating 'data' schema: ${Result.error}`)
  }

  let query = {
    data: base64.encode(JSON.stringify(data))
  }
  if (callback) {
    query.callback = callback
  }

  const StringifiedQuery = qs.stringify(query)

  return `${Protocol}${Paths[type].path}?${StringifiedQuery}`
}
