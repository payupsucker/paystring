import * as express from 'express'

import { getUser, postUser, deleteUser } from '../services/users'

import API from './API'
import putUser from './users'

const privateAPIRouter = express.Router()

/**
 * routes for the private API so that authorized parties can
 * post payment pointer mappings to the PayID DB
 */
privateAPIRouter
  .get('/', express.urlencoded(), getUser, API.setStatusToSuccessMiddleware())
  .post('/', express.json(), postUser, API.setStatusToSuccessMiddleware())
  .put('/', express.json(), putUser, API.setStatusToSuccessMiddleware())
  .delete('/', deleteUser, API.setStatusToSuccessMiddleware())

export default privateAPIRouter
