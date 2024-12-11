import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {BorrowersStateService} from '../../services/borrowers-state.service';
import {Observable} from 'rxjs';
import {TagDto} from '../../core/services/openapi';

export const tagsResolver: ResolveFn<TagDto[] | null | undefined> = (route, state): Observable<TagDto[] | null | undefined> => {
  let borrowersStateService = inject(BorrowersStateService);
  return borrowersStateService.updateTags()
};
