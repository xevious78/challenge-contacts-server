class Database {
    constructor() {
        this._contacts = {};
    }

    async getContacts() {
        return Object.values(this._contacts);
    }

    async getContact(contactId) {
        return this._contacts[contactId]
    }

    async deleteContact(contactId) {
        delete this._contacts[contactId];
    }

    async updateContact(contactId, contactInfos) {
        if (this._contacts[contactId] == undefined) {
            return;
        }

        this._contacts[contactId] = contactInfos;
    }

}

export default Database;