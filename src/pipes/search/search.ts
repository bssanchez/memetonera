import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and compare with search
   */
  transform(items: Array<any>, conditions: { [field: string]: any }): Array<any> {
    if (items != undefined && items.length > 0) {
      if (typeof items.filter !== "undefined") {
        return items.filter(item => {
          for (let field in conditions) {
            let text_field = item[field].toLowerCase(),
              text_condition = conditions[field].toLowerCase();

            if (text_condition != "*" && text_condition != "" && (text_field.indexOf(text_condition) === -1)) {
              return false;
            }
          }
          return true;
        });
      }
    }
  }
}
