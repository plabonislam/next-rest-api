import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  findUserComment(id: string) {
    return 'user comment ';
  }
}
