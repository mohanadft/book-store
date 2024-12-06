import { Injectable } from '@nestjs/common';
import { QueryDto, BookDto } from './dtos';
import { ApiResponse } from './interfaces';
import * as books from '../assets/books.json';

@Injectable()
export class BookService {
  searchBooks({ price, category, date }: QueryDto): ApiResponse<BookDto> {
    let res = books.filter((book) => {
      let matches = true;

      if (price) {
        matches = matches && book.price === price;
      }

      if (category) {
        matches = matches && book.category === category;
      }

      if (date) {
        matches = matches && book.publication_date.startsWith(date);
      }

      return matches;
    });

    return {
      data: res,
      message:
        res.length > 0 ? 'Books retrieved successfully' : 'No books found',
      status: true,
      count: res.length,
    };
  }
}
