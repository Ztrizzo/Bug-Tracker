const { db, models: { Comment } } = require('../index');


describe('Comment', () => {
  test('constructor should create a new comment', async () => {
    const comment = await Comment.create({content: 'This is a test comment'});
    expect(typeof comment).toBe('object');
    expect(comment.content).toBe('This is a test comment');
  })
})