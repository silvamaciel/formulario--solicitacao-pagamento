# Automacao de Solicitação de Pagamento

Este projeto automatiza a geração de documentos de solicitação de pagamento a partir de respostas de formulários do Google Forms, salvando os arquivos no Google Drive e enviando por e-mail.

## Funcionalidades
- Captura respostas do Google Forms.
- Processa e formata os dados.
- Gera um documento a partir de um modelo predefinido.
- Converte o documento para PDF e o envia por e-mail.
- Anexa arquivos adicionais ao e-mail.

## Tecnologias Utilizadas
- Google Apps Script
- Google Forms
- Google Drive
- Google Docs
- Gmail API

## Como Usar
1. Configure um Google Forms para capturar as informações necessárias.
2. Substitua o ID do modelo de documento no código.
3. Aponte os destinatários do e-mail corretamente.
4. Implante o script e associe-o ao evento `onFormSubmit`.

## Personalização
- Para modificar os placeholders no documento, edite as chaves `{{NOME_PLACEHOLDER}}` no código e no modelo do documento.
- Caso queira adicionar mais campos, siga a mesma estrutura das substituições de texto existentes.

## Contribuição
Sinta-se à vontade para abrir issues e contribuir com melhorias.

## Licença
Este projeto está sob a licença MIT.
