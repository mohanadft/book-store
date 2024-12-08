import { Injectable } from '@nestjs/common';
import { QueryDto, BookDto } from './dtos';
import { ApiResponse } from './interfaces';
import * as books from '../assets/books.json';

@Injectable()
export class BookService {
  searchBooks(queryParameters: QueryDto): ApiResponse<BookDto> {
    let res: BookDto[] = structuredClone(books);

    for (let [key, val] of Object.entries(queryParameters)) {
      if (key === 'date') {
        res = res.filter((book) => book.publication_date.startsWith(val));
      } else {
        res = res.filter((book) => book[key] === val);
      }
    }

    return {
      data: res,
      message:
        res.length > 0 ? 'Books retrieved successfully' : 'No books found',
      status: true,
      count: res.length,
    };
  }
}
