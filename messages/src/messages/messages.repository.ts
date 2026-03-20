import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  static idNumber: number = 1;
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }
  async create(message: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    messages.push(
      JSON.stringify({
        id: MessagesRepository.idNumber,
        content: message,
      }),
    );

    await writeFile('messages.json', messages);
    MessagesRepository.idNumber++;
  }
}
