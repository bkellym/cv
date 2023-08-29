import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillarComponent } from './pillar/pillar.component';
import { ToolComponent } from './tool/tool.component';
import { SociaisComponent } from './sociais/sociais.component';
import { ExpTitleComponent } from './exp-title/exp-title.component';

@NgModule({
  declarations: [PillarComponent, ToolComponent, SociaisComponent, ExpTitleComponent],
  exports: [CommonModule, PillarComponent, ToolComponent, SociaisComponent, ExpTitleComponent],
  imports: [CommonModule],
})
export class SharedModule {}
