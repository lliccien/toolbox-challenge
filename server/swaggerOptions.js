export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'files API',
      version: '1.0.0',
      description: 'Api Rest for files'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      },
      {
        url: 'http://localhost:3500'
      }
    ]
  },
  security: [
    {
      bearerAuth: []
    }
  ],
  apis: ['./src/routes/*.js']
}
