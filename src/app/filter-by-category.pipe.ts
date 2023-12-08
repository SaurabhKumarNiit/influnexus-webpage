// filter-by-category.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(items: any[], category: string | null): any[] {
    if (!category || category === 'all') {
      return items;
    }

    return items.filter(item => item.category === category);
  }
}
