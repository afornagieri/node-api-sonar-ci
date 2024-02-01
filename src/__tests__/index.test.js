const welcomeController = require('../controllers/welcomeController');

describe('Testes para welcomeController', () => {
  it('Deve retornar "Welcome!" para uma requisição válida', () => {
    const req = {
      body: {
        data: 'something',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    welcomeController(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('Welcome!');
  });

  it('Deve retornar "Missing body!" para uma requisição sem dados', () => {
    const req = {
      body: {},
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    welcomeController(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith('Missing body!');
  });
});
