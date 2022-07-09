import { Component , Input} from "@angular/core";
import IPost from '../post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   { title: 'First Post', content: 'this is the first post' },
  //   { title: 'Second Post', content: 'this is the second post' },
  //   { title: 'Third Post', content: 'this is the third post' }
  // ];

  @Input() posts :IPost[] = [];
}

