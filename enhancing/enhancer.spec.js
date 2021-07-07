const { success, fail, repair, get } = require('./enhancer.js');

// test away!

describe('sanity check', () => {
    it('checks to see if exists', () => {
        expect(repair).toBeDefined()
    })
    
})

describe('repair tests', () => {
    it('add attributes', () => {
        expect(repair()).toBeInstanceOf(Object)
    })
    it('durability returns 100', () => {
        expect(repair({name: 'tom', durability:50, enhancement: 20}))
        .toHaveProperty('durability', 100)
    })
    it('preserves name and enhancement unchanged', () => {
        expect(repair({name: 'tom', enhancement: 20}))
        .toMatchObject({name: 'tom', enhancement: 20})
    })
})



describe('success test', () => {
    it('if less than 20 add 1', () => {
        const item = {name: 'tom', durability:50, enhancement: 19}
        
        // .toHaveProperty('enhancement')
        expect(success({enhancement: 19}))
        .toMatchObject({enhancement: 20})
    })
    it('if more than 20 return original values', () => {
        expect(success({enhancement: 20}))
        .toMatchObject({enhancement: 20})
    })
    it('if 20 or more then return original values', () => {
        expect(success({name: 'tom', durability:50, enhancement: 22}))
        .toMatchObject({name: 'tom', durability:50, enhancement: 22})
    })
})

describe('test fail', () =>{
    it('if enhancement is less than 15, decrease durability num by 5', () => {
        expect(fail({name: 'tom', durability:50, enhancement: 14}))
        .toMatchObject({name: 'tom', durability:45, enhancement: 14})
    })
    it('if enhancement is 15 or 16, decrease durability num by 10', () => {
        expect(fail({name: 'tom', durability:50, enhancement: 15}))
        .toMatchObject({name: 'tom', durability:40, enhancement: 15})
    })
    it('if enhancement is greater than 16, decrease durability num by 1', () => {
        expect(fail({name: 'tom', durability:50, enhancement: 17}))
        .toMatchObject({name: 'tom', durability:49, enhancement: 17})
    })
})

