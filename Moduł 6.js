// 1. Zrozumienie koncepcji

// Slowo kluczowe this w JavaScript odnosi sie do bieżacego kontekstu, w którym jest używane. 
// W programowaniu obiektowym this zazwyczaj odnosi sie do bieżacego obiektu, na którym jest wywoływana metoda.

//Przyklad 1:

const person = {
    firstName: "Jan",
    lastName: "Nowak",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.getFullName());

// W tym przykladzie this wewnatrz funkcji getFullName odnosi sie do obiektu person, dzieki czemu mozemy uzyskac dostep 
//do jego atrybutow firstName i lastName.

//Przyklad 2: 

const car = {
    brand: " Opel ",
    model: " Astra ",
    purchaseStatus: function() {
        console.log("Kupiłeś samochód " + this.brand + this.model + "!");
    }
};

car.purchaseStatus(); 

// W tym przykladzie this wewnatrz funkcji purchaseStatus odnosi sie do obiektu car, dzieki czemu mozemy uzyskac dostep
// do jego atrybutow brand i model.

// 2. Zastosowanie praktyczne


const maciej = {
    username: "Maciej",
    showName() {
        console.log(this.username);
    },
};
maciej.showName();


// 3. Rozszerzony przyklad

const bookShelf = {
    authors: ["Adam Mickiewicz", "Eliza Orzeszkowa"],
    getAuthors() {
        return this.authors;
    },
    addAuthor(authorName) {
        this.authors.push(authorName);
    },
};

console.log(bookShelf.getAuthors());
bookShelf.addAuthor("Ignacy Iwaszkiewicz");
console.log(bookShelf.getAuthors());