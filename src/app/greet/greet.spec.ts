import {greet} from './greet';

describe ('greet', ()=> {// greet suit

   it('should be equal to Hi : <name> good day.',()=> {
      expect(greet('gab')).toEqual('Hi : ' + 'gab' + ' good day.');
   })

   it('should include the <name> in the message',()=> {
    expect(greet('gab')).toContain('gab');
   })

   it('should include the "Hi" in the message',()=> {
    expect(greet('gab')).toContain('Hi');
   })

   it('should include the "good day" in the message',()=> {
    expect(greet('gab')).toContain('good day');
   })

   it('should include the "." in the message',()=> {
    expect(greet('gab')).toContain('.');
   })
   
})