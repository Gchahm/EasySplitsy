import * as React from "react";
import { IBillTransformerProps } from ".";
import { FilePicker } from "../../components/filePicker";
import { createUploadFileApiBillsPost } from "../../client";
import { useBill } from "../../businessLogic/billProvider";
import { CircularProgress } from "@mui/material";
import { IBillItem } from "../../interfaces";

export const BillTransformer: React.FC<IBillTransformerProps> = () => {
  const bill = useBill();
  const [isWaiting, setIsWaiting] = React.useState(false);
  const handleFileChange = (file: File) => {
    setIsWaiting(true);
    createUploadFileApiBillsPost({ body: { file } }).then((response) => {
      const items: IBillItem[] =
        response.data?.items.map((item, id) => {
          return {
            id: id.toString(),
            ...item,
          };
        }) || [];
      bill.setBill(items);
    });
  };

  return (
    <>
      {isWaiting && (
        <div>
          Waiting for file to upload
          <CircularProgress />
        </div>
      )}
      {!isWaiting && <FilePicker onFileChange={handleFileChange} />}
    </>
  );
};