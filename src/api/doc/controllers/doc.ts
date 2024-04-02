/**
 * A set of functions called "actions" for `doc`
 */
const officegen = require('officegen')
const fs = require('fs');

export default {
  exampleAction: async (ctx, next) => {
    try {
      const docx = officegen('docx'); 
      const p = docx.createP();
      p.addText("sdfsdfsdf");

      const out = fs.createWriteStreame("result.docx");
      const newdoc = docx.generate(out);
      return p;
    } catch (err) {
      ctx.body = err;
    }
  }
};
