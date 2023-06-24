export const createSlug = (string) =>
  string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-");
export const formatMoney = (number) =>
  Number(number?.toFixed(1)).toLocaleString();

export const validate = (payload, setInvalidFields) => {
  let invalids = 0;
  const formatPayload = Object.entries(payload);
  for (let arr of formatPayload) {
    if (arr[1].trim() === "") {
      invalids++;
      setInvalidFields((prev) => [
        ...prev,
        { name: arr[0], mes: `Xin vui lòng điền ${arr[0]}` },
      ]);
    }
  }
  for (let arr of formatPayload) {
    switch (arr[0]) {
      case "email": {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!arr[1].match(regex)) {
          invalids++;
          setInvalidFields((prev) => [
            ...prev,
            { name: arr[0], mes: `Xin vui lòng điền ${arr[0]} đúng định dạng` },
          ]);
        }
      }
    }
  }
  return invalids;
};
