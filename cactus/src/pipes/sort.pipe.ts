import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<string>, args: string): Array<string> {
    console.log("hey",args);
    
    if (array !== undefined) {
      let sortField = args.split('|')
      console.log('show',sortField[0]);
      
      if (sortField[0] == 'name' || sortField[0] == 'price'){
        array.sort((a: any, b: any) => {
          if(sortField[1] == 'asc' || sortField[1] == 'lth'){     
            if(a[sortField[0]] < b[sortField[0]]){
              return -1;
            }else if(a[sortField[0]] > b[sortField[0]]){
              return 1;
            }else{
              return 0;
            }
          }else {
              if(a[sortField[0]] > b[sortField[0]]){
              return -1;
            }else if(a[sortField[0]] < b[sortField[0]]){
              return 1;
            }else{
              return 0;
            }
          }
        });
      }
    }
    return array;
  }
}
