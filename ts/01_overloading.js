"use strict";
exports.__esModule = true;
var PageVO = /** @class */ (function () {
    function PageVO(pageIndex, pageSize, totalCount, pageSizeOptions) {
        if (totalCount === void 0) { totalCount = 0; }
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
        this.totalCount = totalCount;
        this.pageSizeOptions = pageSizeOptions;
        if (!this.pageSizeOptions) {
            this.pageSizeOptions = [5, 15, 30, 60, 90];
        }
    }
    return PageVO;
}());
exports.PageVO = PageVO;
var page = new PageVO(1, 2);
console.log(page);
