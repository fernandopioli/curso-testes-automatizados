const AdressMatcher = require('./atividade1ClassConsumer')
const StringManipulations = require('./atividade1')

jest.mock('./atividade1')

 let sut

 beforeEach(() => {
    sut = new AdressMatcher('rua principal, 45, centro, campinas, sp, brasil')
 })

describe('AdressMatcher', () => {
    it('should call StringManipulations with correct value and times', () => {
        expect(StringManipulations.prototype.constructor).toHaveBeenCalledWith('rua principal, 45, centro, campinas, sp, brasil')
        expect(StringManipulations.prototype.constructor).toHaveBeenCalledTimes(1)
    })

    it('should findStreetName calls findFirstMatch with correct param', () => {
        sut.findStreetName('any_name')

        const spy = jest.spyOn(StringManipulations.prototype, 'findFirstMatch')

        expect(spy).toHaveBeenCalledWith('any_name')
        expect(spy).toHaveBeenCalledTimes(1)
    })

    it('should hideStreetName calls fix_start with correct param', () => {
        sut.hideStreetName('any_name')

        const spy = jest.spyOn(StringManipulations.prototype, 'fix_start')

        expect(spy).toHaveBeenCalledWith('any_name')
        expect(spy).toHaveBeenCalledTimes(1)
    })
})