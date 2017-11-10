# Localz Driver URI Generator

Handles object validation, base64 encoding, and query stringifying.

## Types

#### Notify

For notifying customers of a driver's approach.

**type** - 'notify'
**data schema** - shown using Joi object syntax
```javascript
Joi.object().keys({
  user: Joi.object().required().keys({
    id: Joi.string().required(),
    password: Joi.string(),
    firstname: Joi.string(),
    lastname: Joi.string(),
    mobile: Joi.string()
  }),
  job: Joi.object().required().keys({
    id: Joi.string().required(),
    start: Joi.string(),
    end: Joi.string()
  }),
  contact: Joi.object().required().keys({
    address: Joi.string().required(),
    postcode: Joi.string().required(),
    name: Joi.string(),
    phone: Joi.string()
  })
})
```

## Usage

Specify the type of URI, the correct data object, and optionally a callback.

```javascript
import generateURI from 'localz-driver-uri-generator'

const uri = generateURI('notify', data, 'someapp://')
```