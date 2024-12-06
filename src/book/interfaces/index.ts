export interface ApiResponse<T> {
  data: T[];
  message: string;
  status: boolean;
  count: number;
}
