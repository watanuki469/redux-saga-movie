export interface PaginationParams {
    _: number;
    index: number;
  }
  
  export interface ListResponse<T> {
    data: T[];
    pagination: PaginationParams;
  }
  
  export interface ListParams {
    _: number;
    index: number;
    [key: string]: any;
  }

  export interface CountParam {
    index: number;
  }
  