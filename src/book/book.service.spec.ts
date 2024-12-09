import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import * as books from '../assets/books.json';

describe('BookService', () => {
  let service: BookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookService],
    }).compile();

    service = module.get<BookService>(BookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all books for /search', () => {
    const result = service.searchBooks({});
    expect(result.count).toBe(books.length);
  });

  it('should return 23 books for /search?price=40', () => {
    const result = service.searchBooks({ price: 40 });
    expect(result.count).toBe(23);
  });

  it('should return 30 books for /search?category=Java', () => {
    const result = service.searchBooks({ category: 'Java' });
    expect(result.count).toBe(30);
  });

  it('should return 2 books for /search?date=2009-04-01&price=40', () => {
    const result = service.searchBooks({ date: '2009-04-01', price: 40 });
    expect(result.count).toBe(2);
  });

  it('should return 6 books for /search?date=2011', () => {
    const result = service.searchBooks({ date: '2011' });
    expect(result.count).toBe(6);
  });

  it('should return no books if query parameters do not match any book', () => {
    const result = service.searchBooks({ author: 'Mohanad' });
    expect(result.count).toBe(0);
  });
});
