import { PipeTransform, Pipe } from '@angular/core';
import { User } from './User';

// Pipe
@Pipe({
  name: 'filterpipe',
  // pure: true,
  pure: true,
})


// pure pipe: only works if the values changed by reference -> improve the performance 
// impure pipe: detect whatever changes in the change detecion cycle -> not good for performance
export class FilterPipe implements PipeTransform {
  transform(users: User[], searchTerm: string): User[] {
    // if (!users || !searchTerm) {
    //   return users;
    // }
    if (!users) {
      return users;
    }
    return users.filter(user => user.name.toLowerCase()
      .indexOf(searchTerm.toLowerCase()) !== -1);
  }
}

