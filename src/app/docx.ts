// archivo: word.service.ts
import { Injectable } from '@angular/core';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class Docx {

  constructor() { }

  generarDocumento() {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun("Hola Mundo! Este es un documento Word generado desde Angular."),
                new TextRun({
                  text: "\nEste texto es en negrita.",
                  bold: true,
                }),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then(blob => {
      FileSaver.saveAs(blob, "ejemplo.docx");
    });
  }
}
