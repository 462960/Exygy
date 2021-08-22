const BrowseContainer = require("./BrowseContainer")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new BrowseContainer.BrowseContainer()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
