// import { ItemType } from "./ex1";
enum ItemType {
    Book = 'book',
    DVD = 'dvd',
  }

interface Book {
    type: ItemType.Book;
    title: string;
    author: string;
}

interface DVD {
    type: ItemType.DVD;
    title: string;
    duration: number;
}

function filterItems<T>(items: T[], filterFn: (items: T[]) => T[]): T[] {
    return filterFn(items);
}

function MoviesLongerThanTwoHours<T extends Book | DVD>(items: T[]): T[] {
    let arr: T[] = [];
    for (let i: number = 0; i < items.length; i++) {
        if (items[i].type === ItemType.Book) {
            arr.push(items[i]);
        }
    }
    return arr;
}

function BooksOnlyByHarperLee<T extends Book | DVD>(items: T[]): T[] {
    let arr: T[] = [];
    for (let i: number = 0; i < items.length; i++) {
        if (items[i].type === ItemType.DVD) {
            arr.push(items[i]);
        }
    }
    return arr;
}


const libraryItems: (Book | DVD)[] = [
    { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { type: ItemType.DVD, title: 'Inception', duration: 148 },
    { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { type: ItemType.DVD, title: 'Avatar', duration: 162 },
    { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];

function printItemsData<T extends Book | DVD>(items: T[]): void {
    for (let i: number = 0; i < items.length; i++) {
        if (items[i].type === ItemType.Book) {
            const bookItem = items[i] as Book;
            console.log(bookItem.title, bookItem.author);
        } else {
            const dvdItem = items[i] as DVD;
            console.log(dvdItem.title, dvdItem.duration);
        }
    }
}

printItemsData(libraryItems);

filterItems(libraryItems, MoviesLongerThanTwoHours);

filterItems(libraryItems, BooksOnlyByHarperLee);