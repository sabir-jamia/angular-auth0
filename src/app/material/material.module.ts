import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';

import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule {}
