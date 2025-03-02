# Solicitação de Pagamento via Google Forms + Appscript

Este script em Google Apps Script automatiza a geração de documentos de solicitação de pagamento com base em respostas de formulários do Google Forms. Ele cria um documento no Google Docs a partir de um modelo, substitui os placeholders pelos dados submetidos, converte para PDF e envia um e-mail com os anexos correspondentes.

## 🛠 Funcionalidades

- Captura os dados enviados por um formulário do Google Forms.
- Formata números corretamente para cálculos financeiros.
- Substitui os placeholders em um modelo de documento do Google Docs.
- Gera um documento PDF com os dados preenchidos.
- Recupera e anexa arquivos adicionais a partir de links do Google Drive.
- Envia um e-mail com o documento em PDF e os arquivos anexados.
- Exclui o documento gerado após o envio.

## 📌 Requisitos

- Uma conta do Google com acesso ao Google Drive, Google Forms e Google Apps Script.
- Um modelo de documento no Google Docs com os placeholders necessários.
- Permissão para acessar os arquivos anexados no Google Drive.

## 🔧 Como Usar

1. Crie um **Google Forms** com os campos necessários para coleta de dados.
2. No Google Apps Script, associe este código ao formulário para executar quando houver uma submissão (`onFormSubmit`).
3. Atualize o `ID` do modelo de documento no trecho:

   ```javascript
   var modeloDoc = DriveApp.getFileById("ID_DO_MODELO");
