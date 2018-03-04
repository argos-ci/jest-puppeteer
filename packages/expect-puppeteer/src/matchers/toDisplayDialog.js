async function toDisplayDialog(page, block) {
  return new Promise(async resolve => {
    const handleDialog = dialog => {
      page.removeListener('dialog', handleDialog)
      resolve(dialog)
    }
    page.on('dialog', handleDialog)
    await block()
  })
}

export default toDisplayDialog
