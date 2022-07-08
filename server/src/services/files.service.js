import fetch from 'node-fetch'

const URLFiles = 'https://echo-serv.tbxnet.com/v1/secret/files'
const URLFile = 'https://echo-serv.tbxnet.com/v1/secret/file'
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: 'Bearer aSuperSecretKey'
}

/**
 * function to get all files data
 * @returns array of files data
 */
export const getAllFilesData = async () => {
  const response = await fetch(URLFiles, {
    method: 'GET',
    headers
  })
  const listFiles = await response.json()

  const dataObject = []
  for (const file of listFiles.files) {
    const fileData = await getFileData(file)
    if (fileData) {
      dataObject.push(fileData)
    }
  }

  return dataObject
}

/**
 * function to get one file data
 * @param {*} filename
 * @returns object with file data
 */
export const getOneFileData = async (filename) => {
  const response = await fetch(`${URLFile}/${filename}`, {
    method: 'GET',
    headers
  })

  const fileData = await response.text()

  const arrayFileLines = fileData.split('\n')

  if (arrayFileLines.length < 2 && arrayFileLines[0].split(',').length <= 4) {
    throw new Error('File not found')
  }

  const titles = arrayFileLines[0].split(',')

  const name = arrayFileLines[1].split(',')[0]

  const files = generateArrayfiles(arrayFileLines, titles)

  return [{
    file: name,
    lines: files
  }]
}

/**
 * function to get files list from external api
 * @returns array of files
 */
export const getFilesListData = async () => {
  const response = await fetch(URLFiles, {
    method: 'GET',
    headers
  })

  const listFiles = await response.json()

  return listFiles
}
/**
 * function to get file data
 * @param {*} filename
 * @returns object with file data
 */
const getFileData = async (filename) => {
  const response = await fetch(`${URLFile}/${filename}`, {
    method: 'GET',
    headers
  })

  const fileData = await response.text()

  const arrayFileLines = fileData.split('\n')

  if (arrayFileLines.length < 2 && arrayFileLines[0].split(',').length <= 4) {
    return null
  }

  const titles = arrayFileLines[0].split(',')

  const name = arrayFileLines[1].split(',')[0]

  const files = generateArrayfiles(arrayFileLines, titles)

  return {
    file: name,
    lines: files
  }
}

/**
 * function to generate array of files
 * @param {*} arrayFileLines
 * @param {*} titles
 * @returns array of files
 */
const generateArrayfiles = (arrayFileLines, titles) => {
  const files = []
  for (let i = 1; i < arrayFileLines.length; i++) {
    const arrayLine = arrayFileLines[i].split(',')
    if (arrayLine.length >= 4) {
      const objectFile = {}
      objectFile[titles[1]] = arrayLine[1]
      objectFile[titles[2]] = arrayLine[2]
      objectFile[titles[3]] = arrayLine[3]

      files.push(objectFile)
    }
  }

  return files
}
