const httpMediator = require('./http-service-mediator');
const baseUrl = 'https://app.sharebase.com/sharebaseapi/api/';
const API_TOKEN = 'YOUR API TOKEN';
const headers = { 'Authorization': `PHOENIX-TOKEN ${API_TOKEN}` };
const sharebaseLibraryId = 24;

class SharebaseMediator {
    constructor() {
    }

    getFolders() {
        return httpMediator.get(baseUrl, `/libraries/${sharebaseLibraryId}/folders`, headers);
    }

    createFolder(folderPath) {
        const body = { folderPath: folderPath };
        return httpMediator.post(baseUrl, `libraries/${sharebaseLibraryId}/folders`, body, headers);
    }

    getDocumentsFromFolder(folderId) {
        return httpMediator.get(baseUrl, `/folders/${folderId}/documents`, headers);
    }

    //TODO: implementar create document
    createDocument(folderId, documentName, base64) {
        const formData = {
                           file: `${createDocumentRequest.DocumentName}.pdf`,
                           metadata: {"documentName": documentName}
                        };

        
        return httpMediator.postWithMultipart(baseUrl, `/folders/${folderId}/documents`, formData);
    }
}

module.exports = new SharebaseMediator();