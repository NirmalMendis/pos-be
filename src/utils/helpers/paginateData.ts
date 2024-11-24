const paginate = require('jw-paginate');

export function paginateData(requestedPage: number, requestedPageSize: number, data: any[]): { pager?: PagerType; data: any[] } {
  if (!requestedPage || !requestedPageSize) return { data };

  const page = parseInt(requestedPage.toString(), 10) || 1;
  const pageSize = parseInt(requestedPageSize.toString(), 10) || 25;
  const pager = paginate(data.length, page, pageSize);
  const pageData = data.slice(pager.startIndex, pager.endIndex + 1);

  return { pager, data: pageData };
}
