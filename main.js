class AddressBook {
    constructor(contact) {
        this.contact = contact;
    }
    add(contact) {
        this.contact.push(contact);

    }
    deleteAt(item){
        this.contact.splice(item, 1);

    }
    print(){
        console.log(AddressBook);

    }

}

class Contact {
    constructor(name, phone, email, relation) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.relation = relation;
    }
}


const book = new AddressBook([new Contact('Amanda', '734-740-9415', 'aduque@crain.com', 'Self')]); 
console.log(book);

while(true) {
    const response = prompt(`Add, Delete, Print or Quit`);  
        if (response === 'add') {
            const name = prompt(`What is the name of the person you'd like to add?`);
            const phone = prompt(`What is ${name}'s phone number?`);
            const email = prompt(`What is ${name}'s email address?`);
            const relation = prompt(`What is ${name}'s relation to you?`);
    
            book.add(new Contact(name, phone, email, relation));
        }
        if (response === 'quit' || response == null) {
        break;
    }

    if (response === 'delete'){
        let item = prompt('Which address would you like removed?');
        book.deleteAt(parseInt(item, 10));
    }

    if (response === 'print') {
        console.log(book);
    }

    
}
