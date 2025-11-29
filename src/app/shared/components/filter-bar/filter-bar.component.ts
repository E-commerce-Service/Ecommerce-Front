import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { SortBy } from '../../../core/enum/SortBy';
import { SortDirection } from '../../../core/enum/SortDirection';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
   combineLatest,
   debounceTime,
   distinctUntilChanged,
   startWith,
} from 'rxjs';

export interface FilterChangeEvent {
   name: string;
   sortBy?: SortBy;
   sortDirection?: SortDirection;
}

@Component({
   selector: 'app-filter-bar',
   imports: [ReactiveFormsModule],
   templateUrl: './filter-bar.component.html',
   styleUrl: './filter-bar.component.sass',
})
export class FilterBarComponent implements OnInit {
   @Input() initialName = '';
   @Input() initialSort: SortBy | null = null;
   @Input() initialDirection: SortDirection = SortDirection.ASC;
   @Input() placeholder = 'Buscar por nome...';

   @Output() filterChange = new EventEmitter<FilterChangeEvent>();

   searchControl = new FormControl('');
   sortControl = new FormControl<SortBy | null>(null);
   directionControl = new FormControl<SortDirection>(SortDirection.ASC);

   readonly SortBy = SortBy;
   readonly SortDirection = SortDirection;

   ngOnInit() {
      this.searchControl.setValue(this.initialName, { emitEvent: false });
      this.sortControl.setValue(this.initialSort, { emitEvent: false });
      this.directionControl.setValue(this.initialDirection, {
         emitEvent: false,
      });

      combineLatest([
         this.searchControl.valueChanges.pipe(
            startWith(this.initialName),
            debounceTime(400),
            distinctUntilChanged(),
         ),
         this.sortControl.valueChanges.pipe(startWith(this.initialSort)),
         this.directionControl.valueChanges.pipe(
            startWith(this.initialDirection),
         ),
      ]).subscribe(([name, sortBy, dir]) => {
         this.filterChange.emit({
            name: name || '',
            sortBy: sortBy || undefined,
            sortDirection: dir || SortDirection.ASC,
         });
      });
   }

   reset() {
      this.searchControl.setValue('');
      this.sortControl.setValue(null);
      this.directionControl.setValue(SortDirection.ASC);
   }
}
