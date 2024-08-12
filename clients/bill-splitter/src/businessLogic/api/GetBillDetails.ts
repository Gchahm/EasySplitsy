export const getBillDetails = async (file: File) => {
  const form = new FormData();
  form.append("file", file);
  return await fetch("api/bills/", {
    method: "POST",
    body: form,
  });
};

export const getBillDetailsTest = () => {
  return fetch("api/bills/", {
    method: "GET",
  });
};
