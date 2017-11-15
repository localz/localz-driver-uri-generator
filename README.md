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
```

## Usage

Specify the type of URI, the correct data object, and optionally a callback.

```javascript
import generateURI from 'localz-driver-uri-generator'

const data = {
  user: {
    id: 'techuser1',
    password: '123123',
    firstname: 'Thor',
    lastname: 'Ragnarok',
    mobile: '+61408325678'
  },
  job: {
    id: 'JOB-123',
    start: '2017-11-15T11:14:23+00:00',
    end: '2017-11-15T11:14:23+00:00'
  },
  contact: {
    address: '500 Bourke St, Melbourne, Australia',
    postcode: '3000',
    name: 'Hulk',
    phone: '+61418345678'
  }
}

const uri = generateURI('notify', data, 'someapp://')
```