export const getBillDetails = async (file: File) => {
    const form = new FormData();
    form.append("file", file);
    const response = await fetch("api/bills/", {
        method: "POST",
        body: form
    });

    return response;
}