class Comment {
  constructor(comment) {
    this.date = comment[`date`];
    this.comment = comment[`comment`];
    this.rating = comment[`rating`];
    this.id = comment[`id`];
    this.user = {
      avatarUrl: comment.user[`avatar_url`],
      id: comment.user[`id`],
      isPro: comment.user[`is_pro`],
      name: comment.user[`name`]
    };
  }

  toRAW() {
    return {
      'date': this.date,
      'comment': this.comment,
      'rating': this.rating,
      'id': this.id,
      'user': {
        'avatar_url': this.user.avatarUrl,
        'id': this.user.id,
        'is_pro': this.user.isPro,
        'name': this.user.name
      }
    };
  }

  static parseComment(comment) {
    return new Comment(comment);
  }

  static parseComments(comments) {
    return comments.map(Comment.parseComment);
  }
}

export default Comment;
