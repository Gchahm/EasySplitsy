// This file is auto-generated by @hey-api/openapi-ts

export const $Body_create_upload_file_api_bills__post = {
    properties: {
        file: {
            type: 'string',
            format: 'binary',
            title: 'File'
        }
    },
    type: 'object',
    required: ['file'],
    title: 'Body_create_upload_file_api_bills__post'
} as const;

export const $HTTPValidationError = {
    properties: {
        detail: {
            items: {
                '$ref': '#/components/schemas/ValidationError'
            },
            type: 'array',
            title: 'Detail'
        }
    },
    type: 'object',
    title: 'HTTPValidationError'
} as const;

export const $Receipt = {
    properties: {
        items: {
            items: {
                '$ref': '#/components/schemas/ReceiptItem'
            },
            type: 'array',
            title: 'Items'
        }
    },
    type: 'object',
    required: ['items'],
    title: 'Receipt'
} as const;

export const $ReceiptItem = {
    properties: {
        name: {
            type: 'string',
            title: 'Name'
        },
        price: {
            type: 'number',
            title: 'Price'
        },
        quantity: {
            type: 'integer',
            title: 'Quantity'
        },
        total: {
            type: 'number',
            title: 'Total'
        }
    },
    type: 'object',
    required: ['name', 'price', 'quantity', 'total'],
    title: 'ReceiptItem'
} as const;

export const $ValidationError = {
    properties: {
        loc: {
            items: {
                anyOf: [
                    {
                        type: 'string'
                    },
                    {
                        type: 'integer'
                    }
                ]
            },
            type: 'array',
            title: 'Location'
        },
        msg: {
            type: 'string',
            title: 'Message'
        },
        type: {
            type: 'string',
            title: 'Error Type'
        }
    },
    type: 'object',
    required: ['loc', 'msg', 'type'],
    title: 'ValidationError'
} as const;