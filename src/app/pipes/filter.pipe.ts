import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(developers: Array<object>, filters?: Array<object>): any {
    if (filters && Array.isArray(developers)) {
      let returnedDevelopers = developers;

      filters.forEach(filter => {
        const filterKey = Object.keys(filter)[0];
        const filterValue = filter[filterKey];

        if (filterValue) {
          developers.forEach(developer => {
            if (developer[filterKey] !== filterValue) {
              returnedDevelopers = returnedDevelopers.filter(dev => dev !== developer);
            }
          });
        }
      });

      return returnedDevelopers;
    }

    return developers;
  }

}
