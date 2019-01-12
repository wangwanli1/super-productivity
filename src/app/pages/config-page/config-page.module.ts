import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigPageComponent } from './config-page.component';
import { ConfigModule } from '../../features/config/config.module';
import { UiModule } from '../../ui/ui.module';
import { CoreModule } from '../../core/core.module';
import { GoogleModule } from '../../features/google/google.module';
import { IssueModule } from '../../features/issue/issue.module';
import { JiraModule } from '../../features/issue/jira/jira.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ConfigModule,
    UiModule,
    GoogleModule,
    JiraModule,
  ],
  declarations: [ConfigPageComponent]
})
export class ConfigPageModule {
}
