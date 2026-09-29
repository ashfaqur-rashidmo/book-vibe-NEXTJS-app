export interface BookType {
    bookId: string;
    bookName: string;
    author: string;
    image: string;
    review: string;
    totalPages: number;
    rating: number;
    category:  string;
    tags:   string[];
    publisher: string;
    yearOfPublishing: number;
}