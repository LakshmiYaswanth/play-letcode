import { Component, OnInit, Input, OnChanges, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-gitrepos',
  templateUrl: './gitrepos.component.html',
  styleUrls: ['./gitrepos.component.css']
})
export class GitreposComponent implements OnInit, OnChanges {
  @Input() repoUrl: string;
  repos = [];

  constructor(
    private gitService: GithubService,
    private changeRef: ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.repoUrl) {
      this.gitService.getRepos(this.repoUrl).subscribe((repo: []) => {
        this.repos = repo;
        this.changeRef.detectChanges();
      }, (err) => {
        console.log(err);
      })
    }

  }

  ngOnInit(): void {
  }

}
