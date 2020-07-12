import { v4 as uuid } from "uuid";

class FakeDatabase {
  constructor() {
    this._contacts = {};
    this._images = {};
  }

  ///////////////////////////////////////////
  // Contacts
  ///////////////////////////////////////////
  async getContacts() {
    return Object.values(this._contacts).sort();
  }

  async getContact(contactId) {
    return this._contacts[contactId];
  }

  async createContact(contactInfos) {
    const contactId = uuid();
    const contact = { ...contactInfos, id: contactId };
    this._contacts[contactId] = contact;
    return contact;
  }

  async deleteContact(contactId) {
    delete this._contacts[contactId];
  }

  async updateContact(contactId, contactInfos) {
    if (this._contacts[contactId] == undefined) {
      return;
    }

    this._contacts[contactId] = { ...contactInfos, id: contactId };

    return this._contacts[contactId];
  }

  ///////////////////////////////////////////
  // Images
  ///////////////////////////////////////////

  async createImage(file) {
    const imageId = uuid();
    this._images[imageId] = file;
    return imageId;
  }

  async getImage(imageId) {
    return this._images[imageId];
  }
}

const Database = new FakeDatabase();

export default Database;
