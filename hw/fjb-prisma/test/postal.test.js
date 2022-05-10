const {
    getColonia
} = require('../src/controllers/postal');
const {
    resultExpected,
    queryResponse
} = require('./postal-mock');

test('getColonia con el cp76121', () => {
    const colonias = getColonia('76121');
    expect(colonias.resultados).toBe(12);
    expect(colonias).toStrictEqual(resultExpected);
});


describe('Given a postal code 76121', () => {
    describe('When postal code exists', () => {
        it('Then map colonias', () => {
            const colonias = getColonia('76121');
            expect(colonias.resultados).toBe(12);
            expect(colonias).toStrictEqual(resultExpected);
        });
    });
    describe('When postal code not exists', () => {
        it('Then throw an error', () => {
            const colonias = getColonia('76121');
            expect(colonias).toThrow();
        });
    });
});