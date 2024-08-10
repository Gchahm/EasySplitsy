import * as React from 'react';
import {IBillTransformerProps} from '.';
import {FilePicker} from "../../components/filePicker";
import {getBillDetails} from "../../businessLogic/api/GetBillDetails";


export const BillTransformer: React.FC<IBillTransformerProps> = () => {

    const handleFileChange = (file: File) => {
        getBillDetails(file).then((billDetails) => {
            console.log(billDetails);
        });
    };

    return (
        <FilePicker onFileChange={handleFileChange}/>
    );
};