import { Controller, Get, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { QueryDto } from './dtos';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('search')
  searchBooks(@Query() queryParams: QueryDto) {
    return this.bookService.searchBooks(queryParams);
  }
}
