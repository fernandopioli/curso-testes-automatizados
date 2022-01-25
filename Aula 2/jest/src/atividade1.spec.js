const StringManipulations = require('./atividade1')

describe('StringManipulations', () => {
    describe('constructor', () => {
        it('should throw if string is empty', () => {
            expect(() => new StringManipulations('')).toThrow(new Error('String cannot be empty'))
        })
        it('should throw if string is null', () => {
            expect(() => new StringManipulations(null)).toThrow(new Error('String cannot be empty'))
        })
        it('should throw if string is undefined', () => {
            expect(() => new StringManipulations(undefined)).toThrow(new Error('String cannot be empty'))
        })
    })
    describe('findFirstMatch', () => {
        it('should returns the first substring that matches the given string', () => {
            const sut = new StringManipulations('any_string_to_match')

            const result = sut.findFirstMatch('string')

            expect(result).toBe('s')
        })
        it('should returns empty string if the substring doesnt matches the given string', () => {
            const sut = new StringManipulations('string_not_macthes')

            const result = sut.findFirstMatch('invalid')

            expect(result).toBe('')
        })
    })
    describe('findLastMatch', () => {
        it('should returns the last substring that matches the given string', () => {
            const sut = new StringManipulations('any_string_to_match')

            const result = sut.findLastMatch('string')

            expect(result).toBe('g')
        })
        it('should returns empty string if the substring doesnt matches the given string', () => {
            const sut = new StringManipulations('string_not_macthes')

            const result = sut.findLastMatch('invalid')

            expect(result).toBe('')
        })
    })
    describe('substringBetweenMatches', () => {
        it('should returns the substring between two given other strings', () => {
            const sut = new StringManipulations('any_between_string')

            const result = sut.substringBetweenMatches('any_', '_string')

            expect(result).toBe('between')
        })
        it('should returns empty string if the substring doesnt matches the given string', () => {
            const sut = new StringManipulations('string_not_macthes')

            const result = sut.substringBetweenMatches('invalid')

            expect(result).toBe('')
        })
    })
    describe('substringBetweenMatches', () => {
        it('should returns a string made of the first 2 and the last 2 chars of the original string if more than 2 chars', () => {
            const sut = new StringManipulations('Venturus')

            const result = sut.both_ends()

            expect(result).toBe('Veus')
        })
        it('should returns empty string if the given string is less than 2 chars', () => {
            const sut = new StringManipulations('T')

            const result = sut.both_ends()

            expect(result).toBe('')
        })
    })
    describe('fix_start', () => {
        it('should returns a string where all occurences of its first char have been changed to *, except do not change the first char itself', () => {
            const sut = new StringManipulations('any_text')

            const result = sut.fix_start('babble')

            expect(result).toBe('ba**le')
        })
    })
})