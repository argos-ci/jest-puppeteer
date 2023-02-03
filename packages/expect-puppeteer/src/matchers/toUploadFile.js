import toMatchElement from "./toMatchElement";

async function toUploadFile(instance, selector, file, options) {
  const input = await toMatchElement(instance, selector, options);
  const files = Array.isArray(file) ? file : [file];
  await input.uploadFile(...files);
}

export default toUploadFile;
