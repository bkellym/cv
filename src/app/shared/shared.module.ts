import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillarComponent } from './pillar/pillar.component';
import { ToolComponent } from './tool/tool.component';
import { SociaisComponent } from './sociais/sociais.component';
import { ExpTitleComponent } from './exp-title/exp-title.component';
import { SubtittleComponent } from './subtittle/subtittle.component';
import { FormacaoComponent } from './formacao/formacao.component';

@NgModule({
  declarations: [PillarComponent, ToolComponent, SociaisComponent, ExpTitleComponent, SubtittleComponent, FormacaoComponent],
  exports: [CommonModule, PillarComponent, ToolComponent, SociaisComponent, ExpTitleComponent, SubtittleComponent, FormacaoComponent],
  imports: [CommonModule],
})
export class SharedModule {}
