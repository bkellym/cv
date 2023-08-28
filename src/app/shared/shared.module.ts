import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillarComponent } from './pillar/pillar.component';
import { ToolComponent } from './tool/tool.component';

@NgModule({
  declarations: [PillarComponent, ToolComponent],
  exports: [CommonModule, PillarComponent, ToolComponent],
  imports: [CommonModule],
})
export class SharedModule {}
