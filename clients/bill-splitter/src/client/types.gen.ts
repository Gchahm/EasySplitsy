// This file is auto-generated by @hey-api/openapi-ts

export type Body_create_upload_file_api_bills__post = {
    file: (Blob | File);
};

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type Receipt = {
    items: Array<ReceiptItem>;
};

export type ReceiptItem = {
    name: string;
    price: number;
    quantity: number;
    total: number;
};

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type GetReceiptApiBillsGetResponse = Receipt;

export type GetReceiptApiBillsGetError = unknown;

export type CreateUploadFileApiBillsPostData = {
    body: Body_create_upload_file_api_bills__post;
};

export type CreateUploadFileApiBillsPostResponse = Receipt;

export type CreateUploadFileApiBillsPostError = HTTPValidationError;

export type $OpenApiTs = {
    '/api/bills/': {
        get: {
            res: {
                /**
                 * Successful Response
                 */
                '200': Receipt;
            };
        };
        post: {
            req: CreateUploadFileApiBillsPostData;
            res: {
                /**
                 * Successful Response
                 */
                '200': Receipt;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
};