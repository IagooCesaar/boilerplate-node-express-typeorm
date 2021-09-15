export const errors = {
  "400": {
    description:
      "Bad Request. Os parâmetros ou propriedades enviados não satisfizeram os critérios estabelecido",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            errorCode: {
              type: "string",
              required: true,
              description:
                "Identifica o código único do erro apontado pelo sistema",
            },
            message: {
              type: "string",
              description:
                "Descreve o erro apontado pelo sistema. Não será apresentado se 'errorCode' for 'ValidationsErrors'",
            },
            errors: {
              type: "object",
              description:
                "Objeto contento erros de validação de propriedades. Será apresentado se 'errorCode' for 'ValidationsErrors'",
              properties: {
                propName: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      description: "Nome do error identificado",
                    },
                    value: {
                      type: "string",
                      description: "Valor informado",
                    },
                    path: {
                      type: "string",
                      description: "Identificação da propriedade",
                    },
                    type: {
                      type: "string",
                      description: "Classificação do erro de validação",
                    },
                    errors: {
                      type: "string",
                      description: "Lista de erros encontrados",
                    },
                    message: {
                      type: "string",
                      description: "Mensagem do erro encontrado",
                    },
                    params: {
                      type: "object",
                      description: "Parâmetro da identificação do erro",
                      properties: {
                        value: {
                          type: "string",
                          description: "Valor informado com correções",
                        },
                        originalValue: {
                          type: "string",
                          description: "Valor informado originalmente",
                        },
                        path: {
                          type: "string",
                          description: "Identificação da propriedade",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "404": {
    description:
      "Bad Request. Os parâmetros ou propriedades enviados não satisfizeram os critérios estabelecido",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            errorCode: {
              type: "string",
              required: true,
              description:
                "Identifica o código único do erro apontado pelo sistema",
            },
            message: {
              type: "string",
              required: true,
              description: "Descreve o erro apontado pelo sistema",
            },
          },
        },
      },
    },
  },
};
