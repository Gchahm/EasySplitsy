import { uploadApiV1ReceiptsUploadPost } from "ez-split-clients";
import { IReceiptItem } from "ez-split-interfaces";

export interface IUploadRequest {
    baseUrl: string;
    file: File;
    bodySerializer?: (body: File) => FormData;
}

export class EzSplitApi {
    public upload = async (request: IUploadRequest): Promise<IReceiptItem[]> => {
        const { baseUrl, file, bodySerializer } = request;

        try {
            const response = await uploadApiV1ReceiptsUploadPost({
                baseUrl,
                bodySerializer,
                body: { file },
            });
            return (
                response.data?.items.map((item, id) => {
                    return {
                        id: id.toString(),
                        ...item,
                    };
                }) || []
            );
        } catch (error) {
            throw new Error("Failed to upload receipt");
        }
    };
}
