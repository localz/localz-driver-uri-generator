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
    id: Joi.string().required(), // User ID associated with the order or job. "155176"
    password: Joi.string(), // Static password for the user. "hunter2"
    firstname: Joi.string(), // First name of the user. "Geraint"
    lastname: Joi.string(), // Last name of the user. "Llewelyn"
    mobile: Joi.string() // The phone number for the user. "07432770100"
  }),
  job: Joi.object().required().keys({
    id: Joi.string().required(), // Order or job number that is unique. "00000155X1AS"
    start: Joi.string().isoDate(), // The start of the timebox for the order or job. "31/12/2000 12:00:59"
    end: Joi.string().isoDate() // The end of the timebox for the order or job. "31/12/2000 12:00:59"
  }),
  contact: Joi.object().required().keys({
    address: Joi.string().required(), // Address of the destination, one line, including postcode. "742 Evergreen Terrace, London, SW11 5UR"
    postcode: Joi.string().required(), // Postcode of the destination, used as a fallback. "SW11 5UR"
    name: Joi.string(), // Name of the intended contact. "Bruce"
    phone: Joi.string() // The phone number for the contact. "+447432770200"
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