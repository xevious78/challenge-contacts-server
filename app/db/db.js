import { v4 as uuid } from 'uuid';

class FakeDatabase {
    constructor() {
        this._contacts = {};
    }

    async getContacts() {
        return Object.values(this._contacts);
    }

    async getContact(contactId) {
        return this._contacts[contactId]
    }

    async createContact(contactInfos) {
        const contactId = uuid();
        const contact = {...contactInfos, id: contactId};
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

        this._contacts[contactId] = contactInfos;
        return contactInfos;
    }

}

const Database = new FakeDatabase();

export default Database;