import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../features/project/project.service';
import { MatDialog } from '@angular/material';
import { DialogCreateProjectComponent } from '../../features/project/dialogs/create-project/dialog-create-project.component';

@Component({
  selector: 'project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  constructor(public readonly projectService: ProjectService,
              public readonly _matDialog: MatDialog) {
  }

  openCreateDialog() {
    this._matDialog.open(DialogCreateProjectComponent, {
      restoreFocus: true,
    });
  }

  ngOnInit() {
  }

  edit(project) {
    this._matDialog.open(DialogCreateProjectComponent, {
      restoreFocus: true,
      data: Object.assign({}, project),
    });
  }

  remove(projectId) {
    this.projectService.remove(projectId);
  }
}
