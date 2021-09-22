import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router'
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/Services/article.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public f = new FormGroup({
    name: new FormControl('test', Validators.required),    
    price: new FormControl(7.56, Validators.required),
    qty: new FormControl(8, Validators.required)
  });

  constructor(private router: Router, private route: ActivatedRoute, private articleService: ArticleService) {  
  }

  public ngOnInit(): void {
  }

  public submit() {
    console.log('submit');
    this.articleService.addArticle(this.f.value as Article);
    //this.router.navigateByUrl('/stock')
    this.router.navigate(['..'], {relativeTo: this.route});
  }
}
