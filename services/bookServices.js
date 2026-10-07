import *as bookModel from "../model/bookModel.js";

export const fetchAllBooks = async() =>{
    const books = await bookModel.fetch();
    return books;
}