import Router from 'express'
import { getFilesData, getFilesList } from '../controllers/files.controller.js'
const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Lines:
 *      type: object
 *      properties:
 *        text:
 *          type: string
 *        number:
 *          type: string
 *        hex:
 *          type: string
 *    FilesData:
 *      type: object
 *      properties:
 *        file:
 *          type: string
 *          description: The name of file.
 *        lines:
 *          type: array
 *          description: The data of files.
 *          items:
 *              $ref: '#/components/schemas/Lines'
 *    FilesList:
 *      type: object
 *      properties:
 *        files:
 *          type: array
 *          items:
 *            type: string
 *            description: The name of file.
 *    Error:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: Error definicion.
 */

/**
 * @swagger
 *  tags:
 *    name: Files
 *    description: Files endpoints.
 */

/**
 * @swagger
 * /files/data:
 *  get:
 *    summary: Return all files data.
 *    tags: [Files]
 *    parameters:
 *      - in: query
 *        name: fileName
 *        schema:
 *          type: string
 *        description: The name of file (opcional).
 *        required: false
 *    responses:
 *      200:
 *        description: Array files data.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/FilesData'
 *      404:
 *        description: fobbiden
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              message: File no found
 *      500:
 *        description: Internal Server Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              message: Error getting files data
 */
router.get('/files/data', getFilesData)

/**
 * @swagger
 * /files/list:
 *  get:
 *    summary: Return all files list.
 *    tags: [Files]
 *    responses:
 *      200:
 *        description: Array list files.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/FilesList'
 *      500:
 *        description: Internal Server Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              message: Error getting files data
 */
router.get('/files/list', getFilesList)

export default router
