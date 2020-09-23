
import { remote } from '../../../src'

describe('next sibling test', () => {
    it('should return next sibling of an element', async () => {
        const browser = await remote({
            capabilities: {
                browserName: 'foobar'
            }
        })
        const elem = await browser.$('#foo')
        const nextEl = await elem.next()

        expect(nextEl.elementId).toBe('some-next-elem')
    })
})