async function toDisplayDialog(page, block) {
  return new Promise((resolve, reject) => {
    const handleDialog = (dialog) => {
      page.removeListener("dialog", handleDialog);
      resolve(dialog);
    };
    page.on("dialog", handleDialog);
    block().catch(reject);
  });
}

export default toDisplayDialog;
