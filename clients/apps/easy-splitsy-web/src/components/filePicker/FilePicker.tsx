import * as React from "react";
import { IFilePickerProps } from ".";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { VisuallyHiddenInput } from "./VisuallyHiddenInput";
import resources from "../../@types/resources.ts";
import { useTranslation } from "react-i18next";

export const FilePicker: React.FC<IFilePickerProps> = (props) => {
  const { onFileChange } = props;
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileChange?.(file);
    }
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      {t(resources.translation.uploadFile)}
      <VisuallyHiddenInput onChange={handleChange} type="file" />
    </Button>
  );
};