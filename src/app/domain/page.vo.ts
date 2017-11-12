/**
 * pageIndex: 현재 페이지 인덱스 1,2,3,,,
 * pageSize: 한 페이지에 보여지는 갯수
 * totalCount: 뉴스의 총갯수
 * pageSizeOptions: 한페이지에 보여지는 갯수를 조정하는 옵션
 */
export class PageVO {
  constructor(public pageIndex: number,
              public pageSize: number,
              public totalCount: number = 0,
              public pageSizeOptions?: number[]) {
    if (!this.pageSizeOptions) {
      this.pageSizeOptions = [5, 15, 30, 60, 90];
    }
  }
}
