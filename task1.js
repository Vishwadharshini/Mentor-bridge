const booksList = [
    { id: 1, title: "Turning Points", price: 200, stock: 5 },
    { id: 2, title: "You are born to blossom", price: 400, stock: 6 },
    { id: 2, title: "Ignited Minds", price: 400, stock: 6 },
    { id: 3, title: "Wings of Fire", price: 300, stock: 4 }
];
const customers = [
    { id: 101, name: "vishwa", isExistingCustomer: true, lastPurchase: null },
    { id: 102, name: "sakthi", isExistingCustomer: true, lastPurchase: null },
    { id: 103, name: "nithya", isExistingCustomer: false, lastPurchase: null },
];

const choosenBookIds = [2, 3];
const customerId = 101;

function removeDuplicates(){
    const uniqBooksSet = new Set();
    const uniqBooksList = [];
    for (const book of booksList) {
        if (!uniqBooksSet.has(book.id)) {
            uniqBooksSet.add(book.id);
            uniqBooksList.push(book);
        }
    }
    return uniqBooksList;
}

function filterCustomerChosenBooks(uniqueBooksList) {
    return uniqueBooksList.filter(book => choosenBookIds.includes(book.id));//for finding more than one book
}

function calculateDiscount(customerChosenBooks) {
    //check
    const currentCustomer = customers.find(customer => customer.id === customerId);
    console.log(currentCustomer);
    // let isExisting=false;
    // if(currentCustomer){
    //     isExisting=true;
    // }
    const isExistingCustomer = currentCustomer ? isExisting = true : isExisting = false;

    for (let book of customerChosenBooks) {
        if (isExistingCustomer) {
            if (book.price >= 200) {
                book.discount = book.price * 15 / 100;
            } else {
                book.discount = 0;
            }
        }
        else {
            switch (book.price) {
                case book.price > 100 && book.price < 200:
                    book.discount = book.price * 2 / 100;
                    break;
                case book.price >= 200 && book.price < 500:
                    book.discount = book.price * 5 / 100;
                    break;
                case book.price >= 500 && book.price < 750:
                    book.discount = book.price * 10 / 100;
                    break;
                case book.price >= 750:
                    book.discount = book.price * 15 / 100;
                    break;
                default:
                    book.discount = 0;
                    break;
            }
        }
    }
    console.log(customerChosenBooks);
    calculateFinalSummary(customerChosenBooks);
}

function calculateFinalSummary(customerChosenBooks){
    let totalDiscount=0;
    let totalPrice=0;
    for (let book of customerChosenBooks) {
        book.totalDiscount=totalDiscount+book.discount;
        book.finalPrice=totalPrice+(book.price-book.totalDiscount);
    }
    console.log(customerChosenBooks);
}

function generateBill() {
    const uniqueBooksList = removeDuplicates();
    console.log(uniqueBooksList);
    const customerChosenBooks = filterCustomerChosenBooks(uniqueBooksList);
    console.log(customerChosenBooks);
    calculateDiscount(customerChosenBooks);
}
generateBill();
