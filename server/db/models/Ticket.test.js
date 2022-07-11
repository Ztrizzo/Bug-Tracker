const { db, models: { Ticket } } = require('../index');


describe('Ticket', () => {
  test('constructor', async () => {
    const testTicket = {title: 'test title', description: 'this is a test desc', createdBy: 'bob'};
    const ticket = await Ticket.create(testTicket);

    expect(typeof ticket).toBe('object');
    expect(ticket.title).toBe(testTicket.title);
    expect(ticket.description).toBe(testTicket.description);
    expect(ticket.createdBy).toBe(testTicket.createdBy);
  })
})