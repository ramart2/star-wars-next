export type TResponse<R> = {
  count: number;
  next: null;
  previous: null;
  results: R[];
};
