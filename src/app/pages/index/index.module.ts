import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TitleComponent } from './title/title.component';
import { ColumnsComponent } from './columns/columns.component';
import { IntroComponent } from './intro/intro.component';
import { PillarsComponent } from './pillars/pillars.component';
import { ToolBoxComponent } from './tool-box/tool-box.component';
import { HeaderComponent } from './header/header.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [TitleComponent, ColumnsComponent, IntroComponent, PillarsComponent, ToolBoxComponent, HeaderComponent, ExperienciasComponent],
  exports: [ColumnsComponent],
  providers: [
    {
        provide: APP_BASE_HREF,
        useValue: "/"
    }
  ],
  imports: [SharedModule],
})
export class IndexModule {}
