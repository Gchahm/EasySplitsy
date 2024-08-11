import * as React from 'react';
import {useContext} from 'react';
import {IBillTransformerProps} from '.';
import {FilePicker} from "../../components/filePicker";
import {createUploadFileApiBillsPost} from "../../client";
import {BillContext} from "../../businessLogic/billState";
import {IBillItem} from "../../interfaces/IBillItem";


export const BillTransformer: React.FC<IBillTransformerProps> = () => {
    const billContext = useContext(BillContext);
    const [isWaiting, setIsWaiting] = React.useState(false);
    const handleFileChange = (file: File) => {
        setIsWaiting(true);
        createUploadFileApiBillsPost({body: {file}}).then((response) => {
            const items: IBillItem[] = response.data?.items.map((item, id) => {
                return {
                    id: id.toString(),
                    ...item,
                };
            }) || [];
            billContext.setBill(items);
        });
    };

    return (
        <>
            {isWaiting && <div>Waiting for file to upload</div>}
            {!isWaiting && <FilePicker onFileChange={handleFileChange}/>}
        </>
    );
};