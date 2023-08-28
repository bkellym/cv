import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TitleComponent } from './title/title.component';
import { ColumnsComponent } from './columns/columns.component';
import { IntroComponent } from './intro/intro.component';
import { PillarsComponent } from './pillars/pillars.component';
import { ToolBoxComponent } from './tool-box/tool-box.component';

@NgModule({
  declarations: [TitleComponent, ColumnsComponent, IntroComponent, PillarsComponent, ToolBoxComponent],
  exports: [ColumnsComponent],
  imports: [SharedModule],
})
export class IndexModule {}
