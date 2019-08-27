const express = require('express');
const router = express.Router();
const shareMediator = require('../../boundaries/sharebase-mediator');

router.get('/', (req, res, next) =>{

    shareMediator
    .getFolders()
    .then(function(result) {

      res.status(200).json({
        success: true,
        result: result.data
      });

    })
    .catch(function(error) {
      res.status(error.response.status).json({
        success: false,
        result: error.response.data
      });
    });
});

router.get("/:folderId", (req, res, next) => {
    const folderId = req.params.folderId;
    shareMediator
      .getDocumentsFromFolder(folderId)
      .then(function(result) {
  
        res.status(200).json({
          success: true,
          result: result.data
        });

      })
      .catch(function(error) {
        res.status(error.response.status).json({
          success: false,
          result: error.response.data
        });
      });
  });

router.post('/', (req, res, next) =>{
    const folderPath = req.body.folderPath;
    shareMediator
    .createFolder(folderPath)
    .then(function(result) {
      res.status(200).json({
        success: true,
        result: result.data
      });

    })
    .catch(function(error) {
      res.status(error.response.status).json({
        success: false,
        result: error.response.data
      });
    });

});

router.post("/:folderId", (req, res, next) => {
  const folderId = req.params.folderId;
  const documentName = req.body.documentName;
  const base64 = req.body.base64;

  shareMediator
  .createDocument(folderId, documentName, base64)
  .then(function(result) {
    res.status(200).json({
      success: true,
      result: result.data
    });

  })
  .catch(function(error) {
    res.status(error.response.status).json({
      success: false,
      result: error.response.data
    });
  });


});


module.exports = router;