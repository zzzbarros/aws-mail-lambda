import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import fs from 'fs';
import handlebars from 'handlebars';
import { generateTemplateData } from './template-generator.mjs'

const sesClient = new SESClient({ region: process.env.REGION });

const templateSource = fs.readFileSync('./template.hbs', 'utf8');
const template = handlebars.compile(templateSource);

export const handler = async (event) => {
  for (const record of event.Records) {
    const { body } = record;
    const message = JSON.parse(body);
    const templateData = generateTemplateData(message.type, message.name, message.token, message.toEmail, message.schedule);
    const emailContent = template(templateData);
    const params = {
      Destination: {
        ToAddresses: [message.toEmail],
      },
      Message: {
        Body: {
          Html: {
            Data: emailContent,
          },
        },
        Subject: {
          Data: templateData.subject,
        },
      },
      Source: process.env.FROM_MAIL,
    };
    try {
      const command = new SendEmailCommand(params);
      await sesClient.send(command);
      console.log(`E-mail enviado com sucesso para ${message.toEmail}!`);
    } catch (error) {
      console.error(`Erro ao enviar e-mail para ${message.toEmail}: ${error}`);
    }
  }
};
