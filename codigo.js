function onFormSubmit(e) {
  var respostas = e.values;
  var dataEnvio = new Date(respostas[0]);
  var nomeSolicitante = respostas[1];
  var emailSolicitante = respostas[2];
  var nomeFornecedor = respostas[3];
  var valor = parseFloat(respostas[4].replace(',', '.'));
  var centroCusto = respostas[5];
  var dataPrevista = new Date(respostas[6]);
  var anexosLinks = respostas[7].split(';');

  var modeloDoc = DriveApp.getFileById("ID_DO_MODELO");
  var pastaDestino = DriveApp.getFolderById("ID_DA_PASTA_DESTINO");

  var novoDoc = modeloDoc.makeCopy(pastaDestino);
  var docId = novoDoc.getId();
  var doc = DocumentApp.openById(docId);
  var body = doc.getBody();

  body.replaceText("{{DATA_ENVIO}}", dataEnvio.toLocaleDateString());
  body.replaceText("{{NOME_SOLICITANTE}}", nomeSolicitante);
  body.replaceText("{{EMAIL_SOLICITANTE}}", emailSolicitante);
  body.replaceText("{{NOME_FORNECEDOR}}", nomeFornecedor);
  body.replaceText("{{VALOR}}", valor.toFixed(2));
  body.replaceText("{{CENTRO_CUSTO}}", centroCusto);
  body.replaceText("{{DATA_PREVISTA}}", dataPrevista.toLocaleDateString());

  doc.saveAndClose();

  var pdf = novoDoc.getAs("application/pdf");
  var assunto = "Solicitação de Pagamento - " + nomeFornecedor;
  var corpoEmail = "Olá,\n\nSegue em anexo a solicitação de pagamento referente ao fornecedor " + nomeFornecedor + ".\n\nAtenciosamente,\nEquipe";
  var destinatario = emailSolicitante;

  var anexos = [pdf];
  anexosLinks.forEach(function(link) {
    var fileId = link.match(/[-\w]{25,}/);
    if (fileId) {
      try {
        var arquivo = DriveApp.getFileById(fileId[0]);
        anexos.push(arquivo.getAs("application/pdf"));
      } catch (e) {
        Logger.log("Erro ao anexar arquivo: " + e.message);
      }
    }
  });

  MailApp.sendEmail({
    to: destinatario,
    subject: assunto,
    body: corpoEmail,
    attachments: anexos
  });

  DriveApp.getFileById(docId).setTrashed(true);
}
