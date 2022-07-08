import { getAllFilesData, getOneFileData, getFilesListData } from '../services/files.service.js'

export const getFilesData = async (req, res) => {
  if (req.query.fileName) {
    try {
      const fileData = await getOneFileData(req.query.fileName)
      res.json(fileData)
    } catch (error) {
      res.status(404).json({
        message: 'File not found'
      })
    }
  } else {
    try {
      const filesData = await getAllFilesData()
      res.json(filesData)
    } catch (error) {
      res.status(500).json({
        message: 'Error getting files data'
      })
    }
  }
}

export const getFilesList = async (req, res) => {
  try {
    const filesList = await getFilesListData()
    res.json(filesList)
  } catch (error) {
    res.status(500).json({
      message: 'Error getting files data'
    })
  }
}
