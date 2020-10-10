import {compute} from "./compute"

describe('compute',()=> {

    it('should return 0 if compute is negative', () => {

//Pattern Arrangin -Act  - assert

//Arrangin
let result =0;
//Act
result = compute(-1);
//Assert
expect(result).toBe(0);

    })

    it('should increment if input is positive', () => {
        const result = compute(1);
        expect(result).toBe(2);
    })
})